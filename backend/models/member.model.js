import mongoose from "mongoose";

// Single Source of Truth for Member Roles
export const MEMBER_ROLES = [
    'President',
    'Vice-President',
    'Secretary',
    'Treasurer',
    'Puja Secretary',
    'Assistant Secretary',
    'Sport Secretary',
    'Cultural Secretary',
    'Member'
];

// Single Source of Truth for Member Categories
export const MEMBER_CATEGORIES = [
    'president',
    'secretary',
    'committee',
    'member'
];

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: MEMBER_ROLES,
        trim: true
    },
    image: {
        type: String,
        required: false,
        default: "",
        trim: true
    },
    experience: {
        type: String,
        required: false,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    whatsapp: {
        type: String,
        required: false,
        trim: true
    },
    facebook: {
        type: String,
        required: false,
        trim: true
    },
    // Requirement 6: Instagram field for member card social icon
    instagram: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true,
        enum: MEMBER_CATEGORIES,
        default: 'member'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Member = mongoose.model("Member", memberSchema);
