require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// -------------------- DATABASE CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// -------------------- DATABASE SCHEMA --------------------
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

// -------------------- API: CREATE REQUEST --------------------
app.post("/api/requests", async (req, res) => {
  try {
    const newReq = new Request(req.body);
    await newReq.save();
    res.json({ message: "Request submitted successfully!" });
  } catch (error) {
    console.error("Request Save Error:", error);
    res.status(500).json({ message: "Failed to submit request" });
  }
});

// -------------------- API: FETCH REQUESTS --------------------
app.get("/api/requests", async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Failed to load requests" });
  }
});

// -------------------- API: UPDATE REQUEST STATUS --------------------
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
    console.error("Status Update Error:", error);
    res.status(500).json({ message: "Error updating status", error });
  }
});

// -------------------- TWILIO CLIENT --------------------
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// -------------------- API: SEND SMS --------------------
app.post("/send-sms", async (req, res) => {
  const { recipient, message } = req.body;

  if (!recipient || !message) {
    return res.json({ success: false, error: "Missing recipient or message" });
  }

  try {
    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER,
      to: recipient
    });

    res.json({ success: true, sid: sms.sid });
  } catch (err) {
    console.error("SMS Error:", err.message);
    res.json({ success: false, error: err.message });
  }
});

// -------------------- START SERVER --------------------
app.listen(process.env.PORT, () => {
  console.log(`🚀 Backend running on port ${process.env.PORT}`);
});


