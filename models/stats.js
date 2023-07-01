import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const schema = new mongoose.Schema({
    users: {
        type: Number,
        default: 0,
    },

    subscription: {
        type: Number,
        default: 0,
    },

    views: {
        type: Number,
        default: 0,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});



export const Stats = mongoose.model("Stats", schema);