import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
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
    email: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true,
        enum: ['president', 'secretary', 'committee', 'member'],
        default: 'member'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const Member = mongoose.model("Member", memberSchema);