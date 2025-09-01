import { abhishekPersona, toneOptions } from "../config/persona.js";

export const getPersonaInfo = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        persona: abhishekPersona,
        toneOptions: toneOptions,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve persona information",
    });
  }
};

export const getProjects = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        corporate: abhishekPersona.projects.corporate,
        personal: abhishekPersona.projects.personal,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve projects",
    });
  }
};

export const getSkills = (req, res) => {
  try {
    const skillsByCategory = {
      "Enterprise (TCS)": [
        "Java",
        "Spring Boot",
        "Apache Camel",
        "REST APIs",
        "Microservices",
        "Enterprise Integration",
      ],
      Frontend: [
        "React",
        "React Native",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      Backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
      Specialties: [
        "System Integration",
        "E-commerce",
        "Mobile App Development",
        "Web Development",
        "Payment Integration",
      ],
    };

    res.status(200).json({
      status: "success",
      data: {
        allSkills: abhishekPersona.specialties,
        skillsByCategory: skillsByCategory,
        currentTechnologies: abhishekPersona.currentRole.technologies,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve skills",
    });
  }
};

export const getCareer = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        currentRole: abhishekPersona.currentRole,
        education: abhishekPersona.education,
        currentFocus: abhishekPersona.currentFocus,
        experience: {
          corporate: "5+ months at TCS",
          personal: "1+ year Fullstack Development with 15+ projects",
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve career information",
    });
  }
};

export const getSocial = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        socialLinks: abhishekPersona.social,
        avatar: abhishekPersona.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve social links",
    });
  }
};
