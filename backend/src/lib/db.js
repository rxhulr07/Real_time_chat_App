import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // ⏳ Wait 5 seconds before failing
        });

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};
