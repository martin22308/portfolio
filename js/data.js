/**
 * Portfolio Data Source of Truth for Martin Emad Maher
 * Strictly based on official CV and verified previous portfolio.
 * Structured for easy extensibility and clean separation of concerns.
 */

export const personalInfo = {
  name: "Martin Emad Maher",
  shortName: "Martin Emad",
  title: "AI Engineer | Machine Learning | Computer Vision | NLP",
  tagline: "Building intelligent, real-world AI solutions across Computer Vision, Machine Learning, NLP, Speech Recognition, and AI-powered applications.",
  bio: "Final-year Bachelor of Artificial Intelligence Technology student at Helwan International Technological University. Practical experience engineering end-to-end AI systems, specializing in real-time Computer Vision (YOLO, CNNs), Multilingual Voice Assistants (NLP, Speech Recognition), and LLM/API integration (Google Gemini). Proven track record delivering complex initiatives, including the flagship Urban AI Guardian smart-city platform for the Digital Egypt Pioneers Initiative (DEPI).",
  status: "Available for AI Engineer & ML Roles",
  location: "Cairo, Egypt (El Nozha 2)",
  email: "ramizemad234@gmail.com",
  phone: "+201278867936",
  phoneFormatted: "+20 127 886 7936",
  linkedin: "http://www.linkedin.com/in/martin-emad-39875429b",
  github: "https://github.com/martin22308",
  cvPdf: "assets/Martin_Emad_Maher_CV.pdf",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Advanced" }
  ]
};

export const coreExpertise = [
  {
    id: "computer-vision",
    icon: "eye",
    title: "Computer Vision & YOLO",
    description: "Deep expertise in real-time object detection, CNN architectures, multi-class image classification, and visual surveillance pipelines using YOLO and OpenCV.",
    tech: ["YOLO", "CNNs", "OpenCV", "Object Detection", "Image Classification"]
  },
  {
    id: "machine-learning",
    icon: "cpu",
    title: "Machine Learning & Deep Learning",
    description: "End-to-end model development from exploratory data analysis and feature engineering to training, hyperparameter optimization, and regression/prediction models.",
    tech: ["Machine Learning", "Deep Learning", "TensorFlow", "Regression Analysis", "Evaluation"]
  },
  {
    id: "nlp-speech",
    icon: "mic",
    title: "NLP & Speech Recognition",
    description: "Developing bilingual voice interaction systems, speech-to-text acoustic processing, intent classification, and text-to-speech feedback across Arabic and English.",
    tech: ["NLP", "Speech Recognition", "Text-to-Speech", "Language Detection", "Conversational AI"]
  },
  {
    id: "api-integration",
    icon: "zap",
    title: "Generative AI & API Integration",
    description: "Architecting context-aware AI applications leveraging state-of-the-art foundation models like Google Gemini API for intelligent reasoning and multi-modal assistants.",
    tech: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "Context Management"]
  },
  {
    id: "app-development",
    icon: "layout",
    title: "AI App Development & Serving",
    description: "Building production-minded AI service architectures with high-throughput FastAPI backends, dynamic Streamlit monitoring dashboards, and responsive desktop GUIs.",
    tech: ["FastAPI", "Streamlit", "Python", "Tkinter", "REST APIs"]
  },
  {
    id: "automation-prototyping",
    icon: "sliders",
    title: "Automation & Hardware Prototyping",
    description: "Creating enterprise workflow automations via UiPath RPA and engineering embedded IoT prototypes utilizing Arduino Uno, sensors, and actuator logic.",
    tech: ["UiPath RPA", "Arduino Uno", "PIR Sensors", "Ultrasonic Sensors", "Embedded C/C++"]
  }
];

export const technicalSkills = {
  aiMl: {
    category: "AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "Computer Vision", level: "Specialist" },
      { name: "Natural Language Processing (NLP)", level: "Advanced" },
      { name: "Speech Recognition", level: "Advanced" }
    ]
  },
  computerVision: {
    category: "Computer Vision & Deep Learning",
    icon: "camera",
    skills: [
      { name: "YOLO (Object Detection)", level: "Specialist" },
      { name: "Convolutional Neural Networks (CNNs)", level: "Advanced" },
      { name: "OpenCV", level: "Advanced" },
      { name: "Image Classification", level: "Advanced" },
      { name: "Multi-Model Video Surveillance", level: "Advanced" }
    ]
  },
  programming: {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "Primary / Expert" },
      { name: "Java", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "PROLOG", level: "Logic Programming" }
    ]
  },
  frameworksTools: {
    category: "Frameworks, APIs & Tools",
    icon: "tool",
    skills: [
      { name: "TensorFlow", level: "Model Development" },
      { name: "Google Gemini API", level: "LLM & Multimodal" },
      { name: "FastAPI", level: "High-Performance APIs" },
      { name: "Streamlit", level: "Interactive Dashboards" },
      { name: "UiPath", level: "RPA Automation" }
    ]
  },
  dataWorkflow: {
    category: "Data & AI Lifecycle",
    icon: "database",
    skills: [
      { name: "Data Preprocessing", level: "Robust Cleaning" },
      { name: "Feature Engineering", level: "Domain Extraction" },
      { name: "Model Evaluation & Metrics", level: "Rigorous Testing" },
      { name: "Inference Pipelines", level: "Real-Time Serving" }
    ]
  },
  webGuiHardware: {
    category: "GUI, Web & Embedded Hardware",
    icon: "cpu",
    skills: [
      { name: "HTML & CSS", level: "Responsive Web" },
      { name: "Tkinter", level: "Desktop GUI" },
      { name: "Arduino Uno", level: "Sensor Interfacing" },
      { name: "PIR & Ultrasonic Sensors", level: "Hardware Prototyping" }
    ]
  },
  softSkills: [
    "Strong problem-solving & analytical thinking",
    "Effective communication & cross-functional teamwork",
    "Ability to work under pressure and meet strict deadlines",
    "Meticulous attention to detail and precision",
    "Adaptability & continuous learning mindset",
    "Time management & task prioritization",
    "Professional engineering responsibility & commitment"
  ]
};

export const projects = [
  {
    id: "urban-ai-guardian",
    title: "Urban AI Guardian",
    tier: 1, // Flagship Showcase
    featured: true,
    badge: "DEPI Graduation Project — Flagship",
    category: "Computer Vision",
    categoryLabel: "Computer Vision & Smart City Monitoring",
    shortTagline: "Real-time AI-powered smart city monitoring system integrating 5 specialized YOLO models for civic safety and municipal intelligence.",
    overview: "Urban AI Guardian is an enterprise-scale smart-city monitoring platform engineered as the DEPI graduation project under the Digital Egypt Pioneers Initiative (Microsoft Machine Learning Engineer Track, supervised by Eng. Sara Abdelmoaty). The system is built to autonomously detect municipal violations, hazardous conditions, and public safety threats in real time across urban camera streams.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "CNN",
      "FastAPI",
      "Streamlit",
      "Computer Vision",
      "Multi-Model Inference"
    ],
    architecture: {
      inputs: "Urban Surveillance Video Streams & IP Camera Feeds",
      pipeline: "Multi-Stream Video Ingestion → Preprocessing & Frame Extraction → Parallel Multi-Model YOLO Inference Grid → Trigger Logic & Alert Manager → Microservices Dispatch",
      services: "FastAPI REST/WebSocket Backend + Streamlit Real-Time Analytics & Incident Command Dashboard"
    },
    specializedModels: [
      { name: "Waste Detection", role: "Identifies discarded litter, plastic, and unmanaged refuse on city streets." },
      { name: "Garbage-Bin Overflow", role: "Detects overfilled municipal waste receptacles to optimize sanitation routes." },
      { name: "Water Leakage", role: "Monitors pipe and municipal infrastructure ruptures to prevent resource loss." },
      { name: "Weapons Detection", role: "Surveils public venues for concealed or drawn firearms and bladed weapons." },
      { name: "Aggressive Behavior Detection", role: "Analyzes human motion dynamics to trigger instant alerts on violent or hostile altercations." }
    ],
    myRole: [
      "Co-developed the overarching platform architecture and model inference workflow.",
      "Engineered and optimized the model training pipelines for specialized YOLO detectors.",
      "Formulated the alert-management logic to categorize incidents and route critical triggers.",
      "Built the interactive Streamlit monitoring dashboard and integrated FastAPI backend services for live telemetry.",
      "Collaborated in a high-performing agile engineering team under DEPI track supervisor Eng. Sara Abdelmoaty."
    ],
    keyFeatures: [
      "Simultaneous execution of 5 specialized YOLO computer vision detectors.",
      "Automated real-time incident alerting and prioritization logic.",
      "Intuitive Streamlit operations dashboard visualizing live detections and telemetry.",
      "High-throughput FastAPI microservice interface enabling seamless municipal integration.",
      "Engineered with clean separation of model inference and presentation layers."
    ],
    github: null, // Placeholder to avoid hallucinating
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Digital Egypt Pioneers Initiative (DEPI) – AI & Data Science, Microsoft Machine Learning Engineer track, supervised by Eng. Sara Abdelmoaty.",
    image: null,
    slideImage: "assets/slides/Slide7.PNG"
  },
  {
    id: "bulbul-robot",
    title: "Bulbul Hospital Companion Robot",
    tier: 2,
    featured: true,
    badge: "Healthcare AI & Robotics",
    category: "AI & NLP",
    categoryLabel: "Healthcare AI, Robotics & NLP",
    shortTagline: "AI-powered hospital companion robot with multimodal voice interaction, multilingual support, and automated delivery dispatch.",
    overview: "Bulbul is an autonomous AI-driven hospital companion robot designed to enhance patient care and reduce staff burden in healthcare environments. Combining conversational intelligence, vision-based interaction, and physical task coordination, Bulbul facilitates hands-free medicine and meal delivery via voice instructions.",
    technologies: [
      "Python",
      "Google Gemini API",
      "Computer Vision",
      "NLP",
      "Speech Recognition",
      "Multilingual AI",
      "GUI (Tkinter)"
    ],
    myRole: [
      "Designed and integrated the voice interaction pipeline with continuous speech recognition.",
      "Integrated Google Gemini API to handle patient inquiries with empathetic, context-aware responses.",
      "Enabled command interpretation for automated medication and food delivery routines.",
      "Incorporated computer vision modules and built a functional desktop control GUI."
    ],
    keyFeatures: [
      "Multilingual natural voice conversation supporting Arabic and English.",
      "Integration with Google Gemini API for intelligent, domain-appropriate dialogue.",
      "Voice-directed navigation commands to dispense medicine and food to specific patient beds.",
      "Vision-based patient identification and interactive control GUI."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Applied Healthcare AI & Robotics Development",
    image: "assets/images/bulbul_robot_preview.png",
    slideImage: "assets/slides/Slide8.PNG"
  },
  {
    id: "multilingual-voice-assistant",
    title: "Multilingual Voice Assistant",
    tier: 2,
    featured: true,
    badge: "NLP & Speech",
    category: "AI & NLP",
    categoryLabel: "NLP & Acoustic Speech Processing",
    shortTagline: "Real-time bilingual voice assistant featuring dynamic language detection, speech recognition, and intent execution.",
    overview: "A voice-activated artificial intelligence assistant capable of fluid bilingual communication in both Arabic and English. The system processes live microphone audio, dynamically detects the spoken language, extracts user intent via NLP, and generates vocalized responses with low latency.",
    technologies: [
      "Python",
      "Speech Recognition",
      "Text-to-Speech",
      "NLP",
      "Language Detection",
      "Audio Processing"
    ],
    myRole: [
      "Engineered real-time acoustic capture and audio stream preprocessing.",
      "Implemented bilingual language classification to route user input between Arabic and English models.",
      "Built intent parsing and command execution logic for system actions and conversational replies.",
      "Integrated text-to-speech synthesis modules matching the recognized input language."
    ],
    keyFeatures: [
      "Low-latency real-time speech-to-text transcription.",
      "Automatic language identification between Arabic and English without manual switching.",
      "NLP-powered command interpretation and contextual response generation.",
      "Natural voice feedback with multi-voice speech synthesis."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Speech Processing & NLP Research Prototype",
    image: null,
    slideImage: "assets/slides/Slide7.PNG"
  },
  {
    id: "city-explorer",
    title: "City Explorer",
    tier: 2,
    featured: true,
    badge: "Computer Vision & GenAI",
    category: "Computer Vision",
    categoryLabel: "Computer Vision & Generative AI",
    shortTagline: "Computer vision landmark recognition platform coupled with Google Gemini API for live cultural storytelling.",
    overview: "City Explorer is an intelligent tourist guide application that bridges computer vision with generative AI. The system identifies iconic Egyptian landmarks from camera feeds or uploaded imagery and enriches the user experience by delivering real-time historical facts, architectural context, and visitor insights via Google Gemini.",
    technologies: [
      "Python",
      "Computer Vision",
      "CNN",
      "Google Gemini API",
      "OpenCV",
      "Image Processing"
    ],
    myRole: [
      "Built the landmark image classification pipeline using deep convolutional networks.",
      "Implemented image preprocessing and feature extraction with OpenCV.",
      "Integrated the Google Gemini API to generate real-time, contextually rich narrative descriptions based on detected visual targets."
    ],
    keyFeatures: [
      "Automated detection and classification of renowned Egyptian historical monuments.",
      "Dynamic prompt orchestration with Google Gemini API for accurate, real-time cultural facts.",
      "Visual bounding and information overlay for live visitor guidance."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Computer Vision & Cultural Heritage AI Application",
    image: "assets/images/city_explorer_dashboard_preview.png",
    slideImage: "assets/slides/Slide12.PNG"
  },
  {
    id: "object-detection-yolo",
    title: "Object Detection using YOLO & CNNs",
    tier: 3,
    featured: false,
    badge: "Computer Vision",
    category: "Computer Vision",
    categoryLabel: "Deep Learning & Object Localization",
    shortTagline: "High-accuracy object detection and classification models built and trained using YOLO and CNN architectures.",
    overview: "A specialized computer vision project centered on training, tuning, and evaluating state-of-the-art YOLO architectures and Convolutional Neural Networks for multi-class object localization and classification across complex visual scenes.",
    technologies: [
      "Python",
      "YOLO",
      "CNN",
      "OpenCV",
      "Deep Learning",
      "Data Augmentation"
    ],
    myRole: [
      "Curated, preprocessed, and augmented specialized image datasets for model training.",
      "Trained and fine-tuned YOLO architectures for bounding box regression and class probability estimation.",
      "Benchmarked model performance and optimized inference execution on image and video inputs."
    ],
    keyFeatures: [
      "Real-time object localization with high spatial precision bounding boxes.",
      "Robust detection across diverse lighting and environmental conditions.",
      "Clean modular code structure allowing integration into larger computer vision pipelines."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Core Computer Vision Model Engineering",
    image: null,
    slideImage: "assets/slides/Slide7.PNG"
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    tier: 3,
    featured: false,
    badge: "Machine Learning",
    category: "Machine Learning",
    categoryLabel: "Predictive Modeling & Regression",
    shortTagline: "Supervised machine learning regression model predicting vehicle market prices from structured multi-feature datasets.",
    overview: "A data-driven predictive analytics project aimed at modeling automobile market valuations. Utilizing regression algorithms, the model analyzes historical automotive specifications to predict accurate transaction prices.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Regression Analysis",
      "Feature Engineering"
    ],
    myRole: [
      "Performed comprehensive exploratory data analysis (EDA) to uncover price drivers.",
      "Engineered transformations, handled missing values, encoded categorical variables, and normalized features.",
      "Trained, tuned, and evaluated regression algorithms using statistical validation metrics."
    ],
    keyFeatures: [
      "Systematic data preprocessing and outlier mitigation pipeline.",
      "Multi-variable feature importance ranking identifying primary valuation drivers.",
      "Accurate continuous price estimation evaluated through cross-validation."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Machine Learning Regression Workflow",
    image: "assets/images/car_price_preview.png",
    slideImage: "assets/slides/Slide10.PNG"
  },
  {
    id: "data-dashboard-streamlit",
    title: "Interactive Data Dashboard",
    tier: 3,
    featured: false,
    badge: "Data Visualization",
    category: "Machine Learning",
    categoryLabel: "Data Analytics & Interactive Web Apps",
    shortTagline: "Interactive web dashboard built with Streamlit for exploring datasets, computing metrics, and visualizing multidimensional distributions.",
    overview: "A full-featured analytical dashboard built with Streamlit and Python. It empowers users to explore complex datasets dynamically, providing real-time filtering, metric aggregations, and high-clarity data visualizations.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Visualization"
    ],
    myRole: [
      "Designed dashboard UX/UI layout for intuitive data discovery.",
      "Implemented reactive caching and data slicing with Pandas.",
      "Created dynamic visual charts for statistical summaries and trend analysis."
    ],
    keyFeatures: [
      "Instant multi-parameter data filtering and aggregation.",
      "Interactive charts and distribution plots for exploratory data insights.",
      "Zero-latency parameter adjustments through reactive Streamlit execution."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Data Analysis & Web Tooling",
    image: "assets/images/city_explorer_dashboard_preview.png",
    slideImage: "assets/slides/Slide12.PNG"
  },
  {
    id: "gpa-qr-automation",
    title: "GPA & QR Code Automation",
    tier: 3,
    featured: false,
    badge: "RPA Automation",
    category: "Automation & IoT",
    categoryLabel: "Robotic Process Automation (RPA)",
    shortTagline: "UiPath robotic process automation automating academic GPA computation and secure QR code generation.",
    overview: "An enterprise workflow automation bot built in UiPath designed to streamline academic administrative duties. The robot reads raw student grade registries, computes cumulative GPAs with zero calculation error, and dynamically generates QR codes for secure verification.",
    technologies: [
      "UiPath",
      "Robotic Process Automation",
      "QR Code Generation",
      "Process Optimization",
      "Excel Automation"
    ],
    myRole: [
      "Mapped out administrative process requirements and exception handling rules.",
      "Programmed UiPath automation workflows, loops, and data validation routines.",
      "Implemented dynamic QR code encoding and automatic document updating."
    ],
    keyFeatures: [
      "Elimination of manual human error in cumulative GPA calculations.",
      "Automated QR code asset generation for instant credential verification.",
      "Significant acceleration of administrative grading turnaround times."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "RPA & Academic Workflow Optimization",
    image: "assets/images/gpa_qr_preview.png",
    slideImage: "assets/slides/Slide9.PNG"
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation System",
    tier: 3,
    featured: false,
    badge: "Hardware & IoT",
    category: "Automation & IoT",
    categoryLabel: "Embedded Systems & IoT Hardware Prototype",
    shortTagline: "Arduino Uno-based smart home prototype integrating keypad access, PIR motion detection, ultrasonic ranging, and LCD feedback.",
    overview: "A hardware-integrated smart home automation and security prototype developed with an Arduino Uno microcontroller. The embedded system integrates a keypad for passcode entry, a PIR motion sensor and ultrasonic sensor for intrusion monitoring, and triggers automated lighting and audio alarms with real-time feedback on an LCD screen.",
    technologies: [
      "Arduino Uno",
      "Embedded C/C++",
      "PIR Sensor",
      "Ultrasonic Sensor",
      "Keypad",
      "LCD Display",
      "Hardware Prototyping"
    ],
    myRole: [
      "Architected sensor circuit wiring, power distribution, and component integration on breadboard/PCB.",
      "Wrote microcontroller firmware handling sensor polling, debounce algorithms, and interrupt logic.",
      "Implemented security state-machine coordinating keypad inputs, buzzer alerts, and LCD telemetry."
    ],
    keyFeatures: [
      "Automated occupancy lighting triggered by PIR motion detection.",
      "Proximity-based security perimeter surveillance using ultrasonic ranging.",
      "Keypad-authenticated arming and disarming with audible alarms on security breaches.",
      "Real-time diagnostic and operational feedback rendered on an integrated LCD panel."
    ],
    github: null,
    demo: null,
    githubPlaceholder: "[PROJECT GITHUB LINK]",
    demoPlaceholder: "[PROJECT DEMO LINK]",
    context: "Embedded Systems & Hardware IoT Prototype",
    image: "assets/images/smart_home_preview.png",
    slideImage: "assets/slides/Slide11.PNG"
  }
];

export const experience = [
  {
    role: "Artificial Intelligence Engineer",
    subtitle: "Projects & Practical Experience",
    period: "2024 – 2026",
    type: "Practical Engineering Experience",
    description: "End-to-end artificial intelligence engineering across computer vision, machine learning, speech processing, and LLM-powered systems.",
    highlights: [
      "Designed and developed end-to-end AI solutions across Computer Vision, NLP, and Speech Recognition.",
      "Built and deployed AI-powered systems including hospital companion robots and multilingual voice assistants.",
      "Implemented object detection and image classification models using YOLO and CNN architectures.",
      "Developed and optimized machine learning models for regression and prediction tasks.",
      "Integrated AI applications with external APIs such as Google Gemini for intelligent, context-aware responses.",
      "Performed data preprocessing, feature engineering, and rigorous model evaluation across real-world datasets.",
      "Collaborated in team-based projects following structured development workflows and version control.",
      "Co-developed the AI-powered smart city monitoring platform (Urban AI Guardian) for the DEPI graduation project, integrating five specialized YOLO models in real time."
    ]
  },
  {
    role: "Machine Learning Engineer Trainee",
    subtitle: "Digital Egypt Pioneers Initiative (DEPI) – Microsoft Track",
    period: "Nov 2025 – Jul 2026",
    type: "National Initiative & Technical Track",
    description: "Selective national initiative under the Egyptian Ministry of Communications and Information Technology (MCIT) focusing on Microsoft Machine Learning Engineer curriculum.",
    highlights: [
      "Completed rigorous training in advanced machine learning, deep learning architectures, and scalable AI workflows.",
      "Collaborated under the supervision of Eng. Sara Abdelmoaty to deliver the Urban AI Guardian graduation project.",
      "Engineered multi-model YOLO object detection pipelines and containerized FastAPI/Streamlit monitoring services.",
      "Participated in professional code reviews, team agile sprints, and architectural design evaluations."
    ]
  },
  {
    role: "Computer Vision Engineering Trainee",
    subtitle: "ITIDA & National Telecommunication Institute (NTI)",
    period: "Aug – Sep 2025",
    type: "Intensive 120-Hour Specialized Program",
    description: "120 hours of focused hands-on training in state-of-the-art computer vision and deep learning.",
    highlights: [
      "Acquired deep practical mastery in OpenCV, image transformations, contour analysis, and feature extraction.",
      "Trained Convolutional Neural Networks (CNNs) for multi-class image classification and pattern recognition.",
      "Implemented YOLO architectures for real-time bounding box detection, non-max suppression, and inference optimization."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Artificial Intelligence Technology",
    institution: "Helwan International Technological University",
    location: "Cairo, Egypt",
    period: "Sep 2022 – Expected 2026",
    status: "Final Year Student",
    details: [
      "Specialization in Artificial Intelligence, Machine Learning, Deep Learning, and Intelligent Software Systems.",
      "Hands-on coursework covering Computer Vision, Natural Language Processing, Algorithms & Data Structures, and Embedded Systems.",
      "Active team lead in graduation and technical showcase projects."
    ]
  },
  {
    degree: "General Secondary Education Certificate",
    institution: "Martyr Major General Majid Ahmed Ibrahim School",
    location: "Cairo, Egypt",
    period: "2019 – 2022",
    status: "Graduated",
    details: [
      "Strong mathematical, algorithmic, and scientific foundation leading to entry into the Faculty of Artificial Intelligence Technology."
    ]
  }
];

export const certifications = [
  {
    title: "Digital Egypt Pioneers Initiative (DEPI) – Microsoft Machine Learning Engineer",
    issuer: "Ministry of Communications & Information Technology (MCIT) & Microsoft",
    date: "Nov 29, 2025 – Jul 23, 2026",
    category: "Machine Learning & AI",
    badge: "DEPI Track"
  },
  {
    title: "Computer Vision Summer Training (120 Hours)",
    issuer: "ITIDA & National Telecommunication Institute (NTI)",
    date: "Aug – Sep 2025",
    category: "Computer Vision",
    badge: "120 Hours Intensive"
  },
  {
    title: "Applied Deep Learning",
    issuer: "Mahara-Tech & Information Technology Institute (ITI)",
    date: "2025",
    category: "Deep Learning",
    badge: "Deep Learning"
  },
  {
    title: "Python Programming (Skill Assessment)",
    issuer: "HackerRank",
    date: "December 28, 2025",
    category: "Programming",
    badge: "Verified HackerRank"
  },
  {
    title: "Problem Solving & Algorithms (Skill Assessment)",
    issuer: "HackerRank",
    date: "December 24, 2025",
    category: "Algorithms",
    badge: "Verified HackerRank"
  },
  {
    title: "Boost Your Productivity with AI",
    issuer: "Google Maharat & Injaz Egypt",
    date: "2025",
    category: "AI & Productivity",
    badge: "Google Certified"
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Networking & Infrastructure",
    badge: "Cisco Certified"
  },
  {
    title: "Digitera Training Program",
    issuer: "iCareer",
    date: "September 20, 2026",
    category: "Professional Readiness",
    badge: "Industry Readiness"
  },
  {
    title: "Deployment of Machine Learning Models",
    issuer: "Udemy",
    date: "2023",
    category: "ML Deployment",
    badge: "Model Serving"
  },
  {
    title: "Unsupervised Machine Learning",
    issuer: "Udemy",
    date: "2023",
    category: "Machine Learning",
    badge: "Clustering & Dim Reduction"
  },
  {
    title: "Soft Skills & Freelancing Training",
    issuer: "Technical Skills Integration",
    date: "2025",
    category: "Professional Skills",
    badge: "Communication"
  }
];

export const achievements = [
  {
    metric: "5 Specialized YOLO Models",
    title: "DEPI Graduation Flagship Co-Development",
    description: "Co-developed the Urban AI Guardian smart-city platform integrating 5 parallel YOLO detectors for real-time civic hazard identification under DEPI."
  },
  {
    metric: "120 Hours",
    title: "NTI & ITIDA Computer Vision Specialization",
    description: "Graduated from an intensive 120-hour specialized technical residency in advanced Computer Vision, CNN architectures, and real-time processing."
  },
  {
    metric: "Double Verified",
    title: "HackerRank Algorithm & Python Certifications",
    description: "Secured verified HackerRank assessments in both Python Programming and Problem Solving & Algorithms within the same milestone month."
  },
  {
    metric: "Multimodal Systems",
    title: "Real-World Deployed Prototypes",
    description: "Engineered diverse production-oriented systems spanning healthcare hospital robotics, bilingual voice assistants, and hardware IoT security prototypes."
  }
];

export const portfolioSlides = [
  { id: 1, title: "Cover — Initial Brand Identity", slideNum: 1, image: "assets/slides/Slide1.PNG", category: "Brand" },
  { id: 2, title: "Introduction & Focus Areas", slideNum: 2, image: "assets/slides/Slide2.PNG", category: "About" },
  { id: 3, title: "Educational Background", slideNum: 3, image: "assets/slides/Slide3.PNG", category: "Education" },
  { id: 4, title: "Technical & Soft Skills", slideNum: 4, image: "assets/slides/Slide4.PNG", category: "Skills" },
  { id: 5, title: "Work Experience — Bulbul & RPA", slideNum: 5, image: "assets/slides/Slide5.PNG", category: "Projects" },
  { id: 6, title: "Offered Technical Services", slideNum: 6, image: "assets/slides/Slide6.PNG", category: "Services" },
  { id: 7, title: "Professional Projects Roadmap", slideNum: 7, image: "assets/slides/Slide7.PNG", category: "Projects" },
  { id: 8, title: "Bulbul Hospital Companion Robot", slideNum: 8, image: "assets/slides/Slide8.PNG", category: "Case Study" },
  { id: 9, title: "GPA & QR Code Automation", slideNum: 9, image: "assets/slides/Slide9.PNG", category: "Case Study" },
  { id: 10, title: "Car Price Prediction (Regression)", slideNum: 10, image: "assets/slides/Slide10.PNG", category: "Case Study" },
  { id: 11, title: "Smart Home Automation System", slideNum: 11, image: "assets/slides/Slide11.PNG", category: "Case Study" },
  { id: 12, title: "City Explorer & Data Dashboard", slideNum: 12, image: "assets/slides/Slide12.PNG", category: "Case Study" },
  { id: 13, title: "Certificates & Achievements", slideNum: 13, image: "assets/slides/Slide13.PNG", category: "Certifications" },
  { id: 14, title: "Direct Contact Information", slideNum: 14, image: "assets/slides/Slide14.PNG", category: "Contact" }
];

