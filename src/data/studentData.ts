export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  schoolId: string;
  avatar: string;
  class: string;
  section: string;
  rollNumber: string;
  dateOfBirth: string;
  address: string;
  parentName: string;
  parentPhone: string;
}

export interface TestScore {
  testId: string;
  testName: string;
  subject: string;
  score: number;
  maxScore: number;
  date: string;
  rank: number;
  totalStudents: number;
}

export interface AttendanceRecord {
  month: string;
  present: number;
  absent: number;
  total: number;
  percentage: number;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isUrgent: boolean;
  category: "exam" | "holiday" | "event" | "general";
}

export interface AdmitCard {
  id: string;
  examName: string;
  examDate: string;
  examTime: string;
  center: string;
  centerAddress: string;
  reportingTime: string;
  seatNumber: string;
  instructions: string[];
}

export const currentStudent: Student = {
  id: "STU001",
  name: "Arjun Verma",
  email: "arjun.verma@student.edu",
  phone: "+91 98765 43210",
  schoolId: "SCH2024001",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  class: "12th",
  section: "A",
  rollNumber: "23",
  dateOfBirth: "2006-05-15",
  address: "123 Education Lane, Knowledge City, Delhi 110001",
  parentName: "Rajesh Verma",
  parentPhone: "+91 98765 43211",
};

export const testScores: TestScore[] = [
  {
    testId: "cat-mock-1",
    testName: "CAT Full Mock Test 1",
    subject: "Quantitative Aptitude",
    score: 88,
    maxScore: 100,
    date: "2024-01-15",
    rank: 4,
    totalStudents: 250,
  },
  {
    testId: "ssc-mock-1",
    testName: "SSC CGL Tier-1 Mock",
    subject: "General Intelligence",
    score: 78,
    maxScore: 100,
    date: "2024-01-10",
    rank: 12,
    totalStudents: 180,
  },
  {
    testId: "english-1",
    testName: "English Grammar Test",
    subject: "English",
    score: 92,
    maxScore: 100,
    date: "2024-01-08",
    rank: 2,
    totalStudents: 200,
  },
  {
    testId: "quant-2",
    testName: "Quantitative Practice",
    subject: "Mathematics",
    score: 85,
    maxScore: 100,
    date: "2024-01-05",
    rank: 8,
    totalStudents: 220,
  },
];

export const attendanceRecords: AttendanceRecord[] = [
  { month: "January", present: 20, absent: 2, total: 22, percentage: 91 },
  { month: "December", present: 18, absent: 2, total: 20, percentage: 90 },
  { month: "November", present: 21, absent: 1, total: 22, percentage: 95 },
  { month: "October", present: 19, absent: 3, total: 22, percentage: 86 },
  { month: "September", present: 20, absent: 1, total: 21, percentage: 95 },
  { month: "August", present: 22, absent: 1, total: 23, percentage: 96 },
];

export const notices: Notice[] = [
  {
    id: "n1",
    title: "CAT 2024 Registration Open",
    content: "Registration for CAT 2024 is now open. Last date to apply is October 15, 2024. Students are advised to register early to avoid last-minute rush.",
    date: "2024-01-18",
    isUrgent: true,
    category: "exam",
  },
  {
    id: "n2",
    title: "Republic Day Holiday",
    content: "The institute will remain closed on January 26, 2024 for Republic Day. Classes will resume on January 27, 2024.",
    date: "2024-01-20",
    isUrgent: false,
    category: "holiday",
  },
  {
    id: "n3",
    title: "Mock Test Schedule Updated",
    content: "The mock test schedule for February has been updated. Please check the test module for new dates and timings.",
    date: "2024-01-17",
    isUrgent: false,
    category: "exam",
  },
  {
    id: "n4",
    title: "Parent-Teacher Meeting",
    content: "A parent-teacher meeting is scheduled for January 28, 2024 from 10 AM to 2 PM. All parents are requested to attend.",
    date: "2024-01-16",
    isUrgent: true,
    category: "event",
  },
  {
    id: "n5",
    title: "Library Hours Extended",
    content: "Library hours have been extended till 9 PM for exam preparation. Students can utilize this facility from Monday to Saturday.",
    date: "2024-01-15",
    isUrgent: false,
    category: "general",
  },
];

export const admitCards: AdmitCard[] = [
  {
    id: "ac1",
    examName: "CAT 2024 Mock Examination",
    examDate: "February 15, 2024",
    examTime: "9:00 AM - 12:00 PM",
    center: "Delhi Examination Center",
    centerAddress: "Plot No. 45, Sector 18, Dwarka, New Delhi - 110078",
    reportingTime: "8:00 AM",
    seatNumber: "DL-CAT-2024-1847",
    instructions: [
      "Carry a valid photo ID (Aadhaar/PAN/Passport)",
      "Reach the center at least 1 hour before exam time",
      "Electronic devices are strictly prohibited",
      "Carry blue/black ballpoint pen only",
      "No rough sheets will be provided - use the test booklet margins",
    ],
  },
  {
    id: "ac2",
    examName: "SSC CGL Tier-1 Mock",
    examDate: "February 20, 2024",
    examTime: "2:00 PM - 4:00 PM",
    center: "Noida Test Center",
    centerAddress: "Building A, Knowledge Park III, Greater Noida - 201310",
    reportingTime: "1:00 PM",
    seatNumber: "NDA-SSC-2024-0892",
    instructions: [
      "Bring admit card printout",
      "Carry original photo ID for verification",
      "No calculators allowed",
      "Wear comfortable clothing",
    ],
  },
];

export const classRecords = {
  completed: [
    { id: "c1", subject: "Hindi Grammar", topic: "संज्ञा और सर्वनाम", date: "2024-01-15", duration: "45 min" },
    { id: "c2", subject: "English", topic: "Parts of Speech", date: "2024-01-14", duration: "50 min" },
    { id: "c3", subject: "Hindi Grammar", topic: "Introduction", date: "2024-01-13", duration: "40 min" },
    { id: "c4", subject: "English", topic: "Tenses Overview", date: "2024-01-12", duration: "55 min" },
  ],
  ongoing: [
    { id: "o1", subject: "Hindi Grammar", topic: "क्रिया और काल", progress: 60 },
    { id: "o2", subject: "English", topic: "Subject-Verb Agreement", progress: 30 },
  ],
};

export const subjectPerformance = [
  { subject: "Quantitative Aptitude", accuracy: 85, score: 88, attempts: 12, trend: "up" },
  { subject: "Verbal Ability", accuracy: 78, score: 82, attempts: 10, trend: "up" },
  { subject: "Data Interpretation", accuracy: 72, score: 75, attempts: 8, trend: "down" },
  { subject: "Logical Reasoning", accuracy: 88, score: 90, attempts: 15, trend: "up" },
  { subject: "General Knowledge", accuracy: 65, score: 68, attempts: 6, trend: "stable" },
];

export const chatUsers = [
  { id: "u1", name: "Priya Sharma", avatar: "PS", lastMessage: "Did you solve the quant questions?", time: "2 min ago", unread: 2, online: true },
  { id: "u2", name: "Rahul Kumar", avatar: "RK", lastMessage: "Mock test tomorrow!", time: "15 min ago", unread: 0, online: true },
  { id: "u3", name: "Amit Singh", avatar: "AS", lastMessage: "Thanks for the notes", time: "1 hr ago", unread: 0, online: false },
  { id: "u4", name: "Neha Gupta", avatar: "NG", lastMessage: "Group study at 4?", time: "2 hrs ago", unread: 1, online: true },
  { id: "u5", name: "Class Group", avatar: "CG", lastMessage: "Teacher: Submit assignments by Friday", time: "3 hrs ago", unread: 5, online: false },
];

export const complaintCategories = [
  "Technical Issue",
  "Course Content",
  "Faculty Related",
  "Infrastructure",
  "Fee Related",
  "Examination",
  "Other",
];
