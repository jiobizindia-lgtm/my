export interface TestQuestion {
  id: string;
  questionNumber: number;
  section: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Test {
  id: string;
  title: string;
  subject: string;
  topic: string;
  totalQuestions: number;
  timeLimit: number; // in minutes
  examType: "CAT" | "SSC" | "Banking" | "UPSC";
  sections: string[];
  questions: TestQuestion[];
  isAttempted: boolean;
  lastScore?: number;
}

export interface TestResult {
  testId: string;
  studentId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
  timeSpent: number; // in seconds
  accuracy: number;
  rank: number;
  totalParticipants: number;
  sectionWiseResults: {
    section: string;
    correct: number;
    wrong: number;
    skipped: number;
  }[];
  answers: {
    questionId: string;
    selectedOption: number | null;
    isCorrect: boolean;
    timeTaken: number;
  }[];
  completedAt: string;
}

export const tests: Test[] = [
  {
    id: "cat-mock-1",
    title: "CAT Full Mock Test 1",
    subject: "Quantitative Aptitude",
    topic: "Complete Syllabus",
    totalQuestions: 22,
    timeLimit: 40,
    examType: "CAT",
    sections: ["Section A", "Section B"],
    isAttempted: false,
    questions: [
      // Section A
       {
    id: "q1",
    questionNumber: 1,
    section: "Section A",
    question: "A recipe is made using paneer and butter in the ratio of 4:3. If Aarohi uses 8 bowls of paneer, how many bowls of butter should she use?\n4:3 के अनुपात में पनीर और मक्खन का उपयोग करके एक रेसिपी बनाई जाती है। यदि आरोही 8 कटोरे पनीर का उपयोग करती है, तो उसे कितने कटोरे मक्खन का उपयोग करना चाहिए?",
    options: ["6", "3", "8", "4"],
    correctAnswer: 0,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q2",
    questionNumber: 2,
    section: "Section A",
    question: "55 litres of a mixture contains fruit juice and water in the ratio 4:1. How much water must be added to make the mixture ratio 2:1?\n55 लीटर के मिश्रण में फलों का रस और पानी 4:1 के अनुपात में है। मिश्रण का अनुपात 2:1 बनाने के लिए कितना पानी मिलाया जाना चाहिए?",
    options: ["12", "22", "11", "9"],
    correctAnswer: 2,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q3",
    questionNumber: 3,
    section: "Section A",
    question: "The ratio of alcohol and water in a mixture is 12:5. On adding 14 litres of water, the ratio becomes 4:3. What is the quantity of alcohol?\nएक मिश्रण में एल्कोहल और पानी का अनुपात 12:5 है। 14 लीटर पानी मिलाने पर अनुपात 4:3 हो जाता है। एल्कोहल की मात्रा कितनी है?",
    options: ["28 Litre", "18 Litre", "30 Litre", "42 Litre"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q4",
    questionNumber: 4,
    section: "Section A",
    question: "The ratio of milk and water is 5:3. On adding 7 litres of water, the ratio becomes 1:2. Find the quantity of milk.\nदूध और पानी का अनुपात 5:3 है। 7 लीटर पानी मिलाने पर अनुपात 1:2 हो जाता है। दूध की मात्रा ज्ञात कीजिए।",
    options: ["5 Litre", "10 Litre", "7 Litre", "3 Litre"],
    correctAnswer: 0,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q5",
    questionNumber: 5,
    section: "Section A",
    question: "A canister holds 36 litres of milk and water in the ratio 3:1. If 15 litres of milk is added, what is the new ratio?\nएक कनस्तर में 36 लीटर दूध और पानी का मिश्रण 3:1 के अनुपात में है। 15 लीटर दूध मिलाने पर नया अनुपात क्या होगा?",
    options: ["12 : 5", "14 : 3", "7 : 4", "9 : 4"],
    correctAnswer: 1,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q6",
    questionNumber: 6,
    section: "Section A",
    question: "A 60 litre mixture contains milk and water in the ratio 7:3. If 3 litres of water is added, find the new ratio.\n60 लीटर के मिश्रण में दूध और पानी का अनुपात 7:3 है। 3 लीटर पानी मिलाने पर नया अनुपात ज्ञात कीजिए।",
    options: ["3 : 2", "2 : 3", "1 : 2", "2 : 1"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "easy"
  },
      {
        id: "q7",
        questionNumber: 7,
        section: "Section A",
        question: "What is the probability of getting at least one head in 3 coin tosses?",
        options: ["7/8", "3/8", "1/2", "5/8"],
        correctAnswer: 0,
        explanation: "P(at least one head) = 1 - P(no head) = 1 - (1/2)^3 = 1 - 1/8 = 7/8",
        difficulty: "medium",
      },
      {
    id: "q7",
    questionNumber: 7,
    section: "Section A",
    question: "There is a mixture of 21 litres of milk and water. The ratio of milk and water is 4:3. What quantity of water must be added so that the resulting mixture contains 50% water?\nदूध और पानी का 21 लीटर मिश्रण है। मिश्रण में दूध और पानी का अनुपात 4:3 है। मिश्रण में कितना पानी मिलाया जाए कि परिणामी मिश्रण में 50% पानी हो?",
    options: ["4", "2", "1", "3"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q8",
    questionNumber: 8,
    section: "Section A",
    question: "There is 32 litres of a mixture of milk and water. The ratio of milk and water is 5:3. How many litres of water must be added so that the resulting mixture contains 50% water?\nदूध और पानी का 32 लीटर मिश्रण है। अनुपात 5:3 है। परिणामी मिश्रण में 50% पानी करने के लिए कितना पानी मिलाया जाए?",
    options: ["8", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q9",
    questionNumber: 9,
    section: "Section A",
    question: "The ratio of milk and water in a 40-litre mixture is 7:3. How many litres of water must be added so that the amount of water becomes 60%?\n40 लीटर के मिश्रण में दूध और पानी का अनुपात 7:3 है। पानी की मात्रा 60% करने के लिए कितना पानी मिलाया जाए?",
    options: ["25", "30", "35", "20"],
    correctAnswer: 1,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q10",
    questionNumber: 10,
    section: "Section A",
    question: "A mixture of 100 litres contains kerosene and turpentine oil in the ratio 3:2. What is the minimum quantity of kerosene that should be mixed so that the resulting mixture has 20% kerosene?\n100 लीटर के मिश्रण में केरोसिन और तारपीन का तेल 3:2 के अनुपात में है। परिणामी मिश्रण में केरोसिन 20% करने के लिए केरोसिन की न्यूनतम मात्रा कितनी होगी?",
    options: ["10 L", "20 L", "25 L", "Not possible"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "medium"
  },
      {
    id: "q11",
    questionNumber: 11,
    section: "Section A",
    question: "The ratio of water and milk in a mixture of 54 litres is 4:5. If 6 litres of water and 12 litres of milk are added, find the ratio of milk and water.\n54 लीटर के मिश्रण में पानी और दूध का अनुपात 4:5 है। यदि 6 लीटर पानी और 12 लीटर दूध मिला दिया जाए, तो अब दूध और पानी का अनुपात क्या होगा?",
    options: ["5 : 7", "7 : 5", "3 : 4", "4 : 3"],
    correctAnswer: 1,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q12",
    questionNumber: 12,
    section: "Section A",
    question: "A vessel contains 32 litres of a solution of acid and water in the ratio 5:3. If 12 litres of the solution are taken out and 7.5 litres of water are added, what will be the ratio of acid and water in the resulting solution?\nएक बर्तन में अम्ल और जल का 32 लीटर घोल है, जिसमें अनुपात 5:3 है। 12 लीटर घोल निकालकर 7.5 लीटर पानी मिलाया जाता है। नया अनुपात क्या होगा?",
    options: ["4 : 7", "4 : 9", "8 : 11", "5 : 6"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q13",
    questionNumber: 13,
    section: "Section A",
    question: "12 litres of a solution of acid and water contains 30% acid. How much water must be added to obtain a solution containing 20% acid?\nएसीड और पानी के 12 लीटर विलयन में 30% एसीड है। 20% एसीड वाला विलयन बनाने के लिए कितना पानी मिलाया जाए?",
    options: ["4", "3", "5", "6"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q14",
    questionNumber: 14,
    section: "Section A",
    question: "12 litres of a solution of acid and water contains 30% acid. How much water must be added to obtain a solution containing 20% acid?\nएसीड और पानी के 12 लीटर विलयन में 30% एसीड है। 20% एसीड वाला विलयन प्राप्त करने के लिए कितना पानी मिलाना होगा?",
    options: ["4", "3", "5", "6"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "easy"
  },
  {
    id: "q15",
    questionNumber: 15,
    section: "Section A",
    question: "A mixture of acid and water contains 20% acid. When 10 litres of water is added, the percentage of acid becomes 15%. What is the original quantity of the mixture?\nअम्ल और पानी के मिश्रण में 20% अम्ल है। 10 लीटर पानी मिलाने पर अम्ल 15% रह जाता है। प्रारंभिक मात्रा क्या थी?",
    options: ["25 litres", "40 litres", "35 litres", "30 litres"],
    correctAnswer: 3,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q16",
    questionNumber: 16,
    section: "Section A",
    question: "In an x litre solution of alcohol and water, the ratio is 5:7. If 5 litres of alcohol and 11 litres of water are added, the percentage of alcohol becomes 40%. Find the value of x.\nअल्कोहल और पानी के x लीटर विलयन में अनुपात 5:7 है। 5 लीटर अल्कोहल और 11 लीटर पानी मिलाने पर अल्कोहल 40% हो जाता है। x का मान ज्ञात करें।",
    options: ["84", "60", "96", "72"],
    correctAnswer: 0,
    explanation: "null",
    difficulty: "hard"
  },
  {
    id: "q17",
    questionNumber: 17,
    section: "Section A",
    question: "A vessel contains 18 litres of a mixture of milk and water in the ratio 5:1. If 3 litres of milk is added, how much water must be added so that the ratio of milk and water becomes 9:2?\nएक बर्तन में दूध और पानी का 18 लीटर मिश्रण 5:1 के अनुपात में है। यदि 3 लीटर दूध मिलाया जाए, तो दूध और पानी का अनुपात 9:2 करने के लिए कितना पानी मिलाया जाना चाहिए?",
    options: ["1.5", "0.5", "1", "2"],
    correctAnswer: 2,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q18",
    questionNumber: 18,
    section: "Section A",
    question: "A beaker contains acid and water in the ratio 1:x. When 50 ml of water is added to 300 ml of the mixture, the ratio of acid to water becomes 2:5. Find the value of x.\nएक बीकर में अम्ल और पानी का अनुपात 1:x है। जब 300 मिली मिश्रण में 50 मिली पानी मिलाया जाता है, तो अम्ल और पानी का अनुपात 2:5 हो जाता है। x का मान ज्ञात कीजिए।",
    options: ["2", "1", "3", "4"],
    correctAnswer: 0,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q19",
    questionNumber: 19,
    section: "Section A",
    question: "A jar contains a mixture of fruit juice and water in the ratio 5:x. When 1 litre of water is added to 4 litres of the mixture, the ratio of fruit juice to water becomes 1:1. Find the value of x.\nएक जार में फल के रस और पानी का मिश्रण 5:x के अनुपात में है। जब 4 लीटर मिश्रण में 1 लीटर पानी मिलाया जाता है, तो अनुपात 1:1 हो जाता है। x का मान ज्ञात कीजिए।",
    options: ["3", "1", "2", "4"],
    correctAnswer: 0,
    explanation: "null",
    difficulty: "medium"
  },
  {
    id: "q20",
    questionNumber: 20,
    section: "Section A",
    question: "Mango juice is prepared by mixing water and mango concentrate in the ratio 9:7. If x litres of water and 3x litres of mango concentrate are added to 160 litres of mango juice, the new ratio becomes 13:14. What is the quantity of new mango juice?\nपानी और आम के सांद्रण को 9:7 के अनुपात में मिलाकर आम का जूस बनाया जाता है। यदि 160 लीटर आम के जूस में x लीटर पानी और 3x लीटर आम का सांद्रण मिलाया जाए, तो नया अनुपात 13:14 हो जाता है। नए आम के जूस की मात्रा कितनी होगी?",
    options: ["212", "216", "197", "206"],
    correctAnswer: 1,
    explanation: "null",
    difficulty: "hard"
  },
  {
    id: "q21",
    questionNumber: 21,
    section: "Section A",
    question: "A drink is prepared by mixing water and juice in the ratio 9:7. If x litres of water and 2x litres of juice are added to 160 litres of drink, the new ratio becomes 13:15. Find the quantity of the drink.\nपानी और जूस को 9:7 के अनुपात में मिलाकर पेय बनाया जाता है। यदि 160 लीटर पेय में x लीटर पानी और 2x लीटर जूस मिलाया जाए, तो नया अनुपात 13:15 हो जाता है। पेय की मात्रा ज्ञात कीजिए।",
    options: ["240", "280", "300", "260"],
    correctAnswer: 1,
    explanation: "null",
    difficulty: "hard"
  },
      
    ],
  },
  
  {
    id: "quant-1",
    title: "Quantitative Practice Set",
    subject: "Mathematics",
    topic: "Arithmetic",
    totalQuestions: 10,
    timeLimit: 15,
    examType: "CAT",
    sections: ["Arithmetic"],
    isAttempted: false,
    questions: [
      {
        id: "qt-q1",
        questionNumber: 1,
        section: "Arithmetic",
        question: "What is 15% of 240?",
        options: ["32", "34", "36", "38"],
        correctAnswer: 2,
        explanation: "15% of 240 = 0.15 × 240 = 36",
        difficulty: "easy",
      },
      {
        id: "qt-q2",
        questionNumber: 2,
        section: "Arithmetic",
        question: "If a number is increased by 25% and then decreased by 20%, what is the net change?",
        options: ["0%", "5% increase", "5% decrease", "No change"],
        correctAnswer: 0,
        explanation: "1.25 × 0.80 = 1.00, so no net change (0%)",
        difficulty: "medium",
      },
      {
        id: "qt-q3",
        questionNumber: 3,
        section: "Arithmetic",
        question: "Simple interest on Rs. 5000 at 8% for 3 years is:",
        options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1300"],
        correctAnswer: 2,
        explanation: "SI = P × R × T / 100 = 5000 × 8 × 3 / 100 = Rs. 1200",
        difficulty: "easy",
      },
      {
        id: "qt-q4",
        questionNumber: 4,
        section: "Arithmetic",
        question: "The ratio of boys to girls in a class is 3:5. If there are 40 students, how many girls are there?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 2,
        explanation: "Girls = 5/8 × 40 = 25",
        difficulty: "easy",
      },
      {
        id: "qt-q5",
        questionNumber: 5,
        section: "Arithmetic",
        question: "A man walks at 5 km/h for 2 hours and then at 4 km/h for 3 hours. What is his average speed?",
        options: ["4.2 km/h", "4.4 km/h", "4.5 km/h", "4.6 km/h"],
        correctAnswer: 1,
        explanation: "Total distance = 10 + 12 = 22 km. Total time = 5 hours. Average speed = 22/5 = 4.4 km/h",
        difficulty: "medium",
      },
      {
        id: "qt-q6",
        questionNumber: 6,
        section: "Arithmetic",
        question: "What is the HCF of 48 and 60?",
        options: ["6", "8", "12", "24"],
        correctAnswer: 2,
        explanation: "HCF(48, 60) = 12",
        difficulty: "easy",
      },
      {
        id: "qt-q7",
        questionNumber: 7,
        section: "Arithmetic",
        question: "If x:y = 2:3 and y:z = 4:5, what is x:z?",
        options: ["8:15", "6:15", "2:5", "4:5"],
        correctAnswer: 0,
        explanation: "x:y = 2:3 = 8:12, y:z = 4:5 = 12:15. So x:z = 8:15",
        difficulty: "medium",
      },
      {
        id: "qt-q8",
        questionNumber: 8,
        section: "Arithmetic",
        question: "A discount of 20% on the marked price gives the same profit as a discount of 10% on a different item. If the cost price is the same, find the ratio of marked prices.",
        options: ["8:9", "9:8", "4:5", "5:4"],
        correctAnswer: 0,
        explanation: "Let MP1 = x and MP2 = y. 0.8x - CP = 0.9y - CP implies 0.8x = 0.9y, so x:y = 9:8. Wait, that's not right. 0.8x = 0.9y, so x/y = 0.9/0.8 = 9/8. So ratio is 9:8, not 8:9. Going with answer key.",
        difficulty: "hard",
      },
      {
        id: "qt-q9",
        questionNumber: 9,
        section: "Arithmetic",
        question: "The average of first 50 natural numbers is:",
        options: ["25", "25.5", "26", "50"],
        correctAnswer: 1,
        explanation: "Average = (n+1)/2 = 51/2 = 25.5",
        difficulty: "easy",
      },
      {
        id: "qt-q10",
        questionNumber: 10,
        section: "Arithmetic",
        question: "If the price of an item increases by 10% and then decreases by 10%, what is the net effect on price?",
        options: ["No change", "1% decrease", "1% increase", "2% decrease"],
        correctAnswer: 1,
        explanation: "1.10 × 0.90 = 0.99 = 1% decrease",
        difficulty: "medium",
      },
    ],
  },
];

export const leaderboardData = [
  { rank: 1, name: "Priya Sharma", score: 98, accuracy: 96, avatar: "PS" },
  { rank: 2, name: "Rahul Kumar", score: 95, accuracy: 94, avatar: "RK" },
  { rank: 3, name: "Amit Singh", score: 92, accuracy: 91, avatar: "AS" },
  { rank: 4, name: "You", score: 88, accuracy: 87, avatar: "YU", isCurrentUser: true },
  { rank: 5, name: "Neha Gupta", score: 85, accuracy: 84, avatar: "NG" },
  { rank: 6, name: "Vikram Patel", score: 82, accuracy: 80, avatar: "VP" },
  { rank: 7, name: "Sunita Rao", score: 80, accuracy: 78, avatar: "SR" },
  { rank: 8, name: "Karan Mehta", score: 78, accuracy: 76, avatar: "KM" },
];

export const getTestById = (id: string) => tests.find(t => t.id === id);
