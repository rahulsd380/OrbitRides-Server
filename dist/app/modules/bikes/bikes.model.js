"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    pricePerHour: {
        type: String,
        required: [true, "Price per hour is required"],
    },
    isAvailable: { type: Boolean },
    cc: {
        type: Number,
        required: [true, "CC is required"],
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
    },
    model: {
        type: String,
        required: [true, "Model is required"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
    },
}, {
    timestamps: true,
});
exports.Bike = (0, mongoose_1.model)("Bike", bikeSchema);
