import mongoose from "mongoose";

const ticketCollection = "tickets";

const ticketSchema = mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },

    purchase_datetime: {
        type: Date,
        default: Date.now(),
    },

    amount: {
        type: Number,
        required: true,
    },

    purchaser: {
        type: String,
        required: true,
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
    }],

});

const ticketModel = mongoose.model(ticketCollection, ticketSchema);

export default ticketModel;