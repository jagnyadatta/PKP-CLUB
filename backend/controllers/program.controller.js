import { Program } from "../models/program.model.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadStream = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "pkpclub_programs" },
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

/**
 * Get all programs/activities (Public endpoint)
 * Optional query: ?type=festival | ?type=sport | ?type=service
 */
export const getAllPrograms = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = { isActive: true };
    if (type && type !== "all") {
      filter.type = type;
    }

    const programs = await Program.find(filter).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: programs.length,
      data: programs,
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching programs/activities",
      error: error.message,
    });
  }
};

/**
 * Get program by ID (Public endpoint)
 */
export const getProgramById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid program ID",
      });
    }

    const program = await Program.findById(id);
    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: program,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching program details",
      error: error.message,
    });
  }
};

/**
 * Create Program (Admin only)
 */
export const createProgram = async (req, res) => {
  try {
    const {
      type,
      name,
      category,
      date,
      year,
      location,
      venue,
      teams,
      result,
      winner,
      runnerUp,
      manOfMatch,
      highlights,
      description,
      duration,
      participants,
      tag,
      badgeColor,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Program name is required",
      });
    }

    let imageUrl = "";
    if (req.file) {
      const uploadResult = await uploadStream(req.file.buffer);
      imageUrl = uploadResult.secure_url;
    }

    // Process highlights if passed as JSON string or comma-separated
    let parsedHighlights = [];
    if (highlights) {
      if (Array.isArray(highlights)) {
        parsedHighlights = highlights;
      } else if (typeof highlights === "string") {
        try {
          parsedHighlights = JSON.parse(highlights);
        } catch {
          parsedHighlights = highlights.split(",").map((h) => h.trim()).filter(Boolean);
        }
      }
    }

    const newProgram = new Program({
      type: type || "festival",
      name,
      category: category || "cultural",
      date: date || "",
      year: year || "",
      location: location || venue || "",
      venue: venue || location || "",
      teams: teams || "",
      result: result || "",
      winner: winner || "",
      runnerUp: runnerUp || "",
      manOfMatch: manOfMatch || "",
      highlights: parsedHighlights,
      description: description || "",
      duration: duration || "",
      participants: participants || "",
      tag: tag || "",
      badgeColor: badgeColor || "bg-amber-400 text-stone-900",
      image: imageUrl,
      isActive: true,
    });

    const savedProgram = await newProgram.save();

    return res.status(201).json({
      success: true,
      message: "Program created successfully",
      data: savedProgram,
    });
  } catch (error) {
    console.error("Error creating program:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error creating program",
      error: error.message,
    });
  }
};

/**
 * Update Program (Admin only)
 */
export const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid program ID",
      });
    }

    if (req.file) {
      const uploadResult = await uploadStream(req.file.buffer);
      updateData.image = uploadResult.secure_url;
    }

    // Parse highlights if present
    if (updateData.highlights && typeof updateData.highlights === "string") {
      try {
        updateData.highlights = JSON.parse(updateData.highlights);
      } catch {
        updateData.highlights = updateData.highlights.split(",").map((h) => h.trim()).filter(Boolean);
      }
    }

    delete updateData._id;
    delete updateData.createdAt;

    const updatedProgram = await Program.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProgram) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Program updated successfully",
      data: updatedProgram,
    });
  } catch (error) {
    console.error("Error updating program:", error);
    return res.status(500).json({
      success: false,
      message: "Error updating program",
      error: error.message,
    });
  }
};

/**
 * Delete Program (Admin only)
 */
export const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid program ID",
      });
    }

    const program = await Program.findById(id);
    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    // Delete image from Cloudinary if exists
    if (program.image && program.image.includes("cloudinary.com")) {
      try {
        const urlParts = program.image.split("/");
        const fileName = urlParts[urlParts.length - 1];
        const publicId = `pkpclub_programs/${fileName.split(".")[0]}`;
        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.error("Error deleting image from Cloudinary:", err);
      }
    }

    await Program.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Program deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting program:", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting program",
      error: error.message,
    });
  }
};
