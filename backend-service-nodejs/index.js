const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// Routes
const taskRouter = require("./routes/tasks");

const PORT = process.env.PORT || 3000;

const app = express();
app.use("/tasks/v1/", taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})