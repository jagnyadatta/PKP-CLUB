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
        enum: [
            'President',
            'Vice-President',
            'Secretary',
            'Treasurer',
            'Puja Secretary',
            'Assistant Secretary',
            'Sport Secretary',
            'Cultural Secretary',
            'Member'
        ],
        trim: true
    },
    image: {
        type: String,
        required: false,
        default: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
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
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Member = mongoose.model("Member", memberSchema);