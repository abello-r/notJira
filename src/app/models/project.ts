import mongoose, { Schema, model } from "mongoose";

export interface ProjectDocument {
	_id: string;
	name: string;
	status: string;
	area: string;
}

const ProjectSchema = new Schema<ProjectDocument>({
	name: { type: String, required: true },
	status: { type: String, enum: ['Pending', 'Completed'], required: true },
	area: { type: String, required: true }
}, { timestamps: true });

const Project = mongoose.models?.Project || model<ProjectDocument>('Project', ProjectSchema);
export default Project;
