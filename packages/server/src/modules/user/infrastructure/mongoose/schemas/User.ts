import mongoose, { Document, Schema, Model } from "mongoose";

export type UserAttributes = {
    name: string;
    email: string;
    password: string;
    plan: "standard" | "pro";
}

export type UserDocument = Document & UserAttributes;

type UserModel = Model<UserDocument>;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        license: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model<UserDocument, UserModel>('User', UserSchema);