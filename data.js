// ============================================================
// PROJECT DATA
// To add a project: copy an object below, fill in your details.
// To remove: delete the object. The whole UI updates automatically.
// status: "live" (repo uploaded) | "building" (in progress)
// screenshots: array of {src, caption} — use real image paths
//   once you upload them to the /assets folder.
// ============================================================

const PROJECTS = [
  {
    id: "bloodbank",
    name: "Blood Bank Management System",
    tagline: "Console CRUD app for donor & blood stock management",
    status: "live",
    year: "2022",
    stack: ["C++", "File I/O", "Structs"],
    repo: "https://github.com/noman-code-droid/Blood-Bank-Management-System",
    description: "A console-based system built in first semester, managing donor records and blood unit inventory entirely through file handling — no database. Demonstrates structured CRUD operations, menu-driven navigation, and string parsing using stringstream, all in raw C++.",
    highlights: [
      "Full CRUD on donor records: add, update, delete, list",
      "Separate blood-stock module tracking units per blood group",
      "Custom struct-based data model with text-file persistence",
      "Built and tested with Visual Studio Code and g++"
    ],
    screenshots: [
      { src: "assets/bloodbank/01-main-menu.png", caption: "Main menu" },
      { src: "assets/bloodbank/02-add-donor.png", caption: "Add donor" },
      { src: "assets/bloodbank/03-show-all-donors.png", caption: "Show all donors" }
    ]
  },
  {
    id: "balloon",
    name: "Balloon Shooting Game",
    tagline: "Real-time arcade game in raw x86 Assembly",
    status: "live",
    year: "2022",
    stack: ["x86 Assembly", "BIOS Interrupts", "emu8086"],
    repo: "https://github.com/noman-code-droid/Balloon-Shooting-Game",
    description: "A real-time shooting game with zero high-level libraries — built by writing directly to video memory (segment 0B800h) and reading input through BIOS keyboard interrupts. Score, collision detection, and the game loop are all hand-rolled in Assembly.",
    highlights: [
      "Direct video memory rendering (no graphics library)",
      "Real-time collision detection between arrow and balloon",
      "Live score tracking rendered character-by-character",
      "Game-over and restart state machine built entirely in ASM"
    ],
    screenshots: [
      { src: "assets/balloon/gameplay-demo.gif", caption: "Gameplay recording" },
      { src: "assets/balloon/code-running.png", caption: "Running in emu8086" }
    ]
  },
  {
    id: "travelbuddy",
    name: "TravelBuddy",
    tagline: "AI ride-sharing & trip assistant — Final Year Project",
    status: "building",
    year: "2025–2026",
    stack: ["Kotlin", "MVVM", "Firebase", "Gemini AI", "OSRM API", "Google Maps SDK"],
    repo: null,
    description: "A native Android ecosystem for secure inter-city cost-sharing, with a Gemini-powered conversational travel assistant, live GPS synchronisation, and an automated fare engine using OSRM routing — built to run on a zero-cost infrastructure model.",
    highlights: [
      "Gemini AI travel assistant generating personalised itineraries",
      "High-frequency GPS sync with Firestore for live tracking",
      "KYC module auditing driver documentation via Apps Script",
      "Emergency SOS and proximity-alert safety suite"
    ],
    screenshots: []
  },
  {
    id: "posapp",
    name: "POSAPP",
    tagline: "Multi-device restaurant POS platform",
    status: "building",
    year: "2026",
    stack: ["Kotlin", "Node.js", "Express", "Socket.IO", "React"],
    repo: null,
    description: "A full restaurant point-of-sale platform: Android apps for waiters and kitchen staff, a React admin dashboard, and a Node.js LAN backend keeping every device in sync in real time — designed to run with zero internet dependency.",
    highlights: [
      "Real-time order sync across devices via Socket.IO",
      "Role-based access: Admin, Manager, Waiter, Kitchen",
      "Offline-first LAN architecture, admin PC as source of truth",
      "Android client built with Room, Retrofit, and ZXing QR scanning"
    ],
    screenshots: []
  },
  {
    id: "carlynk",
    name: "CarLynk",
    tagline: "Privacy-first vehicle communication app",
    status: "building",
    year: "2026",
    stack: ["Flutter", "Dart", "Firebase", "Riverpod", "GoRouter"],
    repo: null,
    description: "A cross-platform Flutter app letting vehicle owners receive anonymous visitor messages via QR code — no phone number sharing required. Built with a strict privacy-first workflow including full account data wipe on deletion.",
    highlights: [
      "Anonymous QR-based visitor messaging",
      "FCM push notifications with deep-link routing",
      "Real-time analytics dashboard via Firestore listeners",
      "Feature-based MVVM architecture with generated Riverpod providers"
    ],
    screenshots: []
  },
  {
    id: "solaralign",
    name: "SolarAlign",
    tagline: "Solar panel field measurement tool",
    status: "building",
    year: "2026",
    stack: ["Kotlin", "Room", "SQLCipher", "SensorManager"],
    repo: null,
    description: "A native Android app for solar installers, capturing tilt and azimuth readings using the device's accelerometer and magnetometer, with AES-encrypted local storage protecting sensitive field survey data at rest.",
    highlights: [
      "Sensor-fusion tilt/azimuth capture via Android Sensor Framework",
      "AES-encrypted local storage with Room + SQLCipher",
      "Biometric login via AndroidX Biometric API",
      "Real-time StateFlow-driven measurement dashboards"
    ],
    screenshots: []
  },
  {
    id: "tenderai",
    name: "AI Tender Analyzer",
    tagline: "Document intelligence web app",
    status: "building",
    year: "2026",
    stack: ["React", "FastAPI", "Python", "Gemini AI", "PyMuPDF"],
    repo: null,
    description: "Parses government and commercial tender documents (PDF/DOCX/TXT) and uses Gemini AI to generate structured executive summaries, eligibility criteria, and risk assessments — deployed as a React SPA with print-ready export.",
    highlights: [
      "Multi-format document ingestion and text normalisation",
      "Multi-model Gemini orchestration with rate-limit fallback",
      "Structured risk & eligibility extraction from raw tender text",
      "Deployed on Firebase Hosting with print-ready export"
    ],
    screenshots: []
  },
  {
    id: "spotifyclone",
    name: "Spotify Clone",
    tagline: "Full-stack music streaming app",
    status: "building",
    year: "2024–2025",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Clerk"],
    repo: null,
    description: "A production-grade music streaming application with a full album/song catalogue, admin CRUD panel, and a custom audio player — including real-time messaging and online-presence tracking between users.",
    highlights: [
      "Clerk SSO with protected routes and admin middleware",
      "Real-time messaging and presence via Socket.IO",
      "Custom audio player with queue management and skip controls",
      "Zustand-managed client state across a resizable layout"
    ],
    screenshots: []
  },
  {
    id: "mrburger",
    name: "Mr. Burger POS",
    tagline: "Paid freelance client project",
    status: "building",
    year: "2024",
    stack: ["PHP", "MySQL", "PDO", "Tailwind CSS"],
    repo: null,
    description: "A full-featured local POS application delivered to a real fast-food client — covering cashier workflow, menu management, sales recording, and receipt printing — while still a full-time student.",
    highlights: [
      "Secure MySQL access via PDO with REST-style endpoints",
      "Dynamic dark-themed UI: search, quantity editing, discounts",
      "Cash and online payment modes with tax calculation",
      "Offline local operation on Windows/XAMPP"
    ],
    screenshots: []
  }
];
