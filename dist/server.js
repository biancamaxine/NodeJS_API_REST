"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const DB = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
};
mongoose_1.default.connect(`mongodb+srv://${DB.user}:${DB.pass}@mycluster.fm1sgia.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Server is connected in MongoDB'))
    .catch(err => console.log(err));
