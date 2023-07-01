import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter title"],
    },
    description: {
        type: String,
        required: [true, "Please Enter Description"],
    },
    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            video: {
                public_id: String,
                url: String,
            },
        },
    ],
    posters: {
        public_id: String,
        url: String,
    },
    views: {
        type: Number,
        default: 0,
    },
    numOfVideos: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: [true, "Enter creators name"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const Course = mongoose.model("Course", schema);