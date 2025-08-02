/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Chet Sovisoth",
  description:
    "A pragmatic builder who enjoys developing end-to-end solutions, with a focus on scalable backend systems and cloud infrastructure to solve real-world problems efficiently.",
  og: {
    title: "Chet Sovisoth Portfolio",
    type: "website",
    url: "https://sovisoth.com/",
  },
};

//Home Page
const greeting = {
  title: "Chet Sovisoth",
  logo_name: "ChetSovisoth",
  nickname: "",
  subTitle:
    "A pragmatic builder who enjoys developing end-to-end solutions, with a focus on scalable backend systems and cloud infrastructure to solve real-world problems efficiently.",
  resumeLink:
    "https://drive.google.com/file/d/1MfVP3Z4j1m_Gfd5gig54O6Cqrqv6K7jL/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ChetSovisoth",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ChetSovisoth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chetsovisoth/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email",
    link: "mailto:chet@sovisoth.com",
    fontAwesomeIcon: "fa-at", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive website using React and Vue",
        "⚡ Creating backend application in Laravel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "InertiaJS",
          fontAwesomeClassname: "simple-icons:inertia",
          style: {
            color: "#9553E9",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine",
        "⚡ DevOps technology like Docker and Kubernetes",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#0080FF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Royal University of Phnom Penh",
      subtitle: "Bachelor of Enginnering in Information Technology Engineering",
      logo_path: "rupp_logo.jpg",
      alt_name: "FE, RUPP",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ I have learned basic software engineering subjects and concepts like DSA, DBMS, OS, OOAD, etc.",
        "⚡ Apart from this, I have complete courses and projects on Mobile Applications, Cloud Computing and Full Stack Development.",
        "⚡  I was selected to undertake a thesis project reflecting a strong academic performance and consistent dedication throughout my studies.",
      ],
      website_link: "https://fe.rupp.edu.kh",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Kubernetes for the Absolute Beginners - Hands-on",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-28dcef1f-e80c-4eb3-a247-17326246fb96/",
      alt_name: "Kuberentes for Beginner",
      color_code: "#FFFFFF",
    },
    {
      title: "Online Kubernetes Lab for Beginners",
      subtitle: "- KodeKloud",
      logo_path: "kodekloud.png",
      certificate_link:
        "https://learn.kodekloud.com/certificate/fab8a367-eb56-4920-a744-bdf18cfca79e",
      alt_name: "kodekloud - k8s",
      color_code: "#FFFFFF",
    },
    {
      title: "Kubernetes Certified Application Developer (CKAD) with Tests",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c14dc621-d8a5-4b55-8b92-b3ab21caf539/",
      alt_name: "CKAD",
      color_code: "#FFFFFF",
    },
    {
      title: "Online Certified Kubernetes Application Developer Lab",
      subtitle: "- KodeKloud",
      logo_path: "kodekloud.png",
      certificate_link:
        "https://learn.kodekloud.com/user/certificate/d3c080bb-7477-4bf3-b6e2-bdb68c7da525",
      alt_name: "kodekloud - ckad",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide variety of modern technology tools. My strongest experience lies in backend development and deploying applications via cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

const projects = {
  data: [
    {
      id: "saas-attendance-tracking",
      name: "Software as a Service Attendance Tracking System",
      tech: "Laravel · VueJS · Paddle · Kubernetes",
      created_at: "June, 2025",
      description:
        "A centralized platform for managing organizations, subscriptions, and deployments of the attendance system. It utilize Kubernetes for automatic deployment and auto-scaling.",
      url: "https://attendin.xyz/",
    },
    {
      id: "attendance-tracking-system-qr",
      name: "Attendance Tracking System With QR Code",
      tech: "Laravel · Bootstrap · Docker",
      created_at: "January, 2025",
      description:
        "Designed to help organizations track and manage employee attendance efficiently with QR code.",
      url: "https://github.com/ChetSovisoth/Y4S1-Project",
    },
    {
      id: "mentorship",
      name: "Mentorship",
      tech: "Laravel · Bootstrap",
      created_at: "June, 2024",
      description:
        "Designed to connect mentors and mentees for knowledge sharing and guidance.",
      url: "https://github.com/ChetSovisoth/Y3-Project",
    },
    {
      id: "komsanhub",
      name: "Cambodia Tourism Guide Web",
      tech: "ReactJS · Bootstrap",
      created_at: "January, 2024",
      description:
        "Users can explore destinations by category and region through a clean and user-friendly interface.",
      url: "https://komsanhub.sovisoth.com/",
    },
    {
      id: "scratch",
      name: "Scratch Game",
      tech: "Scratch",
      created_at: "June, 2022",
      description: "A small Scratch game developed during freshman year.",
      url: "https://www.sovisoth.com/scratch",
    },
  ],
};
const projectDetails = {
  "saas-attendance-tracking": {
    introduction:
      "This web-based attendance tracking system was developed to help organizations monitor and manage employee attendance efficiently. It supports real-time clock-in/clock-out, separate user roles (admin and employee), and provides a clean and intuitive interface for both day-to-day usage and data review. Designed initially as a standalone project, the system laid the foundation for a future SaaS implementation.",
    scope: {
      description:
        "The system is built for internal use within a single organization Its core features include:",
      features: [
        "Clock in/out with timestamps",
        "Attendance history for each employee",
        "Admin panel for user and record management",
        "Export attendance reports (PDF/Excel)",
        "Set office hours and lateness thresholds",
      ],
    },
    methodology: {
      description:
        "The system was developed using modern full-stack tools and follows the MVC architecture.",
      tools: [
        "Laravel (backend)",
        "Vue.js with Inertia.js (frontend)",
        "Laravel Jetstream (authentication)",
        "MySQL (database)",
        "Git & GitHub (version control)",
      ],
    },
    result: {
      description:
        "The system was completed in July 2025 and deployed in a testing environment. It provides:",
      outcomes: [
        "Real-time attendance tracking",
        "Secure, role-based access control",
        "Downloadable reports for admins",
        "Improved efficiency in attendance management",
        "A solid base for future SaaS development",
      ],
      url: "",
    },
  },
  "attendance-tracking-system-qr": {
    introduction:
      "This web-based attendance tracking system was developed to help organizations monitor and manage employee attendance efficiently. It supports real-time clock-in/clock-out, separate user roles (admin and employee), and provides a clean and intuitive interface for both day-to-day usage and data review. Designed initially as a standalone project, the system laid the foundation for a future SaaS implementation.",
    scope: {
      description:
        "The system is built for internal use within a single organization Its core features include:",
      features: [
        "Clock in/out with timestamps",
        "Attendance history for each employee",
        "Admin panel for user and record management",
        "Export attendance reports (PDF/Excel)",
        "Set office hours and lateness thresholds",
      ],
    },
    methodology: {
      description:
        "The system was developed using modern full-stack tools and follows the MVC architecture.",
      tools: [
        "Laravel (backend)",
        "Vue.js with Inertia.js (frontend)",
        "Laravel Jetstream (authentication)",
        "MySQL (database)",
        "Git & GitHub (version control)",
      ],
    },
    result: {
      description:
        "The system was completed in July 2025 and deployed in a testing environment. It provides:",
      outcomes: [
        "Real-time attendance tracking",
        "Secure, role-based access control",
        "Downloadable reports for admins",
        "Improved efficiency in attendance management",
        "A solid base for future SaaS development",
      ],
      url: "",
    },
  },
  mentorship: {
    introduction:
      "This web-based attendance tracking system was developed to help organizations monitor and manage employee attendance efficiently. It supports real-time clock-in/clock-out, separate user roles (admin and employee), and provides a clean and intuitive interface for both day-to-day usage and data review. Designed initially as a standalone project, the system laid the foundation for a future SaaS implementation.",
    scope: {
      description:
        "The system is built for internal use within a single organization Its core features include:",
      features: [
        "Clock in/out with timestamps",
        "Attendance history for each employee",
        "Admin panel for user and record management",
        "Export attendance reports (PDF/Excel)",
        "Set office hours and lateness thresholds",
      ],
    },
    methodology: {
      description:
        "The system was developed using modern full-stack tools and follows the MVC architecture.",
      tools: [
        "Laravel (backend)",
        "Vue.js with Inertia.js (frontend)",
        "Laravel Jetstream (authentication)",
        "MySQL (database)",
        "Git & GitHub (version control)",
      ],
    },
    result: {
      description:
        "The system was completed in July 2025 and deployed in a testing environment. It provides:",
      outcomes: [
        "Real-time attendance tracking",
        "Secure, role-based access control",
        "Downloadable reports for admins",
        "Improved efficiency in attendance management",
        "A solid base for future SaaS development",
      ],
      url: "",
    },
  },
  komsanhub: {
    introduction:
      "This web-based attendance tracking system was developed to help organizations monitor and manage employee attendance efficiently. It supports real-time clock-in/clock-out, separate user roles (admin and employee), and provides a clean and intuitive interface for both day-to-day usage and data review. Designed initially as a standalone project, the system laid the foundation for a future SaaS implementation.",
    scope: {
      description:
        "The system is built for internal use within a single organization Its core features include:",
      features: [
        "Clock in/out with timestamps",
        "Attendance history for each employee",
        "Admin panel for user and record management",
        "Export attendance reports (PDF/Excel)",
        "Set office hours and lateness thresholds",
      ],
    },
    methodology: {
      description:
        "The system was developed using modern full-stack tools and follows the MVC architecture.",
      tools: [
        "Laravel (backend)",
        "Vue.js with Inertia.js (frontend)",
        "Laravel Jetstream (authentication)",
        "MySQL (database)",
        "Git & GitHub (version control)",
      ],
    },
    result: {
      description:
        "The system was completed in July 2025 and deployed in a testing environment. It provides:",
      outcomes: [
        "Real-time attendance tracking",
        "Secure, role-based access control",
        "Downloadable reports for admins",
        "Improved efficiency in attendance management",
        "A solid base for future SaaS development",
      ],
      url: "https://komsanhub.sovisoth.com",
    },
  },
  scratch: {
    introduction:
      "This web-based attendance tracking system was developed to help organizations monitor and manage employee attendance efficiently. It supports real-time clock-in/clock-out, separate user roles (admin and employee), and provides a clean and intuitive interface for both day-to-day usage and data review. Designed initially as a standalone project, the system laid the foundation for a future SaaS implementation.",
    scope: {
      description:
        "The system is built for internal use within a single organization Its core features include:",
      features: [
        "Clock in/out with timestamps",
        "Attendance history for each employee",
        "Admin panel for user and record management",
        "Export attendance reports (PDF/Excel)",
        "Set office hours and lateness thresholds",
      ],
    },
    methodology: {
      description:
        "The system was developed using modern full-stack tools and follows the MVC architecture.",
      tools: [
        "Laravel (backend)",
        "Vue.js with Inertia.js (frontend)",
        "Laravel Jetstream (authentication)",
        "MySQL (database)",
        "Git & GitHub (version control)",
      ],
    },
    result: {
      description:
        "The system was completed in July 2025 and deployed in a testing environment. It provides:",
      outcomes: [
        "Real-time attendance tracking",
        "Secure, role-based access control",
        "Downloadable reports for admins",
        "Improved efficiency in attendance management",
        "A solid base for future SaaS development",
      ],
      url: "",
    },
  },
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "You can contact me via email, and I’ll do my best to respond as soon as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Daun Penh, Phnom Penh, Cambodia",
    locality: "Daun Penh",
    country: "Cambodia",
    region: "Phnom Penh",
    postalCode: "95129",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  projects,
  projectDetails,
};
