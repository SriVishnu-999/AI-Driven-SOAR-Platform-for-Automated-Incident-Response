const express = require("express");
const router = express.Router();
const Incident = require("../models/Incident");
const { enrichIOC } = require("../services/enrichment");

router.post("/", async (req, res) => {
  try {
    const { sourceIP, user, description } = req.body;

    const enrichment = await enrichIOC(sourceIP);

    let severity = "Low";
    if (enrichment.combinedScore > 50) severity = "Critical";
    else if (enrichment.combinedScore > 25) severity = "High";
    else if (enrichment.combinedScore > 10) severity = "Medium";

    const incident = await Incident.create({
      sourceIP,
      user,
      description,
      severity,
      ...enrichment,
    });

    // 🔥 🔥 🔥 ADD REAL-TIME EMIT HERE
    const io = req.app.get("io");
    if (io) {
      io.emit("newIncident", incident);
    }

    res.json(incident);

  } catch (err) {
    console.error("Alert creation error:", err.message);
    res.status(500).json({ error: "Failed to create incident" });
  }
});

router.get("/", async (req, res) => {
  const incidents = await Incident.find().sort({ createdAt: -1 });
  res.json(incidents);
});

module.exports = router;