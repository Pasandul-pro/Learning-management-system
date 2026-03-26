const express = require('express');
const { protect } = require('../middleware/auth');
const Announcement = require('../models/Announcement');
const Material = require('../models/Material');
const Mark = require('../models/Mark');
const User = require('../models/User');
const router = express.Router();

// @desc    Get dashboard summary
// @route   GET /api/student/dashboard
// @access  Private
router.get('/dashboard', protect, async (req, res) => {
  try {
    const announcements = await Announcement.find({ 
      $or: [{ targetAudience: 'all' }, { targetAudience: 'student' }] 
    }).sort({ createdAt: -1 }).limit(5);
    
    const marks = await Mark.find({ student: req.user._id }).populate('module');
    
    res.json({ announcements, marks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all materials
// @route   GET /api/student/materials
// @access  Private
router.get('/materials', protect, async (req, res) => {
  try {
    const materials = await Material.find().populate('module');
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all announcements
// @route   GET /api/student/announcements
// @access  Private
router.get('/announcements', protect, async (req, res) => {
  try {
    const announcements = await Announcement.find({ 
      $or: [{ targetAudience: 'all' }, { targetAudience: 'student' }] 
    }).populate('author', 'name');
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get student profile
// @route   GET /api/student/profile
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const profile = await User.findById(req.user._id).select('-password');
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
