import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		console.log("[+] Connecting to MongoDB...");
		const { connection } = await mongoose.connect(process.env.MONGODB_URI as string);
		if (connection.readyState === 1) {
			return Promise.resolve(connection);
		}
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
}
