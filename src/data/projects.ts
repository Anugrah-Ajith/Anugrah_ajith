// src/data/projects.ts
export interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  liveDemo?: string;
  github?: string;
  thumbnail?: string; // path to screenshot (optional)
}

export const projects: Project[] = [
  {
    title: "Lung Cancer Prediction System",
    category: "AI / Machine Learning / Full‑Stack Application",
    description:
      "A web app built with Python and Django that predicts lung‑cancer risk from health and lifestyle data.",
    features: [
      "Machine‑learning model implementation (Logistic Regression, Decision Tree, Random Forest, SVM)",
      "Data preprocessing & feature engineering",
      "Model performance comparison",
      "User authentication and real‑time prediction results",
    ],
    technologies: ["Python", "Django", "Scikit‑learn", "HTML", "CSS"],
    liveDemo: "https://lung-cancer-prediction-ml.vercel.app/",
    github: "https://github.com/Anugrah-Ajith/lung-cancer-prediction",
  },
  {
    title: "Service Connect",
    category: "Full‑Stack Web Application",
    description:
      "A hyper‑local on‑demand service marketplace connecting customers with nearby service providers.",
    features: [
      "User authentication",
      "Service listings & provider profiles",
      "Role‑based access control",
      "Backend API integration & real‑time updates",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://service-connect-cloud-frontend.vercel.app/",
    github: "https://github.com/Anugrah-Ajith/service-connect",
  },
  {
    title: "AI‑Powered College Virtual Assistant",
    category: "AI / Web Application",
    description:
      "Chatbot that assists students with admissions, courses, events, and general college information.",
    features: [
      "Automated student enquiries",
      "Dynamic response generation",
      "Backend API integration",
      "Database persistence",
    ],
    technologies: ["Python", "FastAPI", "SQLite"],
    // No public URLs – keep placeholders for later addition
    github: "https://github.com/Anugrah-Ajith/college-virtual-assistant",
  },
  {
    title: "Edge Detection System",
    category: "Computer Vision / Image Processing",
    description:
      "Python application that detects object boundaries using Sobel and Canny algorithms.",
    features: ["Sobel edge detection", "Canny edge detection", "Image upload & preview"],
    technologies: ["Python", "OpenCV"],
    github: "https://github.com/Anugrah-Ajith/edge-detection",
  },
];
