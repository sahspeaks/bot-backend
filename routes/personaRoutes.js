import express from "express";
import {
  getPersonaInfo,
  getProjects,
  getSkills,
  getCareer,
  getSocial,
} from "../controllers/personaController.js";

const router = express.Router();

// @desc    Get complete persona information
// @route   GET /api/persona
// @access  Public
router.get("/", getPersonaInfo);

// @desc    Get projects information
// @route   GET /api/persona/projects
// @access  Public
router.get("/projects", getProjects);

// @desc    Get skills information
// @route   GET /api/persona/skills
// @access  Public
router.get("/skills", getSkills);

// @desc    Get career information
// @route   GET /api/persona/career
// @access  Public
router.get("/career", getCareer);

// @desc    Get social links
// @route   GET /api/persona/social
// @access  Public
router.get("/social", getSocial);

export default router;
