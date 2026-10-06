export interface Qualification {
  degree: string;
  institution: string;
  gradeOrScore?: string;
  specialization?: string;
  year?: string;
  highlight?: boolean;
}

export interface TeachingSpecialization {
  category: string;
  topics: string[];
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  department: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
}

export interface Publication {
  id: string;
  type: "book" | "journal" | "conference" | "paper";
  title: string;
  venue: string;
  year: string;
  details: string;
  tags: string[];
  abstract: string;
  linkText?: string;
  coverImage?: string;
  amazonUrl?: string;
  asin?: string;
  format?: string;
  price?: string;
  isAmazonBook?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: "Enterprise System" | "Software Development" | "Telecommunications" | "Statistical Research";
  organization: string;
  year: string;
  description: string;
  technologies: string[];
  impact: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  accreditation?: string;
  type: "AI & ML" | "Cyber Security" | "Academic Methodology" | "Specialized Tech";
}

export const PERSONAL_INFO = {
  name: "Dr. Rajeev Kumar",
  title: "Senior Faculty, Academician & Researcher",
  degrees: "Ph.D. (Computer Science & IT), M.Phil. (Statistics), MCA, M.Sc.",
  experienceYears: "22+",
  location: "Flat No. 203, B-Block, Amitabh Kunj, Main Road, Buddha Colony, Patna - 800001, Bihar, India",
  phone: "+91 9431432291",
  email: "rajeevk.patna@gmail.com",
  currentRole: "Senior Faculty in Computer Science, Dept. of Computer Applications, B.N. College, Patna University",
  avatarUrl: "/images/dr-rajeev-kumar.jpg",
  resumePdfUrl: "/Dr_Rajeev_Kumar_Resume.pdf",
  bio: "A distinguished academician and computer scientist with over 22 years of multi-disciplinary excellence across Computer Science, Statistics, and Information Technology. Renowned specialist in Wireless Sensor Networks (WSN) with focus on dynamic power management and energy harvesting protocols. Masterfully bridges statistical mathematical rigor with cutting-edge artificial intelligence, machine learning lifecycles (TDSP), and advanced cybersecurity frameworks. Prolific author of academic textbooks and curriculum architect across premier institutions.",
  specialties: [
    "Wireless Sensor Networks (WSN)",
    "Cyber Security & Defense Protocols",
    "Artificial Intelligence & Machine Learning (TDSP)",
    "Statistical Modeling & Operations Research",
    "Microprocessors & Computer Architecture",
    "Curriculum Design & Academic Authorship",
  ],
  stats: [
    { label: "Years of Academic Excellence", value: "22+", subtitle: "Continuous service since 2002" },
    { label: "Degrees & PG Diplomas", value: "7", subtitle: "Ph.D., M.Phil, MCA, M.Sc., NIT PGDCA" },
    { label: "Books & Research Papers", value: "10+", subtitle: "Big Data author & BBOSE textbooks" },
    { label: "Departments & Universities", value: "8+", subtitle: "Patna Univ, IGNOU, MMHAPU" },
    { label: "Students & Scholars Guided", value: "2,500+", subtitle: "MCA, BCA & Research guidance" },
  ],
};

export const QUALIFICATIONS: Qualification[] = [
  {
    degree: "Ph.D. in Computer Science & IT",
    institution: "Patna University / Reputed University",
    specialization: "Wireless Sensor Networks (WSN), Dynamic Power Management & Energy Harvesting",
    highlight: true,
  },
  {
    degree: "M.Phil. in Statistics",
    institution: "Periyar University, Salem",
    gradeOrScore: "1st Class (64%)",
    specialization: "Advanced Statistical Methods and Quantitative Analysis",
    highlight: true,
  },
  {
    degree: "M.Sc. in Statistics",
    institution: "Patna University",
    gradeOrScore: "1st Class (69%)",
    specialization: "Operations Research & Optimization Theory",
    highlight: true,
  },
  {
    degree: "MCA (Master of Computer Application)",
    institution: "VMU Salem",
    gradeOrScore: "1st Class (68%)",
    specialization: "Software Architecture, Algorithms & Relational Database Systems",
    highlight: false,
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "VMU Salem",
    gradeOrScore: "1st Class (74%)",
    specialization: "Advanced Systems Computing, Distributed Networks",
    highlight: false,
  },
  {
    degree: "PGDCA (PG Diploma in Computer Science & Application)",
    institution: "National Institute of Technology (NIT Patna)",
    gradeOrScore: "1st Class with Distinction (76%)",
    specialization: "Computing Paradigms & Systems Engineering",
    highlight: true,
  },
  {
    degree: "PG Diploma in Software Engineering",
    institution: "Beltron ICT, Patna (A Govt. of Bihar undertaking)",
    gradeOrScore: "Grade 'A' (78%)",
    specialization: "Industrial Software Development Life Cycle & System Analysis",
    highlight: false,
  },
];

export const TEACHING_SPECIALIZATIONS: TeachingSpecialization[] = [
  {
    category: "Computer Systems & Hardware Architecture",
    description: "Deep foundation in hardware-software interfaces, microprocessor design, and modern kernel architecture.",
    topics: [
      "Computer Organization & Microprocessors (8085/8086/ARM)",
      "Computer System Architecture & Design",
      "Modern Operating Systems (Linux, POSIX, Windows Systems)",
      "System Performance & Memory Hierarchies",
    ],
  },
  {
    category: "Programming & Data Engineering",
    description: "Core programming paradigms, object-oriented software craft, algorithms, and relational data architecture.",
    topics: [
      "Object-Oriented Programming (C++ & Visual C++)",
      "Low-level Programming in ANSI C",
      "Data Structures & Algorithmic Analysis",
      "Database Management Systems (DBMS / SQL) & MIS",
    ],
  },
  {
    category: "Mathematics for Computer Science & AI",
    description: "Rigorous statistical analysis, optimization, and discrete mathematical underpinnings required for modern computing.",
    topics: [
      "Numerical & Statistical Computational Methods",
      "Operation Research & Linear Programming",
      "Discrete Mathematics in Computer Applications",
      "Stochastic Processes & Probability Modeling",
    ],
  },
  {
    category: "Networking, WSN & Artificial Intelligence",
    description: "Distributed wireless communication protocols, sensor node energy management, and modern machine learning lifecycles.",
    topics: [
      "Computer Networking & Mobile Communications",
      "Wireless Sensor Networks (WSN & IoT Routing)",
      "Dynamic Power Management & Energy Harvesting",
      "Machine Learning Lifecycle (TDSP) & Practical AI",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "bn-college-ca",
    role: "Senior Faculty (Computer Science)",
    institution: "Patna University",
    department: "Dept. of Computer Application, B.N. College",
    period: "Feb 2002 – Present",
    isCurrent: true,
    description: "Leading undergraduate and postgraduate computer science curriculum, mentorship, laboratory training, and academic administration for over two decades.",
    highlights: [
      "Taught core CS subjects including Systems Architecture, C/C++, DBMS, and Data Structures to 20+ batches of students.",
      "Head advisor and project guide for MCA and BCA final-year industry capstone projects.",
      "Spearheaded computing curriculum revision and laboratory upgrades aligned with modern industry benchmarks.",
    ],
  },
  {
    id: "bn-college-stats",
    role: "Adhoc Lecturer",
    institution: "Patna University",
    department: "Dept. of Statistics, B.N. College",
    period: "July 2002 – Present",
    isCurrent: true,
    description: "Instructing statistical modeling, operations research, probability calculus, and applied mathematical computation.",
    highlights: [
      "Taught computational statistics and operations research to university scholars.",
      "Mentored research projects bridging statistical inquiry with computerized statistical software packages.",
    ],
  },
  {
    id: "ignou-counsellor",
    role: "Academic Counsellor (Statistics & Mathematics)",
    institution: "IGNOU (Indira Gandhi National Open University)",
    department: "Study Centre (0524), Patna",
    period: "2002 – Present",
    isCurrent: true,
    description: "Delivering weekend lectures, practical counseling, assignment evaluations, and academic mentorship to distance-learning learners in higher mathematics.",
    highlights: [
      "Guided thousands of non-traditional and working professional students through degree completion.",
      "Consistently recognized for pedagogical clarity in complex mathematical and statistical topics.",
    ],
  },
  {
    id: "pu-pmir",
    role: "Visiting Faculty (Computer Application)",
    institution: "Patna University",
    department: "PG Dept. of Personnel Management & Industrial Relations (PMIR)",
    period: "Aug 2004 – Present",
    isCurrent: true,
    description: "Teaching Management Information Systems (MIS), enterprise computing tools, and data-driven human resource analysis.",
    highlights: [
      "Trained future corporate managers in statistical decision-making and IT infrastructure tools.",
      "Designed computerized MIS coursework tailored to HR operational frameworks.",
    ],
  },
  {
    id: "pu-rural",
    role: "Visiting Faculty (Computer Application)",
    institution: "Patna University",
    department: "PG Dept. of Rural Studies",
    period: "Aug 2004 – Present",
    isCurrent: true,
    description: "Instructing rural development researchers in informatics, statistical data processing, and geographical information fundamentals.",
    highlights: [
      "Equipped postgraduate researchers with computerized analytical methodologies for rural socioeconomic surveys.",
    ],
  },
  {
    id: "pu-biotech",
    role: "Visiting Faculty (Computational Mathematics)",
    institution: "Patna University",
    department: "Dept. of Biotechnology, B.N. College",
    period: "2015 – Present",
    isCurrent: true,
    description: "Specialist lecturer teaching computational mathematics, biostatistical analysis, and mathematical modeling of biological processes.",
    highlights: [
      "Bridged computational algorithms with biological sequence analysis and experimental data sets.",
    ],
  },
  {
    id: "pu-mba",
    role: "Visiting Faculty (MBA Course - Statistics & CS)",
    institution: "Patna University",
    department: "Dept. of Applied Economics & Commerce",
    period: "July 2015 – Present",
    isCurrent: true,
    description: "Delivering graduate business analytics, statistical forecasting, operational research, and managerial computing.",
    highlights: [
      "Educated MBA cohorts on quantitative decision tools, optimization modeling, and managerial computing.",
    ],
  },
  {
    id: "mmc-bba",
    role: "Visiting Faculty (Statistics & CS)",
    institution: "Patna University",
    department: "Dept. of BBA, Magadh Mahila College",
    period: "July 2015 – Present",
    isCurrent: true,
    description: "Instructing undergraduate business administration students in quantitative methods, data structures, and computer applications.",
    highlights: [
      "Empowered women scholars in technology adoption and quantitative business metrics.",
    ],
  },
  {
    id: "mmhapu",
    role: "Visiting Faculty",
    institution: "Maulana Mazhrul Haque Arabic & Persian University, Patna",
    department: "Information Technology & Computer Applications",
    period: "2010 – Present",
    isCurrent: true,
    description: "Conducting specialized university lectures in computer algorithms, database architecture, and networking.",
    highlights: [
      "Invited guest faculty for advanced IT courses and university curriculum workshops.",
    ],
  },
  {
    id: "beltron-ict",
    role: "Assistant Faculty & Jr. Assistant Programmer",
    institution: "Beltron ICT (Govt. of Bihar undertaking)",
    department: "Software Training & Development Division",
    period: "1999 – 2000",
    isCurrent: false,
    description: "Commenced career delivering systems programming education and hands-on software development for state government initiatives.",
    highlights: [
      "Engineered automated library systems and trained state department personnel in software fundamentals.",
    ],
  },
];

export const AMAZON_AUTHOR_PROFILE = {
  authorId: "B0G8L6LLZH",
  name: "Dr. Rajeev Kumar",
  storeUrl: "https://www.amazon.in/stores/Dr.-Rajeev-Kumar/author/B0G8L6LLZH?shoppingPortalEnabled=true",
  amazonKindleBadge: "Official Amazon Author Store",
  booksCount: 4,
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "book-b0g7rkzncn",
    type: "book",
    title: "Introduction to the Big Data Analytics",
    venue: "Amazon Kindle Direct & Academic Press",
    year: "2025",
    details: "Authored by Dr. Rajeev Kumar | Kindle & Academic Edition",
    tags: ["Big Data Analytics", "Distributed Computing", "Hadoop & Spark", "Statistical Foundations"],
    abstract: "A landmark textbook synthesized from over two decades of classroom and research experience. Delivers a mathematically grounded yet highly practical roadmap to big data frameworks, real-time analytics, distributed computing architectures, and predictive analytics paradigms.",
    coverImage: "/images/books/book-B0G7RKZNCN.jpg",
    amazonUrl: "https://www.amazon.in/dp/B0G7RKZNCN",
    asin: "B0G7RKZNCN",
    format: "Kindle Edition",
    price: "₹449.00",
    isAmazonBook: true,
  },
  {
    id: "book-b0gx31zgk2",
    type: "book",
    title: "Blockchain for Real-World Applications: From Concept to Deployment",
    venue: "Amazon Kindle Direct Publishing",
    year: "2025",
    details: "Authored by Dr. Rajeev Kumar | Kindle & Academic Edition",
    tags: ["Blockchain Architecture", "Smart Contracts", "Cryptographic Security", "Distributed Systems"],
    abstract: "Comprehensive academic and practical guide bridging cryptographic principles with enterprise blockchain engineering. Covers consensus protocols, decentralized ledger design, smart contract deployment, and security verification for real-world enterprise applications.",
    coverImage: "/images/books/book-B0GX31ZGK2.jpg",
    amazonUrl: "https://www.amazon.in/dp/B0GX31ZGK2",
    asin: "B0GX31ZGK2",
    format: "Kindle Edition",
    price: "₹449.00",
    isAmazonBook: true,
  },
  {
    id: "book-b0gsz54ptc",
    type: "book",
    title: "The Data Compass: Navigating the World of Data Science",
    venue: "Amazon Kindle Direct Publishing",
    year: "2025",
    details: "Authored by Dr. Rajeev Kumar | Kindle & Academic Edition",
    tags: ["Data Science", "Statistical Foundations", "Predictive Modeling", "Quantitative Analysis"],
    abstract: "An essential navigational handbook for scholars and computing professionals. Interweaves foundational statistics, exploratory data analysis, hypothesis testing, and algorithmic machine learning workflows to guide data scientists through real-world analytical problems.",
    coverImage: "/images/books/book-B0GSZ54PTC.jpg",
    amazonUrl: "https://www.amazon.in/dp/B0GSZ54PTC",
    asin: "B0GSZ54PTC",
    format: "Kindle Edition",
    price: "₹449.00",
    isAmazonBook: true,
  },
  {
    id: "book-b0gphmqhq2",
    type: "book",
    title: "Data Mining: Concepts and Techniques",
    venue: "Amazon Kindle Direct Publishing",
    year: "2025",
    details: "Authored by Dr. Rajeev Kumar | Kindle & Academic Edition",
    tags: ["Data Mining", "Pattern Recognition", "Cluster Analysis", "Knowledge Discovery"],
    abstract: "Detailed textbook covering data preprocessing, association rule mining, decision trees, advanced clustering algorithms, neural pattern detection, and practical applications in corporate and academic intelligence systems.",
    coverImage: "/images/books/book-B0GPHMQHQ2.jpg",
    amazonUrl: "https://www.amazon.in/dp/B0GPHMQHQ2",
    asin: "B0GPHMQHQ2",
    format: "Kindle Edition",
    price: "₹449.00",
    isAmazonBook: true,
  },
  {
    id: "bbose-textbooks",
    type: "book",
    title: "Authorship of Five (5) Computer Science Textbooks",
    venue: "Bihar Open Schooling and Examination Board (BBOSE), Dept. of Education, Govt. of Bihar",
    year: "State Curriculum",
    details: "State Government Official Textbook Series (5 Volumes)",
    tags: ["State Education", "Curriculum Design", "Computer Fundamentals", "Secondary & Senior Secondary CS"],
    abstract: "Commissioned by the Department of Education, Government of Bihar, Dr. Kumar authored five foundational computer science textbooks for open schooling curricula across the state, democratizing quality digital literacy and programming fundamentals for tens of thousands of students across Bihar.",
  },
  {
    id: "jetir-2024",
    type: "journal",
    title: "Protocol Design and Implementation (Dynamic Power Management in WSN)",
    venue: "Journal of Emerging Technologies and Innovative Research (JETIR)",
    year: "Dec 2024",
    details: "Vol. 11, Issue 12, ISSN Indexed International Peer-Reviewed Journal",
    tags: ["Wireless Sensor Networks", "Dynamic Power Management", "Energy Harvesting", "Network Lifetime Optimization"],
    abstract: "Presents an innovative architectural protocol for dynamic power management in energy-constrained Wireless Sensor Networks. The paper demonstrates substantial energy conservation by dynamically throttling sensor transmission states based on stochastic traffic queues and energy harvesting availability.",
  },
  {
    id: "ijfmr-2024",
    type: "journal",
    title: "Routing Analysis in Wireless Sensor Networks",
    venue: "International Journal For Multidisciplinary Research (IJFMR)",
    year: "Nov-Dec 2024",
    details: "Vol. 6, Issue 6, Peer-Reviewed International Journal",
    tags: ["Routing Protocols", "WSN", "Cluster Heads", "Packet Delivery Ratio", "Latency Analysis"],
    abstract: "A comprehensive comparative and empirical performance analysis of contemporary routing protocols in large-scale multi-hop WSNs. Evaluates throughput, packet drop ratios, and end-to-end latency under fluctuating physical node topologies and severe transmission interference.",
  },
  {
    id: "paper-sentiment-ml",
    type: "paper",
    title: "Sentiment Analysis of News Headlines using Machine Learning",
    venue: "Dept. of Computer Applications, B.N. College, Patna University",
    year: "Research Publication",
    details: "University Academic & Research Proceedings",
    tags: ["Natural Language Processing", "Machine Learning", "Sentiment Classification", "Supervised Learning"],
    abstract: "Explores the application of feature engineering, TF-IDF vectorization, and supervised classification algorithms (SVM, Naive Bayes, Random Forests) on high-frequency news headline streams to forecast macroeconomic and public sentiment trends.",
  },
  {
    id: "conf-icratpms-2024",
    type: "conference",
    title: "Dynamic Power Management Design in Energy Harvesting & Hierarchical Routing System",
    venue: "International Conference on Recent Advances in Theoretical and Applied Physics, Mathematics and Statistics (ICRATPMS-2024), ARKA JAIN University",
    year: "April 2024",
    details: "Oral Research Paper Presentation & Conference Proceedings",
    tags: ["Conference Presentation", "Energy Harvesting", "Hierarchical Routing", "IoT Networks"],
    abstract: "Delivered keynote technical paper presentation examining novel hierarchical clustering algorithms synergized with solar/ambient energy harvesting nodes to extend autonomous operational life in remote environmental monitoring.",
  },
  {
    id: "conf-iceesmr-2023",
    type: "conference",
    title: "International Conference on Ethnobotany, Environmental Sustainability and Multidisciplinary Researches (ICEESMR-2023)",
    venue: "Jointly organized by IQAC, K.O. College, Gumla & SEB Lucknow",
    year: "Nov 2023",
    details: "Valued Delegate & Multidisciplinary Technical Contributor",
    tags: ["Environmental Sustainability", "Multidisciplinary", "Ecological Sensing", "Computational Models"],
    abstract: "Participated as an esteemed delegate exploring computational sensor arrays for environmental conservation, soil health monitoring, and ecological data acquisition.",
  },
  {
    id: "conf-ugc-seminars",
    type: "conference",
    title: "UGC Sponsored National Seminars on IT in Human Development & Rural Economy",
    venue: "University Grants Commission (UGC) Sponsored National Academic Seminars",
    year: "2006 & 2007",
    details: "Presented Papers: 'IT in Human Development' (2006) and 'IT & Rural Economy' (2007)",
    tags: ["UGC", "Digital Empowerment", "Rural Informatics", "Economic Development"],
    abstract: "Early pioneering academic research papers addressing the vital role of telecommunications, community information centers, and computerized governance in uplifting rural livelihood and regional economic empowerment across Bihar.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "exam-system-nit",
    title: "Patna University Examination Systems",
    category: "Enterprise System",
    organization: "National Institute of Technology (NIT Patna) & Patna University",
    year: "1997",
    description: "Engineered and automated computerized tabulation, verification, and mark sheet production systems for B.A, B.Sc, and B.Com (Honours) examinations across Patna University.",
    technologies: ["Database Management", "C/FoxPro Systems", "Data Verification Algorithms", "High-Volume Printing"],
    impact: "Significantly streamlined university grading turnaround, eliminated human calculation discrepancies, and digitized academic records for thousands of graduating scholars.",
  },
  {
    id: "beltron-library",
    title: "Automated Library Management System",
    category: "Software Development",
    organization: "Beltron ICT, Patna (Govt. of Bihar undertaking)",
    year: "1998",
    description: "Designed and implemented a full-scale institutional library management solution encompassing book indexing, catalog search, barcode tracking, circulation, and member fines management.",
    technologies: ["Visual Programming", "Relational Database (RDBMS)", "Information Retrieval", "Inventory Management"],
    impact: "Modernized book circulation and catalog tracking for state educational and technical training institutes.",
  },
  {
    id: "bsnl-fault-repair",
    title: "Computerized Fault Repair Service Complaint System",
    category: "Telecommunications",
    organization: "Bharat Sanchar Nigam Limited (BSNL)",
    year: "Industry Project",
    description: "Core team member responsible for the architectural implementation of the computerized telephone fault complaint management and lineman allocation dispatch system.",
    technologies: ["Client-Server Architecture", "Workflow Dispatch Algorithms", "Database Queueing", "Telemetry Integration"],
    impact: "Reduced customer complaint resolution time by over 40% and provided real-time supervisory dashboards for telecom sub-divisional engineers.",
  },
  {
    id: "women-workforce-study",
    title: "Women Working Force in Bihar (A Case Study of Patna District)",
    category: "Statistical Research",
    organization: "Dept. of Statistics, B.N. College, Patna University",
    year: "Research Project",
    description: "Conducted an exhaustive empirical and statistical inquiry into female labor force participation, socioeconomic parameters, wage disparities, and institutional barriers across Patna District.",
    technologies: ["Stratified Sampling", "Hypothesis Testing", "Multivariate Regression", "Survey Methodology"],
    impact: "Delivered actionable data-driven insights and quantitative indicators used in academic circles and regional policy planning forums.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Artificial Intelligence and Machine Learning Program",
    issuer: "ICTRD India",
    date: "22 January 2026",
    type: "AI & ML",
    accreditation: "Professional National Certification",
  },
  {
    title: "Certified Cyber Security Professional Program",
    issuer: "ICTRD India",
    date: "26 January 2026",
    type: "Cyber Security",
    accreditation: "Advanced Defensive & Infrastructure Security",
  },
  {
    title: "Kapalika Shakti Kit Course",
    issuer: "TheFuture.University",
    date: "January 2026",
    type: "Specialized Tech",
    accreditation: "Accredited by WCAOE",
  },
  {
    title: "Int. Online Workshop on Literature Review (Narrative & Systematic)",
    issuer: "NSS Hindu College, Kerala & Lore & Ed Research Associates",
    date: "May 2022",
    type: "Academic Methodology",
    accreditation: "7-Day International Methodological Training",
  },
];

export const PROFESSIONAL_MEMBERSHIPS = [
  {
    organization: "Computer Society of India (CSI)",
    role: "Active Member",
    description: "Premier national association of IT professionals and academicians promoting technical advancement in computing.",
  },
  {
    organization: "Examination Setter & Evaluator Panel",
    role: "Senior Examiner & Board Member",
    description: "Appointed subject matter expert for confidential syllabus drafting, question paper setting, and thesis evaluation across multiple universities.",
  },
  {
    organization: "Academic Capstone Project Mentor",
    role: "Project Guide",
    description: "Mentored over two decades of MCA and BCA software engineering capstone and research projects.",
  },
];
