require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

const RequestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  category: String,
  location: String,
  priority: String,
  description: String,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

const Request = mongoose.model("Request", RequestSchema);

app.post("/api/requests", async (req, res) => {
  const newReq = new Request(req.body);
  await newReq.save();
  res.json({ message: "Request submitted successfully!" });
});

app.get("/api/requests", async (req, res) => {
  const requests = await Request.find().sort({ createdAt: -1 });
  res.json(requests);
});
// UPDATE request status (Accept / Decline / Reject)
app.put("/api/requests/:id/status", async (req, res) => {
  const { status } = req.body;

  try {
    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", request: updated });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Error updating status", error });
  }
});


app.listen(process.env.PORT, () =>
  console.log(`🚀 Backend running on port ${process.env.PORT}`)
);
