import express from "express";
import userRoutes from "./Routes/user.routes.js";
import authRoutes from "./Routes/auth.routes.js";
import cors from "cors";
import "./Database/db.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message , statusCode });
});
app.listen(3005, () => {
  console.log("Server is running on http://localhost:3005");
});


