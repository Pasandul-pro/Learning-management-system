const express = require('express');
const { protect, adminOnly } = require('../middleware/auth');
const Announcement = require('../models/Announcement');
const Material = require('../models/Material');
const Mark = require('../models/Mark');
const User = require('../models/User');
const router = express.Router();

// @desc    Post a new announcement
// @route   POST /api/admin/announcements
// @access  Private/Admin
router.post('/announcements', protect, adminOnly, async (req, res) => {
  const { title, content, targetAudience } = req.body;
  try {
    const announcement = await Announcement.create({
      title,
      content,
      targetAudience,
      author: req.user._id
    });
    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Upload course material
// @route   POST /api/admin/materials
// @access  Private/Admin
router.post('/materials', protect, adminOnly, async (req, res) => {
  const { title, description, module, fileUrl, fileType } = req.body;
  try {
    const material = await Material.create({
      title,
      description,
      module,
      fileUrl,
      fileType,
      uploadedBy: req.user._id
    });
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Release marks for a module
// @route   POST /api/admin/marks
// @access  Private/Admin
router.post('/marks', protect, adminOnly, async (req, res) => {
  const { studentId, moduleId, examName, score, comments } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(studentId) || !mongoose.Types.ObjectId.isValid(moduleId)) {
      return res.status(400).json({ message: 'Invalid Student ID or Module ID format' });
    }

    const mark = await Mark.create({
      student: studentId,
      module: moduleId,
      examName,
      score,
      comments,
      releasedBy: req.user._id
    });
    res.status(201).json(mark);
  } catch (error) {
    console.error('Mark Release Error:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
