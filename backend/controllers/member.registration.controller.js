// controllers/member.registration.controller.js
import { Member } from "../models/member.model.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadStream = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "pkpclub_members" },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// Helper function to delete image from Cloudinary
const deleteFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) return;
    
    // Extract public_id from Cloudinary URL
    const urlParts = imageUrl.split('/');
    const fileName = urlParts[urlParts.length - 1];
    const publicId = `pkpclub_members/${fileName.split('.')[0]}`;
    
    await cloudinary.uploader.destroy(publicId);
    console.log(`Deleted image from Cloudinary: ${publicId}`);
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    // Don't throw error here, just log it
  }
};

// Self-registration function
const registerMember = async (req, res) => {
  try {
    const { 
      name, 
      role, 
      experience, 
      phone, 
      whatsapp, 
      facebook, 
      email, 
      category 
    } = req.body;

    // Validation
    if (!name || !role || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: "Name, role, and phone number are required fields" 
      });
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10-15 digits"
      });
    }

    // Check if member already exists
    const existingMember = await Member.findOne({ phone });
    if (existingMember) {
      return res.status(409).json({
        success: false,
        message: "Member with this phone number already exists"
      });
    }

    let imageUrl = "";
    // Handle image upload
    if (req.file) {
      // Check file size (already handled by multer, but double-check)
      if (req.file.size > 10 * 1024 * 1024) {
        return res.status(400).json({
          success: false,
          message: "Image size must be less than 10MB"
        });
      }
      
      try {
        const uploadResult = await uploadStream(req.file.buffer);
        imageUrl = uploadResult.secure_url;
      } catch (uploadError) {
        console.error("Image upload error:", uploadError);
        return res.status(500).json({
          success: false,
          message: "Failed to upload image. Please try again."
        });
      }
    }

    // Create new member
    const newMember = new Member({
      name,
      role,
      image: imageUrl,
      experience: experience || "",
      phone,
      whatsapp: whatsapp || phone,
      facebook: facebook || "",
      email: email || "",
      category: category || "member",
      isActive: true, // New members are active by default
      joinDate: new Date()
    });

    const savedMember = await newMember.save();

    return res.status(201).json({
      success: true,
      message: "Registration successful! Your membership will be reviewed by admin.",
      data: {
        id: savedMember._id,
        name: savedMember.name,
        role: savedMember.role,
        phone: savedMember.phone,
        category: savedMember.category,
        registrationDate: savedMember.joinDate
      }
    });

  } catch (error) {
    console.error("Registration error:", error);
    
    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors
      });
    }

    return res.status(500).json({
      success: false,
      message: "Registration failed. Please try again later.",
      error: error.message
    });
  }
};

// Get member profile
const getMemberProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID"
      });
    }

    const member = await Member.findById(id).select("-__v");

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: member
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching profile",
      error: error.message
    });
  }
};

// Update member profile
const updateMemberProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID"
      });
    }

    // Find existing member
    const existingMember = await Member.findById(id);
    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found"
      });
    }

    // Handle image update
    if (req.file) {
      // Delete old image if exists
      if (existingMember.image) {
        await deleteFromCloudinary(existingMember.image);
      }
      
      // Upload new image
      const uploadResult = await uploadStream(req.file.buffer);
      updateData.image = uploadResult.secure_url;
    }

    // Remove immutable fields
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const updatedMember = await Member.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedMember
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error updating profile",
      error: error.message
    });
  }
};

// Delete member profile (soft delete)
const deleteMemberProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID"
      });
    }

    const member = await Member.findById(id);
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found"
      });
    }

    // Delete image from Cloudinary
    if (member.image) {
      await deleteFromCloudinary(member.image);
    }

    // Soft delete the member
    member.isActive = false;
    await member.save();

    return res.status(200).json({
      success: true,
      message: "Your membership has been deleted",
      data: {
        id: member._id,
        name: member.name,
        deletedAt: new Date()
      }
    });
  } catch (error) {
    console.error("Error deleting profile:", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting profile",
      error: error.message
    });
  }
};

export { 
  registerMember, 
  getMemberProfile, 
  updateMemberProfile, 
  deleteMemberProfile 
};
