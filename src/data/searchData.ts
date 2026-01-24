export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "class" | "test" | "topic" | "page";
  path: string;
}

export const searchableItems: SearchResult[] = [
  // Classes
  { id: "maths-ci&si", title: "Compound & Simple Intrest", description: "Compound & Simple Intrest", type: "class", path: "/classes" },
  { id: "c2", title: "English - Parts of Speech", description: "Learn about nouns, verbs, adjectives and more", type: "class", path: "/classes" },
  { id: "c3", title: "Mathematics - Algebra Basics", description: "Introduction to algebraic expressions", type: "class", path: "/classes" },
  { id: "c4", title: "Quantitative Aptitude", description: "CAT preparation quantitative section", type: "class", path: "/classes" },
  { id: "c5", title: "Verbal Ability", description: "Reading comprehension and vocabulary", type: "class", path: "/classes" },
  { id: "c6", title: "Logical Reasoning", description: "Critical thinking and problem solving", type: "class", path: "/classes" },
  
  // Tests
  { id: "t1", title: "CAT Full Mock Test", description: "Complete CAT examination simulation", type: "test", path: "/tests" },
  { id: "t2", title: "SSC CGL Tier-1 Mock", description: "SSC Combined Graduate Level test", type: "test", path: "/tests" },
  { id: "t3", title: "English Grammar Test", description: "Grammar and vocabulary assessment", type: "test", path: "/tests" },
  { id: "t4", title: "Quantitative Practice Test", description: "Math and aptitude practice", type: "test", path: "/tests" },
  
  // Topics
  { id: "tp1", title: "Data Interpretation", description: "Charts, graphs and data analysis", type: "topic", path: "/classes" },
  { id: "tp2", title: "Reading Comprehension", description: "Passage analysis and understanding", type: "topic", path: "/classes" },
  { id: "tp3", title: "Number Systems", description: "Divisibility, HCF, LCM", type: "topic", path: "/classes" },
  { id: "tp4", title: "Geometry", description: "Shapes, angles and theorems", type: "topic", path: "/classes" },
  
  // Pages
  { id: "p1", title: "Dashboard", description: "View your learning progress", type: "page", path: "/" },
  { id: "p2", title: "Academic Performance", description: "Track your test scores and grades", type: "page", path: "/academic" },
  { id: "p3", title: "Chat", description: "Message classmates and teachers", type: "page", path: "/chat" },
  { id: "p4", title: "Classes", description: "Browse and watch recorded classes", type: "page", path: "/classes" },
  { id: "p5", title: "Tests", description: "Take practice tests and mock exams", type: "page", path: "/tests" },
  { id: "p6", title: "My Profile", description: "Manage your account settings", type: "page", path: "/profile" },
  { id: "p7", title: "Register Complaint", description: "Submit feedback or report issues", type: "page", path: "/complaint" },
];

export const searchItems = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  
  return searchableItems.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery)
  );
};
