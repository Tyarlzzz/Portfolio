/**
 * ==============================================================
 *  EDIT ME  —  src/data/profile.js
 * ==============================================================
 *  Everything shown on the website comes from this one file.
 *
 *  • Anything written like "[This]" is a placeholder — replace it.
 *  • Leave a value as "" to hide it (e.g. a link you don't have yet).
 *  • Images/PDFs go inside the /public folder, then point to them
 *    like "/me.jpg" or "/resume.pdf".
 * ==============================================================
 */

// ---------------------------------------------------------------
//  1. About you
// ---------------------------------------------------------------
export const profile = {
  // Identity
  firstName: "Charles Jerald",
  lastName: "C. Carpio",
  fullName: "Charles Jerald C. Carpio",
  initials: "CC",
  photo: "/profile.jpg",

  // School
  course: "Bachelor of Science in Information Technology",
  courseShort: "BSIT",
  yearLevel: "4th Year",
  school: "Central Luzon State University",
  schoolShort: "CLSU",
  graduation: "2027",

  // Home page text
  headline: "Aspiring Full-Stack Developer",
  tagline:
    "I build practical and user-friendly web applications that solve real-world problems. I enjoy learning new technologies and turning ideas into functional systems, with the goal of growing as a full-stack developer.",
  availability: "",

  email: "carpiocharles07@gmail.com",
  phone: "+63 967 736 7636",
  location: "Candaba, Pampanga, Philippines",
  resumeUrl: "/Carpio, Charles Jerald C._Resume.pdf",

  // About page — each string becomes one paragraph
  bio: [
    "Hello! I’m Charles Jerald C. Carpio, an Information Technology student at Central Luzon State University (CLSU). I’m passionate about software development and building practical technology solutions. I have experience in web development, database management, IoT, and AI-based systems.",
    "Throughout my studies, I’ve worked on various projects that strengthened my technical and problem-solving skills. I enjoy learning new technologies, developing useful applications, and turning ideas into functional systems.",
    "I’m looking forward to gaining real-world experience through an internship, job opportunity, or collaborative project where I can contribute my skills while continuing to grow as an IT professional.",
  ],
};

// ---------------------------------------------------------------
//  2. Social links (leave url as "" to hide one)
//     ids that get their own icon: github, linkedin, facebook, instagram
// ---------------------------------------------------------------
export const socials = [
  { id: "github", label: "GitHub", url: "https://github.com/Tyarlzzz" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/charles-carpio-9664a5368/" },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/charlescarpio.07" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/tyarlzz?stkn=MWprdzF3bm5vNWRvOQ==" },
];

// ---------------------------------------------------------------
//  3. Right-now board on the Home page
// ---------------------------------------------------------------
export const nowItems = [
  { label: "Building", text: "DEVELOPMENT OF AN IOT-ENABLED SOIL ANALYSIS AND AI-ASSISTED FERTILIZER RECOMMENDATION SYSTEM FOR GREENHOUSE ENVIRONMENTS" },
  { label: "Learning", text: "React and Laravel" },
  { label: "Looking for", text: "Looking for OJT opportunities" },
];

// ---------------------------------------------------------------
//  4. Projects
//     category: used for the filter buttons (Web, Mobile, Database…)
//     featured: true shows it on the Home page (first two are used)
//     accent:   colour of the card (any dark hex colour)
//     image:    optional, e.g. "/project-one.png" — otherwise a
//               generated contour-map cover is shown
//     liveUrl / repoUrl: leave "" if you don't have them
// ---------------------------------------------------------------
export const projects = [
  {
    id: "project-one",
    title: "AIBasedFertilizerRecommendation",
    category: "Web, Mobile and IoT",
    year: "2026",
    role: "Back-end and IoT Developer",
    summary: "An IoT- and AI-powered smart agriculture platform that delivers real-time soil analysis and precision fertilizer recommendations for potted and field crops.",
    description:"This project addressed crop yield loss and inefficient nutrient management caused by traditional trial-and-error fertilization methods. I built an end-to-end IoT and web platform using an ESP32 with RS485 Modbus soil sensors that stream live N-P-K, pH, EC, and climate telemetry to a Python/Django backend and React frontend. The biggest challenge was calibrating live probe readings against official Department of Agriculture laboratory soil test benchmarks and engineering a resilient fallback engine for reliable recommendations. Through this, I mastered hardware-to-cloud IoT data pipelines, Modbus communication, and integrating domain-calibrated AI into full-stack web applications.",
    features: [
      "Real-time soil telemetry monitoring (Nitrogen, Phosphorus, Potassium, pH, EC, Moisture, and Temperature)",
      "AI-driven split-application fertilizer scheduling benchmarked against Department of Agriculture lab standards",
      "Support for crop-specific nutrient profiles (e.g., Cherry Tomato, Carolina Reaper)",
      "Multi-sensor RS485 Modbus IoT data acquisition with automated calibration offsets",
      "Interactive web dashboard with historical trends, sensor diagnostics, and recommendation logs"
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "MySQL",
      "ESP32",
      "Arduino / C++",
      "Modbus RS485",
      "IoT",
      "AI / REST APIs"
    ],
    liveUrl: "",
    repoUrl: "https://github.com/Tyarlzzz/AIBasedFertilizerRecommendation",
    image: "/aifertilizer.png",
    accent: "#1F6B45",                                                                                                                                
    featured: true,
  },
  {
    id: "project-two",
    title: "YKJoson POS System",
    category: "Web and Mobile",
    year: "2025",
    role: "Lead Developer and Database Designer",
    summary: "A centralized management system designed to streamline YKJoson Gas & Laundry’s operations, including customer management, order tracking, billing, inventory, and sales monitoring.",
    description: "Developed to replace manual recording and fragmented tracking across two distinct business models (LPG gas distribution and multi-stage laundry services) into a unified platform. Built using native PHP, MySQL, and Bootstrap with dynamic JavaScript interactions for real-time sales, stock alerts, and automated billing. The most challenging aspect was architecting a flexible relational database schema capable of handling divergent inventory models while maintaining synchronized financial reporting. Through this project, I gained deep experience in full-stack architecture, role-based access control, and designing maintainable database workflows tailored to real-world business operations.",
    features: [
        "Manages two business units: Gas and Laundry",
        "Provides real-time sales monitoring and reporting",
        "Tracks inventory and generates alerts for low stock"
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/Tyarlzzz/ykjoson",
    image: "/ykjoson.png",
    accent: "#8A5A12",
    featured: true,
  },
  {
    id: "project-three",
    title: "Library Management System",
    category: "Web",
    year: "2025",
    role: "Full Stack Developer",
    summary: "A web-based library management and reporting system built for librarians and administrators to manage book inventories, track users, and generate printable PDF reports.",
    description:"This project streamlines library operations by replacing manual record-keeping with an automated CRUD system for books and user accounts. It was developed using PHP with an Object-Oriented MVC-style architecture, MySQL via PDO, Bootstrap 5, and the FPDF library for dynamic document generation. Structuring custom table coordinates and cell widths in FPDF while ensuring secure database interactions with PDO prepared statements was challenging, but it deepened my understanding of backend architecture and automated reporting.",
    features: [
      "Full CRUD Operations for Books and User Management with Form Validation",
      "Dynamic PDF Report Generation for inventory and user records using FPDF",
      "Real-time Analytics Dashboard displaying inventory metrics and user activity",
      "Interactive DataTables with Copy, CSV, and Excel export capabilities",
      "Secure Session-Based Authentication and Access Control"
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    liveUrl: "",
    repoUrl: "",
    image: "/library_management.png",
    accent: "#22506B",
    featured: false,
  },
  {
    id: "project-four",
    title: "Tummy Treats POS and Inventory System",
    category: "Web",
    year: "2024",
    role: "Full Stack Developer",
    summary: "A modern Point of Sale (POS) and inventory management system tailored for quick-service snack kiosks and food stalls to streamline checkout operations and ingredient tracking.",
    description:"Small food businesses often struggle with slow order processing and manual, error-prone inventory tracking when managing customizable food items with multiple flavors and add-ons. I built TummyTreats as a full-stack web application using Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, and SQLite to automate sales and stock management. The most challenging aspect was implementing recipe-level inventory deductions and transaction rollbacks during order voids to ensure accurate real-time ingredient levels. Through this project, I mastered relational database modeling, secure role-based session management, and building interactive data visualization dashboards.",
    features: [
      "Fast & intuitive POS checkout terminal supporting product flavors, custom add-ons, and instant change calculation",
      "Automated recipe-based inventory management with stock movement logging and low-stock reorder alerts",
      "Comprehensive analytics dashboard with interactive charts for revenue trends, sales volume, and top-selling items",
      "Role-based access control (Admin & Cashier) with employee management and detailed audit logs",
      "Complete order history with receipt viewing, custom filtering, and secure void order workflows"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    liveUrl: "",
    repoUrl: "",
    image: "/tummy_treats.png",
    accent: "#5B3A6B",
    featured: true,
  },
  {
    id: "project-five",
    title: "Tic-Tac-Toe Game",
    category: "Game",
    year: "2023",
    role: "Full Stack Developer",
    summary: "An interactive, console-based 2-player Tic-Tac-Toe game developed in C featuring real-time board rendering, win/draw detection algorithms, and robust input validation.",
    description: "Classic board games implemented in terminal environments provide a great foundation for understanding low-level control flow, state management, and memory efficiency. I built this console-based Tic-Tac-Toe game in C to deliver a smooth two-player experience with dynamic grid rendering and instant game-state evaluation. The key technical challenge was designing efficient matrix evaluation algorithms to check horizontal, vertical, and diagonal win conditions alongside handling 1D-to-2D grid coordinate mapping for intuitive player inputs. Through this project, I strengthened my core understanding of procedural programming, 2D arrays, input sanitization, and state-driven game loops in C.",
    features: [
      "Interactive 3x3 dynamic board rendering in the console with coordinate guide references",
      "Algorithmic win condition evaluation across rows, columns, and diagonals after every turn",
      "Full board state tracking for automatic draw/stalemate detection",
      "Input validation and collision checks to prevent overwriting already occupied cells",
      "Seamless turn switching with player status indicators and a replayable game loop"
    ],
    tech: ["C", "2D Arrays", "Procedural Programming"],

    liveUrl: "",
    repoUrl: "",
    image: "/tictactoe.png",
    accent: "#5B3A6B",
    featured: false,
  },
  {
    id: "project-six",
    title: "Minesweeper Game",
    category: "Game",
    year: "2024",
    role: "Full Stack Developer",
    summary: "A feature-rich desktop Minesweeper clone built in Java Swing featuring recursive tile reveals, multiple difficulty modes, custom grid configurations, and real-time elapsed time tracking.",
    description: "Rebuilding classic logic puzzles is an effective way to master event-driven graphical interfaces, recursive algorithms, and dynamic grid rendering. I developed this Minesweeper game in Java Swing to deliver a smooth desktop experience complete with randomized mine placement, multi-difficulty presets, and a custom board builder. The most challenging aspect was implementing the recursive flood-fill algorithm (depth-first search) to seamlessly reveal cascading empty tiles and accurately calculate 8-directional adjacent mine counts without stack overflows or boundary errors. Through this project, I strengthened my expertise in Java OOP principles, custom event listeners (handling distinct left-click and right-click behaviors), state management, and Swing UI layout design.",
    features: [
      "Customizable difficulty modes including Easy, Intermediate, Expert, and custom user-defined board dimensions and mine counts",
      "Recursive flood-fill algorithm (DFS) to automatically reveal connected empty regions on blank tile clicks",
      "Interactive tile interactions supporting left-click reveal, right-click flagging/unflagging (🚩), and duplicate click protection",
      "Real-time game clock tracking elapsed time and dynamic game status updates (Mine Counter, Win/Loss prompts)",
      "Game state validation with randomized mine placement, board boundary checks, and replayable session dialogs"
    ],
    tech: ["Java", "Java Swing (GUI)", "OOP"],
    liveUrl: "",
    repoUrl: "",
    image: "/minesweeper.png",
    accent: "#5B3A6B",
    featured: false,
  },
];

// ---------------------------------------------------------------
//  5. Skills  (level is 0–100)
//     These are sample entries — keep only what is honestly yours.
// ---------------------------------------------------------------
export const skillGroups = [
  {
    id: "frontend",
    label: "Front-end",
    skills: [
      { name: "HTML & CSS", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 60 },
    ],
  },
  {
    id: "backend",
    label: "Back-end & data",
    skills: [
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "Node.js", level: 55 },
      { name: "C", level: 90 },
      { name: "Java", level: 75 },
      { name: "Python", level: 85 },
      { name: "Firebase", level: 40 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 55 },
    ],
  },
];

// ---------------------------------------------------------------
//  6. Education timeline (newest first)
// ---------------------------------------------------------------
export const education = [
  {
    period: "2023 – Present",
    title: "Bachelor of Science in Information Technology",
    place: "Central Luzon State University (CLSU)",
    note: "4th year. Major in System and Web Development.",
  },
  {
    period: "2021 – 2023",
    title: "Science, Technology, Engineering and Mathematics (STEM) Strand",
    place: "St. Paul University at San Miguel",
    note: "With Academic Exellence Award",
  },
  {
    period: "2017 – 2021",
    title: "Junior High School",
    place: "St. Paul University at San Miguel",
    note: "With Academic Exellence Award",
  },
  {
    period: "2010 – 2017",
    title: "Elementary School",
    place: "Mandili II Elementary School",
    note: "With High Honors Award - Salutatorian of the Batch 2017",
  },
];

// ---------------------------------------------------------------
//  7. Certifications and interests
// ---------------------------------------------------------------
// Optional image: "/certificates/name.jpg" (file in public/certificates).
// Optional url: a public credential verification link.
export const certifications = [
  { title: "AWS Academy Graduate - Cloud Foundations - Training Badge", issuer: "AWS academy", year: "2026", image: "/AWS-CERTIFICATE.png"},
  { title: "Data Visualization", issuer: "kaggle", year: "2026", image: "/Charles Jerald Carpio - Data Visualization Certificate - kaggle.png"},
  { title: "Data Visualization using Bokeh", issuer: "coursera", year: "2026", image: "/Data Visualization Using Bokeh-Coursera-charles-certificate.png"},
  { title: "Data Visualization using Plotly", issuer: "coursera", year: "2026", image: "/Data Visualization Using Plotly-Coursera-charles-certificate.png"},
  { title: "Introduction to Modern AI", issuer: "Networking Academy", year: "2026", image: "/Introduction to Modern AI-Certificate-Charles.png"},
  { title: "SEO 101:Mastering The Basics And Applying SEO In Freelance Work, Websites, And Digital Projects", issuer: "Central Luzon State University", year: "2025", image: "/SEO Certificate-Charles.png"},
  { title: "TechSTART: IoT 101 Using Arduino", issuer: "Department of Science and Technology (DOST)", year: "2025", image: "/IoT-Certificate-DOST-Charles.jpg"},
];

export const interests = ["Badminton", "Physical Fitness", "Swimming", "Watching Movies", "Playing Video Games", "Exploring New Technologies"];
