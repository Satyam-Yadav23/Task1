import express from "express";
import router from "./Routes/user.js";
import cors from "cors";

const app =express();

app.use(cors());
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);

app.get("/" , (req, res) => {
    res.send("Hello from Home Page")
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})