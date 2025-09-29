import { Member } from "../models/member.model.js";
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

const addMember = async (req, res) => {
  try {
    const { name, role, experience, phone, whatsapp, facebook, email, category } = req.body;

    if (!name || !role || !phone) {
      return res.status(400).json({ success: false, message: "Name, role, and phone are required fields" });
    }

    let imageUrl = "";
    if (req.file) {
      const uploadResult = await uploadStream(req.file.buffer); // use buffer
      imageUrl = uploadResult.secure_url;
    }

    // Check duplicate
    const existingMember = await Member.findOne({ phone });
    if (existingMember) {
      return res.status(409).json({ success: false, message: "Member with this phone number already exists" });
    }

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
    });

    const savedMember = await newMember.save();

    return res.status(201).json({ success: true, message: "Member added successfully", data: savedMember });
  } catch (error) {
    console.error("Error adding member:", error);
    return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find({}).sort({
      category: 1,
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (error) {
    console.error("Error fetching members:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching members",
      error: error.message,
    });
  }
};

const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    const member = await Member.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    console.error("Error fetching member:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching member",
      error: error.message,
    });
  }
};

const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    // Remove immutable fields
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const updatedMember = await Member.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: updatedMember,
    });
  } catch (error) {
    console.error("Error updating member:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error updating member",
      error: error.message,
    });
  }
};

const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    // Soft delete by setting isActive to false
    const deletedMember = await Member.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!deletedMember) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Member deleted successfully",
      data: deletedMember,
    });
  } catch (error) {
    console.error("Error deleting member:", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting member",
      error: error.message,
    });
  }
};

export { addMember, getAllMembers, getMemberById, updateMember, deleteMember };
