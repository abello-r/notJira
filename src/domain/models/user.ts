import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
	_id: string;
	id: number;
	firstName: string;
	lastName: string;
	team: string;
	role: string;
	onDoingProjects: number;
	completedProjects: number;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
	id: { type: Number, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	team: { type: String, required: true },
	role: { type: String, required: true },
	onDoingProjects: { type: Number, required: true },
	completedProjects: { type: Number, required: true },
}, { timestamps: true });

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;
