export interface ClassQuestion {
  id: string;
  classId: string;
  questionNumber: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ClassQuestionSet {
  classId: string;
  questions: ClassQuestion[];
}

export const classQuestions: ClassQuestion[] = [

  // Math Mixture Class-1 : mma-1

   {
    id: "mcs-1-q1",
    classId: "mma-1",
    questionNumber: 1,
    text: "A recipe is made using paneer and butter in the ratio of 4:3. If Aarohi uses 8 bowls of paneer, how many bowls of butter should she use?\n4:3 के अनुपात में पनीर और मक्खन का उपयोग करके एक रेसिपी बनाई जाती है। यदि आरोही 8 कटोरे पनीर का उपयोग करती है, तो उसे कितने कटोरे मक्खन का उपयोग करना चाहिए?",
    options: ["6", "3", "8", "4"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-1-q2",
    classId: "mma-1",
    questionNumber: 2,
    text: "55 litres of a mixture contains fruit juice and water in the ratio 4:1. How much water must be added to make the mixture ratio 2:1?\n55 लीटर के मिश्रण में फलों का रस और पानी 4:1 के अनुपात में है। मिश्रण का अनुपात 2:1 बनाने के लिए कितना पानी मिलाया जाना चाहिए?",
    options: ["12", "22", "11", "9"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-1-q3",
    classId: "mma-1",
    questionNumber: 3,
    text: "The ratio of alcohol and water in a mixture is 12:5. On adding 14 litres of water, the ratio becomes 4:3. What is the quantity of alcohol?\nएक मिश्रण में एल्कोहल और पानी का अनुपात 12:5 है। 14 लीटर पानी मिलाने पर अनुपात 4:3 हो जाता है। एल्कोहल की मात्रा कितनी है?",
    options: ["28 Litre", "18 Litre", "30 Litre", "42 Litre"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-1-q4",
    classId: "mma-1",
    questionNumber: 4,
    text: "The ratio of milk and water is 5:3. On adding 7 litres of water, the ratio becomes 1:2. Find the quantity of milk.\nदूध और पानी का अनुपात 5:3 है। 7 लीटर पानी मिलाने पर अनुपात 1:2 हो जाता है। दूध की मात्रा ज्ञात कीजिए।",
    options: ["5 Litre", "10 Litre", "7 Litre", "3 Litre"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-1-q5",
    classId: "mma-1",
    questionNumber: 5,
    text: "A canister holds 36 litres of milk and water in the ratio 3:1. If 15 litres of milk is added, what is the new ratio?\nएक कनस्तर में 36 लीटर दूध और पानी का मिश्रण 3:1 के अनुपात में है। 15 लीटर दूध मिलाने पर नया अनुपात क्या होगा?",
    options: ["12 : 5", "14 : 3", "7 : 4", "9 : 4"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-1-q6",
    classId: "mma-1",
    questionNumber: 6,
    text: "A 60 litre mixture contains milk and water in the ratio 7:3. If 3 litres of water is added, find the new ratio.\n60 लीटर के मिश्रण में दूध और पानी का अनुपात 7:3 है। 3 लीटर पानी मिलाने पर नया अनुपात ज्ञात कीजिए।",
    options: ["3 : 2", "2 : 3", "1 : 2", "2 : 1"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-1-q7",
    classId: "mma-1",
    questionNumber: 7,
    text: "There is a mixture of 21 litres of milk and water. The ratio is 4:3. What quantity of water must be added so that the resulting mixture contains 50% water?\n21 लीटर के मिश्रण में दूध और पानी का अनुपात 4:3 है। मिश्रण में 50% पानी करने के लिए कितना पानी मिलाया जाए?",
    options: ["4", "2", "1", "3"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-1-q8",
    classId: "mma-1",
    questionNumber: 8,
    text: "There is 32 litres of a mixture of milk and water. The ratio is 5:3. How many litres of water must be added so that the resulting mixture contains 50% water?\n32 लीटर के मिश्रण में दूध और पानी का अनुपात 5:3 है। 50% पानी करने के लिए कितना पानी मिलाया जाए?",
    options: ["8", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-1-q9",
    classId: "mma-1",
    questionNumber: 9,
    text: "The ratio of milk and water in a 40-litre mixture is 7:3. How many litres of water must be added so that the amount of water becomes 60%?\n40 लीटर के मिश्रण में दूध और पानी का अनुपात 7:3 है। पानी 60% करने के लिए कितना पानी मिलाया जाए?",
    options: ["25", "30", "35", "20"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-1-q10",
    classId: "mma-1",
    questionNumber: 10,
    text: "A mixture of 100 litres contains kerosene and turpentine oil in the ratio 3:2. What is the minimum quantity of kerosene that should be mixed so that the resulting mixture has 20% kerosene?\n100 लीटर के मिश्रण में केरोसिन और तारपीन का तेल 3:2 के अनुपात में है। 20% केरोसिन करने के लिए न्यूनतम केरोसिन कितना होगा?",
    options: ["10 L", "20 L", "25 L", "Not possible"],
    correctAnswer: 3,
    explanation: "null"
  },


  // Math Mixture Class-2 : mma-2

  {
    id: "mcs-2-q1",
    classId: "mma-2",
    questionNumber: 1,
    text: "The ratio of water and milk in a mixture of 54 litres is 4:5. If 6 litres of water and 12 litres of milk are added, find the ratio of milk and water.\n54 लीटर के मिश्रण में पानी और दूध का अनुपात 4:5 है। यदि 6 लीटर पानी और 12 लीटर दूध मिला दिया जाए, तो अब दूध और पानी का अनुपात क्या होगा?",
    options: ["5 : 7", "7 : 5", "3 : 4", "4 : 3"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-2-q2",
    classId: "mma-2",
    questionNumber: 2,
    text: "A vessel contains 32 litres of a solution of acid and water in the ratio 5:3. If 12 litres of the solution are taken out and 7.5 litres of water are added, what will be the ratio of acid and water in the resulting solution?\nएक बर्तन में अम्ल और जल का 32 लीटर घोल है, जिसमें अनुपात 5:3 है। 12 लीटर घोल निकालकर 7.5 लीटर पानी मिलाया जाता है। नया अनुपात क्या होगा?",
    options: ["4 : 7", "4 : 9", "8 : 11", "5 : 6"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-2-q3",
    classId: "mma-2",
    questionNumber: 3,
    text: "12 litres of a solution of acid and water contains 30% acid. How much water must be added to obtain a solution containing 20% acid?\nएसीड और पानी के 12 लीटर विलयन में 30% एसीड है। 20% एसीड वाला विलयन बनाने के लिए कितना पानी मिलाया जाए?",
    options: ["4", "3", "5", "6"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-2-q4",
    classId: "mma-2",
    questionNumber: 4,
    text: "12 litres of a solution of acid and water contains 30% acid. How much water must be added to obtain a solution containing 20% acid?\nएसीड और पानी के 12 लीटर विलयन में 30% एसीड है। 20% एसीड वाला विलयन प्राप्त करने के लिए कितना पानी मिलाना होगा?",
    options: ["4", "3", "5", "6"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-2-q5",
    classId: "mma-2",
    questionNumber: 5,
    text: "A mixture of acid and water contains 20% acid. When 10 litres of water is added, the percentage of acid becomes 15%. What is the original quantity of the mixture?\nअम्ल और पानी के मिश्रण में 20% अम्ल है। 10 लीटर पानी मिलाने पर अम्ल 15% रह जाता है। प्रारंभिक मात्रा क्या थी?",
    options: ["25 litres", "40 litres", "35 litres", "30 litres"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-2-q6",
    classId: "mma-2",
    questionNumber: 6,
    text: "In an x litre solution of alcohol and water, the ratio is 5:7. If 5 litres of alcohol and 11 litres of water are added, the percentage of alcohol becomes 40%. Find the value of x.\nअल्कोहल और पानी के x लीटर विलयन में अनुपात 5:7 है। 5 लीटर अल्कोहल और 11 लीटर पानी मिलाने पर अल्कोहल 40% हो जाता है। x का मान ज्ञात करें।",
    options: ["84", "60", "96", "72"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-2-q7",
    classId: "mma-2",
    questionNumber: 7,
    text: "A vessel contains 18 litres of a mixture of milk and water in the ratio 5:1. If 3 litres of milk is added, how much water must be added so that the ratio of milk and water becomes 9:2?\nएक बर्तन में दूध और पानी का 18 लीटर मिश्रण 5:1 के अनुपात में है। यदि 3 लीटर दूध मिलाया जाए, तो अनुपात 9:2 करने के लिए कितना पानी मिलाया जाए?",
    options: ["1.5", "0.5", "1", "2"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-2-q8",
    classId: "mma-2",
    questionNumber: 8,
    text: "A beaker contains acid and water in the ratio 1:x. When 50 ml of water is added to 300 ml of the mixture, the ratio of acid to water becomes 2:5. Find the value of x.\nएक बीकर में अम्ल और पानी का अनुपात 1:x है। 300 मिली मिश्रण में 50 मिली पानी मिलाने पर अनुपात 2:5 हो जाता है। x का मान ज्ञात कीजिए।",
    options: ["2", "1", "3", "4"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-2-q9",
    classId: "mma-2",
    questionNumber: 9,
    text: "A jar contains a mixture of fruit juice and water in the ratio 5:x. When 1 litre of water is added to 4 litres of the mixture, the ratio becomes 1:1. Find the value of x.\nएक जार में फल के रस और पानी का मिश्रण 5:x के अनुपात में है। 4 लीटर मिश्रण में 1 लीटर पानी मिलाने पर अनुपात 1:1 हो जाता है। x का मान ज्ञात कीजिए।",
    options: ["3", "1", "2", "4"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-2-q10",
    classId: "mma-2",
    questionNumber: 10,
    text: "Mango juice is prepared by mixing water and mango concentrate in the ratio 9:7. If x litres of water and 3x litres of mango concentrate are added to 160 litres of mango juice, the new ratio becomes 13:14. What is the quantity of new mango juice?\nपानी और आम के सांद्रण को 9:7 के अनुपात में मिलाकर आम का जूस बनाया जाता है। 160 लीटर जूस में x लीटर पानी और 3x लीटर सांद्रण मिलाने पर नया अनुपात 13:14 हो जाता है। नए जूस की मात्रा कितनी होगी?",
    options: ["212", "216", "197", "206"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-2-q11",
    classId: "mma-2",
    questionNumber: 11,
    text: "A drink is prepared by mixing water and juice in the ratio 9:7. If x litres of water and 2x litres of juice are added to 160 litres of drink, the new ratio becomes 13:15. Find the quantity of the drink.\nपानी और जूस को 9:7 के अनुपात में मिलाकर पेय बनाया जाता है। 160 लीटर पेय में x लीटर पानी और 2x लीटर जूस मिलाने पर नया अनुपात 13:15 हो जाता है। पेय की मात्रा ज्ञात कीजिए।",
    options: ["240", "280", "300", "260"],
    correctAnswer: 1,
    explanation: "null"
  },


// Math Mixture Class-3 : mma-3

 {
    id: "mma-3-q1",
    classId: "mma-3",
    questionNumber: 1,
    text: "One man adds 3 litres of water to 12 litres of milk and another adds 4 litres of water to 10 litres of milk. What is the ratio of the strengths of the milk in the two mixtures?\nयदि एक आदमी 12 लीटर दूध में 3 लीटर पानी मिलाता है और दूसरा आदमी 10 लीटर दूध में 4 लीटर पानी मिलाता है। दोनों मिश्रणों में दूध का अनुपात ज्ञात कीजिए।",
    options: ["15 : 25", "25 : 28", "28 : 25", "Not possible"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-3-q2",
    classId: "mma-3",
    questionNumber: 2,
    text: "If one man adds 6 litres of water to 10 litres of milk and another adds 4 litres of water to 8 litres of milk. Find the ratio of milk in the two mixtures.\nयदि एक आदमी 10 लीटर दूध में 6 लीटर पानी मिलाता है और दूसरा 8 लीटर दूध में 4 लीटर पानी मिलाता है। दोनों मिश्रणों में दूध का अनुपात ज्ञात कीजिए।",
    options: ["16 : 15", "12 : 11", "16 : 17", "15 : 16"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-3-q3",
    classId: "mma-3",
    questionNumber: 3,
    text: "The ratio of milk and water in a mixture is 1:3. x litres of milk is added, ratio becomes 7:15 and then 50 litres of water is added, ratio becomes 2:5. Find x.\nएक मिश्रण में दूध और पानी का अनुपात 1:3 है। x लीटर दूध मिलाने पर अनुपात 7:15 हो जाता है और 50 लीटर पानी मिलाने पर अनुपात 2:5 हो जाता है। x का मान ज्ञात करें।",
    options: ["28 litre", "40 litre", "32 litre", "68 litre"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-3-q4",
    classId: "mma-3",
    questionNumber: 4,
    text: "The ratio of milk and water in a vessel is 2:3. After extracting some water, ratio becomes 5:7 and mixture becomes 36 litres. How much water was extracted?\nएक बर्तन में दूध और पानी का अनुपात 2:3 है। कुछ पानी निकालने पर अनुपात 5:7 हो जाता है और मिश्रण 36 लीटर रह जाता है। कितना पानी निकाला गया था?",
    options: ["1 litre", "1.25 litre", "1.5 litre", "1.15 litre"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-3-q5",
    classId: "mma-3",
    questionNumber: 5,
    text: "Two containers of equal capacity contain mixtures in ratios 3:7 and 7:9. They are mixed together. Find the resulting ratio.\nदो समान धारिता के कंटेनरों में दूध-पानी का अनुपात 3:7 और 7:9 है। दोनों को मिलाने पर नया अनुपात क्या होगा?",
    options: ["57 : 107", "59 : 101", "61 : 97", "58 : 103"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-3-q6",
    classId: "mma-3",
    questionNumber: 6,
    text: "Mixture A has copper and tin in ratio 1:2, mixture B in ratio 1:3. Equal quantities are mixed to form C. Find ratio in C.\nमिश्रण A में कॉपर और टिन का अनुपात 1:2 है तथा B में 1:3 है। समान मात्रा मिलाने पर C का अनुपात क्या होगा?",
    options: ["2 : 5", "7 : 17", "7 : 12", "1 : 5"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-3-q7",
    classId: "mma-3",
    questionNumber: 7,
    text: "Three containers contain acid-water in ratios 3:2, 7:3 and 11:4. Find final ratio when mixed.\nतीन पात्रों में अम्ल-पानी का अनुपात क्रमशः 3:2, 7:3 और 11:4 है। मिलाने पर अंतिम अनुपात ज्ञात करें।",
    options: ["61 : 29", "61 : 28", "60 : 29", "59 : 29"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-3-q8",
    classId: "mma-3",
    questionNumber: 8,
    text: "Ratios of copper to zinc in alloys A and B are 3:4 and 5:9. Taken in ratio 2:3. Find new ratio.\nमिश्र धातु A और B में तांबा:जस्ता अनुपात 3:4 और 5:9 है। इन्हें 2:3 में मिलाया गया। नया अनुपात क्या होगा?",
    options: ["27 : 43", "8 : 13", "3 : 5", "9 : 11"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-3-q9",
    classId: "mma-3",
    questionNumber: 9,
    text: "Alloy A has x:y = 5:2 and B has 3:4. Mixed in ratio 4:5. Find % of x in C.\nमिश्र धातु A में X:Y = 5:2 और B में 3:4 है। 4:5 में मिलाया गया। C में X का प्रतिशत ज्ञात करें।",
    options: ["44 4/9 %", "33 4/9 %", "66 4/9 %", "55 5/9 %"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-3-q10",
    classId: "mma-3",
    questionNumber: 10,
    text: "Mixture A has chocolate and milk in ratio 4:3, B in 5:2. Taken in 5:6. Find % of chocolate.\nमिश्रण A में चॉकलेट:दूध = 4:3 तथा B में 5:2 है। 5:6 में मिलाया गया। चॉकलेट का प्रतिशत क्या होगा?",
    options: ["35%", "69%", "31%", "65%"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-3-q11",
    classId: "mma-3",
    questionNumber: 11,
    text: "Three acids A,B,C have 20%,30%,40% concentrations mixed in ratio 3:5:a to get 30%. Find a.\nतीन एसिड A,B,C की सांद्रता 20%,30%,40% है। 3:5:a में मिलाने पर 30% घोल मिलता है। a का मान ज्ञात करें।",
    options: ["3", "1", "2", "4"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-3-q12",
    classId: "mma-3",
    questionNumber: 12,
    text: "Three containers volumes 3:4:5 contain milk-water in ratios (4:1),(3:1),(5:2). Find final ratio.\nतीन कंटेनरों का आयतन 3:4:5 है तथा अनुपात (4:1),(3:1),(5:2) है। अंतिम अनुपात क्या होगा?",
    options: ["4 : 1", "151 : 48", "157 : 53", "5 : 2"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-3-q13",
    classId: "mma-3",
    questionNumber: 13,
    text: "105L mixture has milk:water = 8:7. 14L water removed, then 5L water added. Find new ratio.\n105 लीटर मिश्रण में दूध:पानी = 8:7 है। 14 लीटर पानी निकाला और 5 लीटर पानी मिलाया। नया अनुपात क्या होगा?",
    options: ["19 : 20", "1 : 1", "4 : 5", "2 : 2"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-3-q14",
    classId: "mma-3",
    questionNumber: 14,
    text: "A vessel has 189L milk and 81L water. x L removed, then 17L milk and 22L water added. Difference becomes 95L. Find x.\nएक बर्तन में 189 लीटर दूध और 81 लीटर पानी है। x लीटर निकाला, फिर 17 लीटर दूध और 22 लीटर पानी मिलाया। अंतर 95 लीटर है। x ज्ञात करें।",
    options: ["45", "30", "20", "10"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-3-q15",
    classId: "mma-3",
    questionNumber: 15,
    text: "Kulbhushan had 140L juice with 40% water. He sold 30L and added equal syrup and water. New ratio water:syrup = 3:4. Find water added.\nकुलभूषण के पास 140 लीटर जूस था जिसमें 40% पानी था। 30 लीटर बेचने के बाद बराबर शरबत और पानी मिलाया। नया अनुपात 3:4 है। कितना पानी मिलाया?",
    options: ["24 litres", "26 litres", "28 litres", "22 litres"],
    correctAnswer: 3,
    explanation: "null"
  },
// Math Mixture Class-4 : mma-4

{
    id: "mma-4-q1",
    classId: "mma-4",
    questionNumber: 1,
    text: "The ratio of milk and water in a mixture is 13:7. If 9 litres of mixture is taken out and same quantity of water is added, the ratio becomes 3:2. Find the initial quantity of mixture.\nएक बर्तन में दूध और पानी का अनुपात 13:7 है। 9 लीटर मिश्रण निकालकर उतना ही पानी डाल दिया जाए तो अनुपात 3:2 हो जाता है। प्रारंभिक मात्रा ज्ञात करें।",
    options: ["120", "90", "117", "72"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-4-q2",
    classId: "mma-4",
    questionNumber: 2,
    text: "A bucket contains liquids P and Q in ratio 4:1. When 10 litres of mixture is taken out and 10 litres of Q is added, ratio becomes 2:3. How much P was initially present?\nएक बाल्टी में P और Q का अनुपात 4:1 है। 10 लीटर मिश्रण निकालकर 10 लीटर Q मिलाने पर अनुपात 2:3 हो जाता है। प्रारंभ में P कितना था?",
    options: ["14", "18", "20", "16"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-4-q3",
    classId: "mma-4",
    questionNumber: 3,
    text: "A container has liquids A and B in ratio 7:5. 9 litres of mixture is replaced by B, ratio becomes 7:9. Find initial quantity of A.\nएक कंटेनर में A और B का अनुपात 7:5 है। 9 लीटर मिश्रण को B से बदलने पर अनुपात 7:9 हो जाता है। प्रारंभ में A कितना था?",
    options: ["21", "35", "40", "19"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-4-q4",
    classId: "mma-4",
    questionNumber: 4,
    text: "A vessel has acid and water, water is 64%. 4 litres of solution removed and replaced with water. Final solution has 30% acid. Find initial water quantity.\nएक बर्तन में अम्ल और पानी है जिसमें पानी 64% है। 4 लीटर घोल निकालकर पानी डाला गया। अंत में 30% अम्ल है। प्रारंभिक पानी कितना था?",
    options: ["11.36", "15.36", "8.64", "12.64"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-4-q5",
    classId: "mma-4",
    questionNumber: 5,
    text: "Copper and zinc in 27kg alloy are in ratio 2:1. x kg alloy replaced with zinc, ratio becomes 1:1. Find x.\n27 किलो मिश्र धातु में तांबा और जस्ता का अनुपात 2:1 है। x किलो मिश्र धातु को जस्ता से बदलने पर अनुपात 1:1 हो जाता है। x ज्ञात करें।",
    options: ["5.25", "6.75", "7.5", "6.25"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-4-q6",
    classId: "mma-4",
    questionNumber: 6,
    text: "An 80 litre container has milk and water in ratio 3:2. How much mixture should be replaced with milk so that final ratio becomes 27:13?\n80 लीटर के कंटेनर में दूध और पानी का अनुपात 3:2 है। कितनी मात्रा को दूध से बदलें ताकि अंतिम अनुपात 27:13 हो जाए?",
    options: ["10", "15", "12", "20"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-4-q7",
    classId: "mma-4",
    questionNumber: 7,
    text: "A beaker has 3 parts water and 7 parts medicine. What fraction should be replaced with water so that final ratio becomes 1:1?\nएक बीकर में 3 भाग पानी और 7 भाग औषधि है। कितने भाग को पानी से बदलें कि अनुपात 1:1 हो जाए?",
    options: ["2/7", "1/7", "2/5", "1/5"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-4-q8",
    classId: "mma-4",
    questionNumber: 8,
    text: "Milk and water are in ratio 2:1. What fraction should be replaced with water so that ratio becomes 5:3?\nदूध और पानी का अनुपात 2:1 है। कितने भाग को निकालकर पानी डालें कि अनुपात 5:3 हो जाए?",
    options: ["2/7", "1/7", "2/5", "1/16"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-4-q9",
    classId: "mma-4",
    questionNumber: 9,
    text: "Milk and water in ratio 3:1. 24L mixture removed and 9L water added, ratio becomes 3:4. Find initial quantity.\nदूध और पानी का अनुपात 3:1 है। 24 लीटर मिश्रण निकालकर 9 लीटर पानी डालने पर अनुपात 3:4 हो जाता है। प्रारंभिक मात्रा ज्ञात करें।",
    options: ["27", "21", "36", "30"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-4-q10",
    classId: "mma-4",
    questionNumber: 10,
    text: "In 180L mixture, juice:water = 7:5. If 2x litres mixture removed and x litres water added, ratio becomes 7:9. Find x.\n180 लीटर मिश्रण में रस और पानी का अनुपात 7:5 है। 2x लीटर मिश्रण निकालकर x लीटर पानी डालने पर अनुपात 7:9 हो जाता है। x ज्ञात करें।",
    options: ["60", "45", "36", "63"],
    correctAnswer: 2,
    explanation: "null"
  },
// Math Mixture Class-5 : mma-5

{
    id: "mma-5-q1",
    classId: "mma-5",
    questionNumber: 1,
    text: "A vessel contains 400 litres of milk. 20 litres of milk is taken out and replaced by water. Again 20 litres are taken out and replaced by water. Find the quantity of milk left.\nएक बर्तन में 400 लीटर दूध है। 20 लीटर दूध निकालकर पानी डाला गया और फिर से 20 लीटर निकालकर पानी डाला गया। अब दूध कितना बचा है?",
    options: ["100", "50", "200", "361"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q2",
    classId: "mma-5",
    questionNumber: 2,
    text: "A vessel contains 400 litres of milk. 40 litres of milk taken out and replaced by water. Then 80 litres mixture taken out and replaced by water. Find quantity of milk left.\n400 लीटर दूध में से 40 लीटर निकालकर पानी डाला गया, फिर 80 लीटर मिश्रण निकालकर पानी डाला गया। अब कितना दूध बचा है?",
    options: ["100", "50", "200", "Not possible"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q3",
    classId: "mma-5",
    questionNumber: 3,
    text: "A vessel contains 400 litres of milk. 20 litres taken out and replaced by water. Again 20 litres taken out and replaced by water. Find ratio of milk and water.\n400 लीटर दूध में से 20 लीटर निकालकर पानी डाला गया और फिर 20 लीटर निकालकर पानी डाला गया। अब दूध और पानी का अनुपात क्या होगा?",
    options: ["10 : 7", "5 : 3", "15 : 7", "Not possible"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-5-q4",
    classId: "mma-5",
    questionNumber: 4,
    text: "A vessel contains 400 litres of milk. 20 litres taken out and replaced by water, then 40 litres taken out and replaced by water, then 60 litres taken out and replaced by water. Find ratio.\n400 लीटर दूध में से 20, फिर 40 और फिर 60 लीटर निकालकर पानी डाला गया। अंतिम अनुपात क्या होगा?",
    options: ["2093 : 1971", "2907 : 1093", "200 : 187", "Not possible"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-5-q5",
    classId: "mma-5",
    questionNumber: 5,
    text: "x litres taken out from a vessel of kerosene and replaced by petrol, repeated thrice. Final ratio petrol:kerosene = 1701:27. Volume is 8 litres. Find x.\nकेरोसीन से भरे 8 लीटर के बर्तन से x लीटर निकालकर पेट्रोल डाला गया। यह प्रक्रिया 3 बार की गई। अंत में अनुपात 1701:27 है। x ज्ञात करें।",
    options: ["4", "6", "8", "5"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-5-q6",
    classId: "mma-5",
    questionNumber: 6,
    text: "A vessel full of ethanol. 12L removed and replaced by water three times. Final ratio water:ethanol = 91:125. Find initial ethanol.\nएक बर्तन एथेनॉल से भरा है। 12 लीटर निकालकर पानी डाला गया तीन बार। अंत में अनुपात 91:125 है। प्रारंभिक एथेनॉल कितना था?",
    options: ["91", "28", "125", "72"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q7",
    classId: "mma-5",
    questionNumber: 7,
    text: "From 54L acid vessel, some acid removed and water added twice. Final acid is 24L. Find removed quantity.\n54 लीटर एसिड से कुछ मात्रा निकाली और पानी डाला दो बार। अंत में 24 लीटर एसिड बचा। प्रारंभ में कितना निकाला गया था?",
    options: ["18", "20", "25", "None"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-5-q8",
    classId: "mma-5",
    questionNumber: 8,
    text: "From pure milk container, 35% replaced by water and repeated thrice. Find purity.\nशुद्ध दूध के बर्तन से 35% निकालकर पानी डाला गया तीन बार। अंत में दूध की शुद्धता क्या है?",
    options: ["23 21/80 %", "21 37/80 %", "37 23/80 %", "37 27/80 %"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q9",
    classId: "mma-5",
    questionNumber: 9,
    text: "O2 and N2 mixture has 36% O2. Process repeated twice, now O2 is 16% in 18L. Find removed quantity.\nO2 और N2 के मिश्रण में O2 36% है। दो बार प्रक्रिया के बाद 18 लीटर में O2 16% रह गया। कितनी मात्रा निकाली गई?",
    options: ["12", "4.5", "9", "6"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q10",
    classId: "mma-5",
    questionNumber: 10,
    text: "25% of solution (20% petrol, 50% diesel, 30% kerosene) replaced by kerosene, then 2/3 replaced by petrol. Find % diesel.\n20% पेट्रोल, 50% डीजल और 30% केरोसीन वाले घोल के 25% को केरोसीन से बदला गया, फिर 2/3 को पेट्रोल से बदला गया। नए घोल में डीजल कितना % है?",
    options: ["12.5%", "16.5%", "25%", "None"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-5-q11",
    classId: "mma-5",
    questionNumber: 11,
    text: "A jar is filled with milk. 25% replaced with water 5 times. Milk left = 1458 ml. Find initial milk.\nएक बर्तन में दूध है। 25% निकालकर पानी डाला गया 5 बार। अंत में 1458 ml दूध बचा। प्रारंभिक दूध कितना था?",
    options: ["4.096 L", "6.144 L", "5.12 L", "9.216 L"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-5-q12",
    classId: "mma-5",
    questionNumber: 12,
    text: "40L milk, 4L removed and replaced with water three times. Find final milk.\n40 लीटर दूध में से 4 लीटर निकालकर पानी डाला गया तीन बार। अंत में कितना दूध होगा?",
    options: ["34.23", "30", "29.16", "32"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-5-q13",
    classId: "mma-5",
    questionNumber: 13,
    text: "100L mixture has milk:water = 2:3. 10L replaced with milk three times. Find % milk.\n100 लीटर मिश्रण में दूध:पानी = 2:3 है। 10 लीटर निकालकर दूध डाला गया तीन बार। अंत में दूध % कितना होगा?",
    options: ["56.26%", "58.21%", "51.24%", "54.27%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-5-q14",
    classId: "mma-5",
    questionNumber: 14,
    text: "40L milk container, 4L replaced repeatedly. Minimum times when milk becomes less than water?\n40 लीटर दूध में से बार-बार 4 लीटर निकालकर पानी डाला गया। कितनी बार के बाद दूध पानी से कम हो जाएगा?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 0,
    explanation: "null"
  },
// Math Mixture Class-6 : mma-6
{
    id: "mma-6-q1",
    classId: "mma-6",
    questionNumber: 1,
    text: "The ratio of acid and water in solution A is 5:4 and 7:11 in solution B. 10 litres of A is mixed with 8 litres of B. In 324 ml of the resulting solution, how much water should be added to get a solution containing 33 1/3% acid?\nविलयन A में अम्ल और पानी का अनुपात 5:4 है और विलयन B में 7:11 है। A के 10 लीटर और B के 8 लीटर मिलाए जाते हैं। 324 ml मिश्रण में 33 1/3% अम्ल पाने के लिए कितना पानी मिलाया जाए?",
    options: ["400", "250", "300", "350"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-6-q2",
    classId: "mma-6",
    questionNumber: 2,
    text: "The ratios of alcohol to water in solutions A and B are 3:5 and 9:7 respectively. A and B are mixed in the ratio 5:8. In 520 ml of the resulting solution, how much water should be mixed so that the ratio becomes 3:4?\nविलयन A और B में ऐल्कोहॉल और जल का अनुपात क्रमशः 3:5 और 9:7 है। 5:8 में मिलाने पर 520 ml में कितना पानी मिलाएँ कि अनुपात 3:4 हो जाए?",
    options: ["85", "75", "80", "90"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-6-q3",
    classId: "mma-6",
    questionNumber: 3,
    text: "There are two vessels A and B of capacity 8 litres each. The ratio of acid and water in A is 3:1 and in B is 5:3. 2 litres from B is added to A and then 2 litres from A is added to B. Find final ratio in B.\nदोनों 8 लीटर के पात्रों में A में अनुपात 3:1 और B में 5:3 है। 2 लीटर B से A में और फिर 2 लीटर A से B में मिलाया गया। B का अंतिम अनुपात क्या होगा?",
    options: ["7 : 3", "13 : 7", "9 : 4", "11 : 8"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-6-q4",
    classId: "mma-6",
    questionNumber: 4,
    text: "80 litres of mixture of spirit and water in ratio 7:9 is in container A. 20 litres transferred to B, A is refilled with 20 litres water, then 32 litres again transferred to B. Find ratio of water to spirit in B.\n80 लीटर मिश्रण (7:9) से 20 लीटर B में डाला गया, फिर A में 20 लीटर पानी भरा गया, फिर 32 लीटर B में डाला गया। B में पानी:स्पिरिट का अनुपात क्या होगा?",
    options: ["131 : 77", "41 : 87", "77 : 131", "87 : 41"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mma-6-q5",
    classId: "mma-6",
    questionNumber: 5,
    text: "A cask of capacity 600 litres is filled with wine. First y litres removed and replaced with water. Then 120 litres removed twice and replaced with water. Final ratio wine:water = 12:13. Find y.\n600 लीटर के पीपे से पहले y लीटर निकाले गए, फिर 120 लीटर दो बार निकाले गए और पानी डाला गया। अंत में अनुपात 12:13 है। y ज्ञात करें।",
    options: ["100", "200", "125", "150"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mma-6-q6",
    classId: "mma-6",
    questionNumber: 6,
    text: "A vessel contains x litres of milk and (x−20) litres of water. x/2 litres water and 60 litres milk are added. Final ratio water:milk = 5:7. Find 70% of initial mixture.\nएक पात्र में x लीटर दूध और (x−20) लीटर पानी है। x/2 लीटर पानी और 60 लीटर दूध मिलाने पर अनुपात 5:7 हो जाता है। प्रारंभिक मिश्रण का 70% ज्ञात करें।",
    options: ["114", "98", "108", "100"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-6-q7",
    classId: "mma-6",
    questionNumber: 7,
    text: "Container A has milk and water in ratio 8:5. 39L mixture transferred to B. Then 4L milk and 5L water added to A, ratio becomes 3:2. Find difference between total milk and total water in A and B together.\nकंटेनर A में अनुपात 8:5 है। 39L B में डाला गया। फिर A में 4L दूध और 5L पानी मिलाया गया, अनुपात 3:2 हो गया। कुल दूध और कुल पानी का अंतर ज्ञात करें।",
    options: ["29", "20", "22", "31"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mma-6-q8",
    classId: "mma-6",
    questionNumber: 8,
    text: "Vessels A and B have milk-water in ratios 2:3 and 5:3. 50% from A and 40% from B mixed, resulting mixture has 36L milk and 36L water. Find ratio of water in A to water in B.\nA और B में अनुपात 2:3 और 5:3 है। A से 50% और B से 40% मिलाया गया, परिणाम में 36L दूध और 36L पानी है। A के पानी और B के पानी का अनुपात क्या है?",
    options: ["3 : 5", "8 : 5", "5 : 8", "None"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mma-6-q9",
    classId: "mma-6",
    questionNumber: 9,
    text: "A mixture has alcohol and water in ratio 3:5. 20% taken out gives container A with 9L alcohol. Then 20L alcohol and 16L water added to original mixture. Find final ratio.\nमिश्रण में अल्कोहल और पानी 3:5 है। 20% निकालने पर A में 9L अल्कोहल है। मूल मिश्रण में 20L अल्कोहल और 16L पानी मिलाने पर नया अनुपात क्या होगा?",
    options: ["2 : 1", "4 : 3", "9 : 5", "5 : 7"],
    correctAnswer: 3,
    explanation: "null"
  },
// Math Alligation Class-1 : mma-8
// Math Alligation Class-2 : mma-9
// Math Alligation Class-3 : mma-10
// Math Mixture AMS Class-1 : mma-11
// Math Compound intrest Class-1 : mcs-1
// Math Compound intrest Class-2 : mcs-2
   // Math Compound intrest Class-3 : mcs-3
    // Math Compound intrest Class-4 : mcs-4
     // Math Compound intrest Class-5 : mcs-5
      // Math Compound intrest Class-6 : mcs-6
       // Math Compound intrest Class-7 : mcs-7

       // Math Simple intrest Class-1 : mcs-8

       {
    id: "mcs-8-q1",
    classId: "mcs-8",
    questionNumber: 1,
    text: "Find the ratio of simple interest earned by a certain sum of money at the same interest rate for 5 years and 8 years\nएक निश्चित धनराशि द्वारा 5 वर्ष और 8 के लिए समान ब्याज दर पर अर्जित साधारण ब्याज का अनुपात ज्ञात कीजिए\n(Delhi Police 2022)",
    options: ["4 : 5", "6 : 7", "3 : 4", "5 : 8"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q2",
    classId: "mcs-8",
    questionNumber: 2,
    text: "A bank charges simple interest on ₹K for n² years at the rate of r^{1/2}. Another bank charges simple interest on ₹L for n³ years at the rate of r^{3/2} and pays the same interest. What is the ratio between K and L?\nएक बैंक ₹K पर n² वर्षों के लिए r^{1/2} की दर से साधारण ब्याज लगाता है। एक अन्य बैंक ₹L पर n³ वर्षों के लिए r^{3/2} की दर से साधारण ब्याज लगाता है और समान ब्याज देता है। K और L के बीच का अनुपात क्या है?\n[SSC CHSL T-1 2024]",
    options: ["1/r : 1/n", "rn : 1", "r² : n²", "1/r² : 1/n²"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-8-q3",
    classId: "mcs-8",
    questionNumber: 3,
    text: "What will be the simple interest on a sum of Rs.12000 at the rate of 15 percent per annum for three years?\nएक रु.12000 की राशि पर 15 प्रतिशत प्रति वर्ष की दर से तीन वर्षों के लिए साधारण ब्याज क्या होगा?\n(SSC CGL MAINS 2022)",
    options: ["Rs.4,500", "Rs.7,200", "Rs.6,000", "Rs.5,400"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q4",
    classId: "mcs-8",
    questionNumber: 4,
    text: "How much simple interest will be earned on ₹6,700 in 13 months at 12% per annum interest rate?\n12% प्रति वर्ष ब्याज दर से 13 महीनों में ₹6,700 पर कितना साधारण ब्याज अर्जित होगा?\nSSC CGL PRE 2024",
    options: ["₹813", "₹871", "₹889", "₹821"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-8-q5",
    classId: "mcs-8",
    questionNumber: 5,
    text: "What is the simple interest on a sum of Rs 99,000 at 12 ½% per annum for a period of 9 months?\nरु. 99,000 की राशि पर 12 ½% वार्षिक ब्याज दर से 9 महीने का साधारण ब्याज कितना होगा?\nSSC CHSL 13/04/2021 (Shift- 1)",
    options: ["Rs 8,281.25", "Rs 9,282.25", "Rs 7,281.25", "Rs 9,281.25"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q6",
    classId: "mcs-8",
    questionNumber: 6,
    text: "The interest earned on a sum of Rs 21,000 at simple interest rate in 3 years is ₹ 6,400. Find the annual interest rate.\n21,000 की राशि पर साधारण ब्याज की दर से 3 वर्षों में अर्जित ब्याज ₹6,400 है। वार्षिक ब्याज दर ज्ञात करें।\n(SSC CGL T-1 2023)",
    options: ["10 10/63%", "10 13/63%", "10 5/63%", "10 2/63%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-8-q7",
    classId: "mcs-8",
    questionNumber: 7,
    text: "At what rate of interest will a sum of Rs.4,500 amount to Rs.6,525 at simple interest for 5 years?\n4500 रुपए की धनराशि वार्षिक साधारण ब्याज की कितनी दर पर 5 वर्षों में 6,525 रुपए हो जाएगी ?\n[CGL Mains 2019]",
    options: ["8%", "12%", "9%", "10%"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-8-q8",
    classId: "mcs-8",
    questionNumber: 8,
    text: "How much principal will become ₹ 21,420 in 2 years at 9.5% per annum simple interest?\n9.5% वार्षिक साधारण ब्याज की दर से 2 वर्षों में कितना मूलधन ₹21,420 हो जाएगा?\nSSC CGL PRE 2024",
    options: ["₹18,000", "₹16,000", "₹11,273", "₹12,000"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-8-q9",
    classId: "mcs-8",
    questionNumber: 9,
    text: "In how much time will a sum of Rs 10200 become Rs 19125 at simple interest at the rate of 12.5 percent per annum?\n10200 रुपये की एक राशि 12.5 प्रतिशत प्रतिवर्ष की दर से कितने समय में साधारण ब्याज पर 19125 रुपये हो जायेगी?\n(SSC CGL T-1 2022)",
    options: ["7 years", "6 years", "5 years", "8 years"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-8-q10",
    classId: "mcs-8",
    questionNumber: 10,
    text: "Sum Rs.20000 and Rs.40000 are given on simple interest at the rate of 10 percent and 15 percent per annum respectively for three years. What will be the total simple interest?\nरूपये 20000 तथा रूपये 40000 की राशियों को तीन वर्षों के लिए क्रमशः 10 प्रतिशत तथा 15 प्रतिशत प्रतिवर्ष की साधारण ब्याज दर पर दिया गया है। कुल साधारण ब्याज कितना होगा?\nSSC CGL MAINS ( 08/08/2022)",
    options: ["Rs.36000", "Rs.32000", "Rs.28000", "Rs.24000"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q11",
    classId: "mcs-8",
    questionNumber: 11,
    text: "The simple interest on an invested amount in 15 years becomes 3/4 of it. If the amount invested If it is ₹20,000 then find the interest rate?\n15 वर्षों में किसी निवेशित धनराशि पर साधारण ब्याज, उसका 3/4 हो जाता है। यदि निवेश की गई राशि ₹20,000 है तो ब्याज दर ज्ञात कीजिये?\n(Delhi Police 2023)",
    options: ["6%", "4%", "7%", "5%"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q12",
    classId: "mcs-8",
    questionNumber: 12,
    text: "If the simple interest for 8 years is equal to 40% of the principal amount, then after how many years will it become equal to the principal amount?\nयदि 8 वर्ष का साधारण ब्याज मूलधन के 40% के बराबर है, तो कितने वर्षों के बाद यह मूलधन के बराबर हो जाएगा?\n(Delhi Police 2022)",
    options: ["15", "20", "25", "18"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-8-q13",
    classId: "mcs-8",
    questionNumber: 13,
    text: "The simple interest on a sum of money for 8 years is three-fifth of that sum. What will be the interest rate per year for this?\nकिसी राशि पर 8 वर्षों का साधारण ब्याज उस राशि का तीन-पाँचवाँ भाग है। इसके लिए प्रति वर्ष ब्याज दर कितनी होगी?\nSSC CGL PRE 2024",
    options: ["9%", "7 ½%", "6%", "5 ½%"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-8-q14",
    classId: "mcs-8",
    questionNumber: 14,
    text: "On a deposit of ₹1,50,000, R gets ₹2,000 as interest at simple interest rate in one year. How much amount (in ₹) should he deposit to get interest of ₹4,500?\n₹1,50,000 की जमा राशि पर, R को एक वर्ष में साधारण ब्याज दर पर ब्याज के रूप में ₹2,000 मिलते हैं। तो बताइए कि ₹4,500 का ब्याज प्राप्त करने के लिए उसे कितनी राशि (₹ में) जमा करनी चाहिए?\nSSC Phase XII 2024",
    options: ["3,77,500", "4,25,500", "3,37,500", "2,77,500"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-8-q15",
    classId: "mcs-8",
    questionNumber: 15,
    text: "Rs. P invest at 5% per annum of simple interest. After T years an interest of Rs. 82 is earned and the amount becomes Rs. 902. What is the value of T?\nरुपये P को साधारण ब्याज के 5% प्रति वर्ष पर निवेश किया जाता है। T वर्ष के बाद 82 रुपये का ब्याज अर्जित किया जाता है और राशि 902 रुपये हो जाती है। T का मान क्या है?\n(SSC CHSL T-1 2022)",
    options: ["3 years", "1 year", "4 years", "2 years"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-8-q16",
    classId: "mcs-8",
    questionNumber: 16,
    text: "If the rate of simple interest in consecutive years is 4% and 5% respectively, then what will be the total amount payable on ₹25,000 in 2 years?\nयदि क्रमागत वर्षों में साधारण ब्याज की दर क्रमशः 4% और 5% है, तो 2 वर्षों में ₹25,000 पर कुल देय धनराशि क्या होगी?\n(SSC CHSL T-1 2023)",
    options: ["₹28,250", "₹27,250", "₹26,250", "₹26,000"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-8-q17",
    classId: "mcs-8",
    questionNumber: 17,
    text: "If a sum of ₹ 80 in a bank account paying simple annual interest becomes ₹ 96 in 2 years, then a sum of ₹ 62,000 in the same account will become _____ after 5 years.\nयदि साधारण वार्षिक ब्याज देने वाले किसी बैंक खाते में ₹80 की राशि 2 वर्षों में ₹96 हो जाती है, तो उसी खाते में ₹62,000 की राशि 5 वर्ष बाद _____ हो जाएगी।\n(SSC CPO T-1 2023)",
    options: ["₹84,600", "₹82,400", "₹93,000", "₹88,200"],
    correctAnswer: 2,
    explanation: "null"
  },
       // Math Simple intrest Class-2 : mcs-9

       {
    id: "mcs-9-q1",
    classId: "mcs-9",
    questionNumber: 1,
    text: "The difference between the simple interest on a fixed amount for 7 years and on the same amount for 12 years is Rs 2,500. If the rate of interest is 10% p.a., then the amount is:\nएक निश्चित राशि 7 वर्षों के लिए और उसी राशि पर 12 वर्षों के लिए साधारण ब्याजों का अंतर रु. 2,500 है। यदि ब्याज की दर 10% वार्षिक है, तो उस राशि की गणना कीजिए?\nSSC CHSL 11/08/2021 (Shift - 1)",
    options: ["Rs 6,000", "Rs 4,500", "Rs 5,500", "Rs 5,000"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q2",
    classId: "mcs-9",
    questionNumber: 2,
    text: "A sum of 10,000 is borrowed by Rajesh at 15% simple interest for 2 years. But Rajesh could not repay it on time and asked for two more years. So, the lender added the interest amount of that period as principal for the next two years at the same interest rate. Find the total amount paid by Rajesh at the end of 4 years.\nराजेश द्वारा ₹10,000 की राशि 2 वर्षों के लिए 15% साधारण व्याज की दर पर ऋण के रूप में ली जाती है। लेकिन राजेश इसे तय समय पर नहीं चुका सका और उसने दो और वर्ष का समय मांगा। इसलिए, ऋणदाता ने उस अवधि की व्याज राशि को उसी व्याज दर पर अगले दो वर्षों के लिए मूलधन के रूप में शामिल किया। 4 वर्ष के अंत में राजेश द्वारा भुगतान की गई कुल राशि ज्ञात करें।\nSSC CGL PRE 2024",
    options: ["18,590", "15,630", "17,650", "16,900"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q3",
    classId: "mcs-9",
    questionNumber: 3,
    text: "A sum was put at simple interest at a certain rate for 4 years. Had it been put at 2% higher rate, it would have fetched Rs. 56 more. Find the sum.\nएक धनराशि को 4 वर्षों के लिए एक निश्चित दर पर साधारण ब्याज पर रखा गया। यदि इसे 2% अधिक दर पर रखा जाता, तो यह 56 रुपये अधिक प्राप्त करती। धनराशि ज्ञात कीजिए।",
    options: ["9000", "4270", "8200", "700"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q4",
    classId: "mcs-9",
    questionNumber: 4,
    text: "The amount Rs. 2300 becomes Rs. 2659 in 3 years at simple interest. If the interest rate is decreased by 1%, then what is the new interest?\n2300 रुपये की राशि साधारण ब्याज पर 3 वर्ष में 2659 रुपये हो जाती है। यदि ब्याज दर में 1% की कमी की जाती है, तो नया ब्याज क्या होगा?",
    options: ["259", "279", "269", "290"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q5",
    classId: "mcs-9",
    questionNumber: 5,
    text: "The simple interest earned on a sum is 1/25 of the sum, where the number of years of investment is equal to the rate percentage. For how many years was the sum invested?\nकिसी धनराशि पर अर्जित साधारण ब्याज उस राशि का 1/25 है, जहाँ निवेश के वर्षों की संख्या प्रतिशत दर के बराबर हैं। धनराशि का निवेश कितने वर्षों के लिए किया गया?\nSSC MTS 12/10/2021",
    options: ["5", "2", "4", "3"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-9-q6",
    classId: "mcs-9",
    questionNumber: 6,
    text: "The simple interest on a sum of money is 9/45 of that amount. If the number of years is numerically 5 times the annual rate percentage, then find the annual interest rate percentage.\nकिसी धनराशि पर साधारण ब्याज उस धनराशि का 9/45 है। यदि वर्षों की संख्या संख्यात्मक रूप से वार्षिक दर प्रतिशत की 5 गुनी है, तो वार्षिक ब्याज दर प्रतिशत ज्ञात कीजिए।\nSSC Phase XII 2024",
    options: ["3%", "2%", "5%", "7%"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-9-q7",
    classId: "mcs-9",
    questionNumber: 7,
    text: "The simple interest on a certain sum is one-eighth of the sum when the number of years is equal to half of the rate percentage per annum. Find the simple interest (in Rs.) on Rs.15,000 at the same rate of simple interest for 8 years.\nजब वर्षों की संख्या, प्रतिशत प्रति वर्ष ब्याज दर के आधे के बराबर होती है, तो किसी राशि पर साधारण ब्याज, राशि का 1/8 वां हिस्सा होता है। 15,000 रु. के लिए, उसी ब्याज दर पर 8 वर्षों के साधारण ब्याज (रु. में) की गणना कीजिए।\nSSC CGL 12.04.2022",
    options: ["5800", "5000", "6000", "5250"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-9-q8",
    classId: "mcs-9",
    questionNumber: 8,
    text: "The simple interest on a certain sum is one-fifth of the sum and the rate of interest per annum is 3.2 times the number of years. If the rate of interest is increased by 4%, what will be the simple interest (in Rs.) on 7,500 for 4 years?\nएक निश्चित राशि पर साधारण ब्याज राशि का पांचवां हिस्सा है और प्रतिवर्ष ब्याज दर प्रतिशत वर्षों की संख्या का 3.2 गुना है। यदि ब्याज की दर में 4% की वृद्धि होती है, तो ₹7,500 पर 4 वर्षों के लिए साधारण ब्याज (₹ में) कितना होगा?\nSSC Phase XII 2024",
    options: ["2,500", "5,100", "3,000", "3,600"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q9",
    classId: "mcs-9",
    questionNumber: 9,
    text: "Simple interest on a certain sum is one-fourth of the sum and the interest rate percentage per annum is 4 times the number of years. If the rate of interest increases by 2%, then what will be the simple interest (in Rs.) on Rs. 5000 for 3 years?\nकिसी राशि पर साधारण ब्याज, राशि का एक चौथाई है और प्रतिशत प्रति वर्ष ब्याज दर, वर्षों की संख्या की 4 गुनी है। यदि ब्याज की दर में 2% की वृद्धि होती है, तो Rs.5,000 पर 3 वर्षों के लिए साधारण ब्याज (Rs. में) कितना होगा?\nSSC CGL 13.04.2022",
    options: ["300", "1500", "2000", "1800"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q10",
    classId: "mcs-9",
    questionNumber: 10,
    text: "A certain sum of money becomes 7 times of itself in 25 years. Find the rate of interest.\nएक निश्चित धनराशि 25 वर्षों में स्वयं की 7 गुना हो जाती है। ब्याज दर ज्ञात कीजिए।",
    options: ["24%", "25%", "12%", "6%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-9-q11",
    classId: "mcs-9",
    questionNumber: 11,
    text: "A sum invested at simple interest becomes 17/10 times itself in 2 years and 6 months. What is the annual rate of interest?\nएक राशि साधारण ब्याज पर निवेश करने पर 2 वर्ष तथा 6 महीने में स्वयं की 17/10 गुना हो जाती है। ब्याज की वार्षिक दर क्या है?\nSSC CGL T-1 2022",
    options: ["22%", "34%", "16%", "28%"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-9-q12",
    classId: "mcs-9",
    questionNumber: 12,
    text: "In how much time will the simple interest on a certain sum of money be 6/5 times of the sum at 20% per annum?\nकिसी निश्चित धनराशि के लिए 20% वार्षिक साधारण ब्याज दर पर कितने समय में ब्याज उस धनराशि का 6/5 गुना हो जाएगा?\nCGL Mains 2019",
    options: ["5 years", "6 years", "8 years", "7 years"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-9-q13",
    classId: "mcs-9",
    questionNumber: 13,
    text: "In what time does a sum of money becomes 4.2 times of itself at simple interest rate of 16% per annum.\n16% प्रतिवर्ष की साधारण ब्याज दर से कितने समय में एक धनराशि स्वयं की 4.2 गुना हो जाएगी?",
    options: ["20 y", "40 y", "10 y", "None of these"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-9-q14",
    classId: "mcs-9",
    questionNumber: 14,
    text: "A sum of money doubles itself in 4 years at simple interest. In how much time will it become 7 times at the same interest rate?\nकोई धनराशि साधारण ब्याज पर 4 वर्ष में स्वयं की दोगुनी हो जाती है। उसी ब्याज दर पर वह कितने समय में 7 गुना हो जाएगी?\nSSC CHSL T-2 2022",
    options: ["23 years", "24 years", "25 years", "21 years"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-9-q15",
    classId: "mcs-9",
    questionNumber: 15,
    text: "A certain sum of money when invested at a certain rate of simple interest becomes seven times of itself in 14 years. How much time (in years, rounded off to 2 decimal places) will it take to become 18 times of itself at the same rate of interest?\nसाधारण ब्याज की एक निश्चित दर पर निवेश करने पर एक निश्चित धनराशि 14 वर्षों में स्वयं की सात गुना हो जाती है। इसे उसी ब्याज दर पर स्वयं की 18 गुना होने में कितना समय (वर्षों में, 2 दशमलव स्थानों तक पूर्णांकित) लगेगा?\nSSC CGL PRE 2024",
    options: ["39.67", "35.5", "42.78", "27.33"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-9-q16",
    classId: "mcs-9",
    questionNumber: 16,
    text: "A certain sum becomes three times of itself in 26 years at simple interest. In how many years will it become five times its own size?\n26 वर्षों में एक निश्चित राशि साधारण ब्याज पर स्वयं की तीन गुना हो जाती है। कितने वर्षों में वह स्वयं की पाँच गुना हो जायेगी?\nSSC CGL T-1 2022",
    options: ["64 years", "52 years", "60 years", "56 years"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-9-q17",
    classId: "mcs-9",
    questionNumber: 17,
    text: "A sum of money becomes five times its original value in 15 years when invested at a certain simple interest rate. If the sum of money is invested for double the time at the same interest rate, what will be the final amount?\nएक निश्चित साधारण ब्याज दर पर निवेश करने पर 15 वर्षों में एक धनराशि अपने मूल मूल्य से पाँच गुना हो जाती है। यदि धनराशि को उसी ब्याज दर पर दोगुने समय के लिए निवेश किया जाए, तो अंतिम राशि क्या होगी?\nSSC CHSL T-1 2024",
    options: ["9 times", "8 times", "6 times", "7 times"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-9-q18",
    classId: "mcs-9",
    questionNumber: 18,
    text: "In a certain period of time, a sum becomes 2 times itself at the rate of 5% simple interest per annum. If the same amount becomes 5 times itself in the same period, what will be the interest rate?\nएक निश्चित समयावधि में, एक राशि 5% वार्षिक साधारण ब्याज की दर से स्वयं की 2 गुनी हो जाती है। यदि उतनी ही राशि उतनी ही अवधि में स्वयं की 5 गुनी हो जाती है, तो ब्याज दर क्या होगी?\nSSC CGL T-1 2022",
    options: ["20%", "16%", "10%", "18%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-9-q19",
    classId: "mcs-9",
    questionNumber: 19,
    text: "A sum of money become three times of itself at the rate of 10% per annum on simple interest. Which of the following statement is/are correct?\n(i) It will become 5 times of itself at the rate of 20% per annum on simple interest in the same time period.\n(ii) It will become 7 times of itself at the rate of 30% per annum on simple interest in the same time period.\nकोई धनराशि साधारण ब्याज पर 10% वार्षिक की दर से स्वयं की तीन गुनी हो जाती है। निम्नलिखित में से कौन सा/से कथन सही है/हैं?\n(i) समान समय अवधि में साधारण ब्याज पर 20% प्रति वर्ष की दर से यह स्वयं का 5 गुना हो जाएगा।\n(ii) यह उसी समय अवधि में साधारण ब्याज पर 30% प्रति वर्ष की दर से स्वयं का 7 गुना हो जाएगा।\nSSC CHSL T-1 2022",
    options: ["only i", "Both i and ii", "Neither i nor ii", "only ii"],
    correctAnswer: 1,
    explanation: "null"
  },
    // Math Simple intrest Class-3 : mcs-10

    {
    id: "mcs-10-q1",
    classId: "mcs-10",
    questionNumber: 1,
    text: "If a sum of 3,260 at simple interest becomes 5,420 in 6 years, then how much will this sum amount to in 4 years at the same rate of interest?\nयदि साधारण ब्याज पर ₹3,260 की धनराशि 6 वर्ष में ₹5,420 हो जाती है, तो समान ब्याज दर पर 4 वर्ष में यह धनराशि कितनी हो जाएगी?\nSSC CHSL 2024",
    options: ["3,700", "4,500", "4,700", "3,900"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q2",
    classId: "mcs-10",
    questionNumber: 2,
    text: "Rs. 6000 amounts to Rs. 6900 in 1 year at simple interest. What will be Rs. 8000 in 3 years?\n6000 रु. 1 साल में 6900 रु. हो जाते है। तो 8000 रु. 3 साल मे कितने हो जायेगें?",
    options: ["11600", "7,200", "12600", "NOT"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-10-q3",
    classId: "mcs-10",
    questionNumber: 3,
    text: "A sum of 6,400 amounts to 8,320 in 3 years at simple interest. What will be the amount of 7,200 in 5 years at the same rate?\nसाधारण ब्याज पर ₹6,400 की राशि 3 वर्षों में ₹8,320 हो जाती है। उसी दर पर 5 वर्ष में ₹7,200 की राशि कितनी हो जाएगी?\n(SSC CGL T-1 2023)",
    options: ["Rs.10,800", "Rs.10,400", "Rs.10,200", "Rs.10,600"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-10-q4",
    classId: "mcs-10",
    questionNumber: 4,
    text: "A sum of Rs 8,400 amounts to Rs 11,046 at 8.75% p.a. simple interest in a certain time. What will be the simple interest (in Rs) on a sum of Rs 10,800 at the same rate for the same time?\n8,400 रुपये की एक धनराशि 8.75% वार्षिक साधारण ब्याज दर पर निश्चित अविध में रूपये 11,046 हो जाती है। समान ब्याज दर और समान अवधि के लिए रूपये 10,800 की राशि पर साधारण ब्याज (रूपये में) कितना होगा?\nSSC CGL MAINS 03 Feb 2022",
    options: ["3402", "3204", "3024", "3420"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q5",
    classId: "mcs-10",
    questionNumber: 5,
    text: "A sum of 8,400 amounts to 11,046 at 8.75% p.a. simple interest in certain time. What is the simple interest on the sum of 9,600 at the same rate for the same time?\n8.75% प्रति वर्ष के साधारण ब्जाज पर ₹8,400 की राशि एक निश्चित समय में ₹11,046 हो जाती है। इसी ब्जाज दर और उसी समय में ₹9,600 की राशि पर साधारण ब्याज क्या है?\n(SSC CGL T-2 2016)",
    options: ["2,686", "3,012", "2,990", "3,024"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-10-q6",
    classId: "mcs-10",
    questionNumber: 6,
    text: "A sum of money at simple interest amounts to 6,000 in 4 years and to 6,750 in 7 years at the same rate percent p.a. of interest. The sum (in Rs) is:\nएक निश्चित धनराशि समान वार्षिक साधारण ब्याज दर पर 4 वर्ष में ₹6,000 और 7 वर्ष में ₹6,750 हो जाती है। वह धनराशि (रुपये में) कितना है?\n(SSC CGL T-2 2020)",
    options: ["5,100", "4,800", "4,000", "5,000"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-10-q7",
    classId: "mcs-10",
    questionNumber: 7,
    text: "A certain sum lent at simple interest amounts to 13,000 in 3 years and 15,000 in 5 years. Find the annual rate percentage.\nसाधारण ब्याज पर उधार दी गई एक निश्चित राशि 3 वर्षों में ₹13,000 और 5 वर्षों में ₹15,000 हो जाती है। वार्षिक दर प्रतिशत ज्ञात कीजिए।\n(Selection Post 2023)",
    options: ["10%", "14%", "15%", "12%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q8",
    classId: "mcs-10",
    questionNumber: 8,
    text: "A sum of x amounts to 9,246 in 4 years and to 11,298.75 in 7.5 years, at y% p.a. simple interest. The values of x and y are, respectively:\nx की राशि y% वार्षिक साधारण ब्याज की दर पर 4 वर्ष में ₹9,246 और 7.5 वर्ष में ₹11,298.75 हो जाती है। क्रमशः x और y का मान ज्ञात करें।\n(SSC CHSL 2020)",
    options: ["6900 and 8.5", "6800 and 8.5", "6500 and 8", "7200 and 7.5"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q9",
    classId: "mcs-10",
    questionNumber: 9,
    text: "On simple interest, a certain sum becomes 59,200 in 6 years and 72,000 in 10 years. If the rate of interest had been 2% more, then in how many years would the sum have become 76,000?\nसाधारण ब्याज पर कोई राशि 6 वर्षों में ₹59,200 और 10 वर्षों में ₹72,000 हो जाती है। यदि ब्याज की दर 2% अधिक होती, तो कितने वर्षों में यह राशि ₹76,000 हो जाती ?\n(SSC CGL T-1 2021)",
    options: ["10", "9", "8", "7"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q10",
    classId: "mcs-10",
    questionNumber: 10,
    text: "A certain sum on simple interest becomes Rs. 49,600 in 3 years and Rs. 56,000 in 5 years. If the rate of interest had been 2% more, then in how many years would the sum have doubled?\nकोई राशि साधारण ब्याज पर 3 वर्षों में Rs. 49,600 और 5 वर्षों में Rs.56,000 हो जाती है। यदि ब्याज की दर 2% अधिक होती, तो राशि कितने वर्षों में दोगुनी हो जाती?\nSSC CGL 12.04.2022 (3rd Shift)",
    options: ["10", "8", "12", "20"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q11",
    classId: "mcs-10",
    questionNumber: 11,
    text: "A certain sum amounts of Rs 81840 in 3 years and to Rs 92400 in 5 years at x% p.a. under simple interest. If the rate of interest is becomes (x+2)%, then in how many years will the same sum double itself?\nx% वार्षिक साधारण ब्याज की दर पर, कोई निश्चित राशि 3 वर्ष में 81840 रुपये और 5 वर्ष में 92400 रुपये हो जाती है। यदि ब्याज दर (x + 2)% हो जाती है, तो कितने वर्ष में वही राशि स्वयं की दोगुनी हो जाएगी?\nSSC CGL 20/08/2021 ( Shift 01 )",
    options: ["12", "8", "10", "20"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q12",
    classId: "mcs-10",
    questionNumber: 12,
    text: "If a sum of ₹10,000 is invested at 15.5% per annum simple interest, in how much time will the sum become ₹22,400?\nयदि ₹10,000 की राशि को 15.5% वार्षिक दर से साधारण ब्याज पर निवेश किया जाता है, तो कितने समय में यह राशि ₹22,400 हो जाएगी?\nSSC CGL PRE",
    options: ["8", "9", "7", "6"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q13",
    classId: "mcs-10",
    questionNumber: 13,
    text: "A certain sum of money is lent for 3 years at the rate of x% per annum simple interest. If this amount was lent for 'y' more years at the rate of 3x% annual simple interest, the simple interest received would be seven times the earlier interest. What is the value of y?\nएक निश्चित धनराशि x% वार्षिक साधारण ब्याज की दर पर 3 वर्ष के लिए उधार दी जाती है। यदि इस धनराशि को 3x% वार्षिक साधारण ब्याज की दर पर 'y' अधिक वर्षों के लिए उधार दिया जाता, तो इससे प्राप्त साधारण ब्याज पहले के ब्याज का सात गुना होता । y क मान क्या है?\n(SSC CGL T-1 2023)",
    options: ["6", "3", "5", "4"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q14",
    classId: "mcs-10",
    questionNumber: 14,
    text: "At a certain rate of simple interest, the ratio of principal amount and compound amount over a period of time is 2 : 3. After 3 years the ratio changes to 4 : 9. Then find the annual rate of simple interest.\nएक निश्चित साधारण ब्याज की दर एक समयावधि में मूलधन राशि और मिश्रधन राशि का अनुपात 2 : 3 का है। 3 वर्ष के बाद अनुपात बदलकर 4 : 9 हो जाता है। तो साधारण ब्याज की वार्षिक दर ज्ञात करे|\n",
    options: ["25%", "20%", "24%", "15%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q15",
    classId: "mcs-10",
    questionNumber: 15,
    text: "The ratio of the principal amount and the compound amount in a certain period of time at a simple interest rate is 3 : 5. After two years the ratio changes to 5 : 9. Then find the rate of annual simple interest.\nएक साधारण ब्याज की दर से एक निश्चित समय अवधि में किसी मूलधन और मिश्रधन राशि के अनुपात 3 : 5 है| दो वर्ष के बाद अनुपात बदलकर 5 : 9 हो जाता है| तो वार्षिक साधारण ब्याज की दर ज्ञात करे |",
    options: ["6 2/3%", "3 1/3%", "3%", "12%"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q16",
    classId: "mcs-10",
    questionNumber: 16,
    text: "A person invested a sum of ₹6,500 at x % per annum at simple interest and sum of 7,500 at (x - 2)% per annum at simple interest. If the total interest earned on both the investments for 3 years is 3,750, then the rate of interest on the first investment is:\nएक व्यक्ति ने ₹6,500 की धनराशि को x% वार्षिक साधारण ब्याज दर पर और ₹7,500 की धनराशि को (x - 2)% वार्षिक साधारण ब्याज दर पर निवेश किया। यदि दोनों निवेशों पर 3 वर्षों के लिए अर्जित कुल ब्याज ₹ 3,750 है, तो पहले निवेश पर ब्याज की दर कितनी है?\n(SSC MTS T-1 2020)",
    options: ["14%", "10%", "8%", "12%"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-10-q17",
    classId: "mcs-10",
    questionNumber: 17,
    text: "A certain sum amounts to Rs15,748 in 3 years at r% p.a. simple interest. The same sum amounts to Rs 16,510 at (r + 2) % p.a. simple interest in the same time. What is the value of certain sum?\nएक निश्चित धनराशि r% वार्षिक साधारण ब्याज पर 3 वर्षों में रूपये 15,748 हो जाती है। वही धनराशि (r + 2)% वार्षिक साधारण ब्याज पर उतने ही समय में 16,510 हो जाती है। निश्चित धनराशि का मान ज्ञात करें।\nSSC MTS 2020 (Shift - II) 27/10/2021",
    options: ["12700", "9500", "12800", "8700"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-10-q18",
    classId: "mcs-10",
    questionNumber: 18,
    text: "A certain sum is lent at simple interest at 4% per annum for 3 years, 8% per annum for the next 4 years and 12% per annum for the period beyond 7 years. If the simple interest received for a period of 11 years is ₹ 27,600, calculate the amount (in ₹).\nएक निश्चित राशि, साधारण ब्याज पर 3 वर्ष के लिए 4% वार्षिक, अगले 4 वर्ष के लिए 8% वार्षिक और 7 वर्ष के बाद की अवधि के लिए 12% वार्षिक पर उधार दी जाती है। यदि 11 वर्ष की अवधि के लिए प्राप्त साधारण ब्याज ₹27,600 है, तो राशि की गणना करें (₹ में) ।\n(Delhi Police 2023)",
    options: ["25,000", "30,000", "32,000", "28,000"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-10-q19",
    classId: "mcs-10",
    questionNumber: 19,
    text: "Ravi borrowed some money at the rate of 5% per annum for the first three years, at the rate of 8% per annum for the next two years and at the rate of 10% per annum for the period beyond 5 years. If he paid total simple interest of ₹ 12,750 at the end of 7 years, how much money did he borrow?\nरवि ने पहले तीन वर्षों के लिए 5% वार्षिक की दर से, अगले दो वर्षों के लिए 8% वार्षिक की दर से और 5 वर्षों से आगे की अवधि के लिए 10% वार्षिक की दर से कुछ धनराशि उधार ली। यदि उसने 7 वर्ष के अंत में कुल साधारण ब्याज ₹12,750 का भुगतान किया, तो उसने कितनी धनराशि उधार ली?\n(SSC CHSL T-1 2023)",
    options: ["₹24,000", "₹27,000", "₹25,000", "₹26,000"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q20",
    classId: "mcs-10",
    questionNumber: 20,
    text: "Out of certain sum, 1/3 is at 3% interest, 1/6 at 6% and rest at 8%. If the simple interest for 2 years from all these investments amounts to Rs.600. Find the original sum.\nनिश्चित राशि में से, 1/3 3% ब्याज पर, 1/6 6% पर और शेष 8% पर है। यदि इन सभी निवेशों से 2 वर्षों के लिए साधारण ब्याज 600 रु है। मूल राशि ज्ञात कीजिए।",
    options: ["Rs.4000", "Rs.15000", "Rs.5000", "Rs.4975"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q21",
    classId: "mcs-10",
    questionNumber: 21,
    text: "A man invested 1/3 of his capital at 12 1/2%, 1/4 at 14 2/7% and the remainder at 16 2/3%. If his annual income is Rs.18.90, find the capital?\nएक आदमी ने अपनी पूंजी का 1/3 हिस्सा 12 1/2% पर, 1/4 हिस्सा 14 2/7% पर और शेष हिस्सा 16 2/3% पर निवेश किया। यदि उसकी वार्षिक आय रु 18.90 है, तो पूंजी ज्ञात करे?",
    options: ["Rs.15760", "Rs.10000", "Rs.11760", "Rs.20000"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-10-q22",
    classId: "mcs-10",
    questionNumber: 22,
    text: "A person deposited Rs. 4000 for 2 years, Rs. 5500 for 4 years and Rs. 1200 for 6 years. He received the total simple interest of Rs.1860. Find the rate of interest per annum ?\nएक व्यक्ति ने 2 वर्ष के लिए रु 4000, 4 वर्ष के लिए रु 5500 और 6 वर्ष के लिए रु 1200 जमा किए। उन्हें कुल रु 1860 का साधारण ब्याज मिला। प्रति वर्ष ब्याज दर ज्ञात कीजिये ?",
    options: ["15%", "10%", "5%", "20%"],
    correctAnswer: 2,
    explanation: "null"
  },
     // Math Simple intrest Class-4 : mcs-11
     {
    id: "mcs-11-q1",
    classId: "mcs-11",
    questionNumber: 1,
    text: "A person deposited Rs. 4000 for 2 years, Rs. 5500 for 4 years and Rs. 1200 for 6 years. He received the total simple interest of Rs.1860. Find the rate of interest per annum ?\nएक व्यक्ति ने 2 वर्ष के लिए रु 4000, 4 वर्ष के लिए रु 5500 और 6 वर्ष के लिए रु 1200 जमा किए। उन्हें कुल रु 1860 का साधारण ब्याज मिला। प्रति वर्ष ब्याज दर ज्ञात कीजिये ?",
    options: ["15%", "10%", "5%", "20%"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-11-q2",
    classId: "mcs-11",
    questionNumber: 2,
    text: "Ramesh has ₹18,000. He deposited ₹7,000 in a bank at 5% simple interest per annum and ₹6,000 in another bank at 6% simple interest per annum. If he receives ₹1,160 as simple interest at the end of one year, then the annual rate of interest on the remaining capital will be equal to:\nरमेश के पास ₹18,000 हैं। उसने एक बैंक में 5% वार्षिक साधारण ब्याज की दर से ₹7,000 और दूसरे बैंक में 6% वार्षिक साधारण व्याज की दर से ₹6,000 जमा किए। यदि उसे एक वर्ष के अंत में साधारण व्याज के रूप में ₹1,160 प्राप्त हुए, तो शेष पूंजी पर वार्षिक व्याज की दर किसके बराबर होगी?\nSSC CGL PRE 2024",
    options: ["8%", "10%", "9%", "11%"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-11-q3",
    classId: "mcs-11",
    questionNumber: 3,
    text: "The simple interest of ₹2,460 will be ₹162 less than the interest of ₹3,000 at the rate of 5% per annum simple interest. Find the time taken in years.\n5% वार्षिक साधारण ब्याज की दर से ₹3,000 के ब्याज की तुलना में ₹2,460 का साधारण ब्याज 162 कम होगा। लिया गया समय वर्ष में ज्ञात कीजिए।\n(Selection Post 2023)",
    options: ["5", "6", "4", "3"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-11-q4",
    classId: "mcs-11",
    questionNumber: 4,
    text: "The difference in simple interest of two banks on ₹8,000 in 3 years is ₹800. If the per annum rates of interest in two banks are R1 and R2, then what is the value of R1 - R2? (where R1 > R2)\n3 वर्ष में ₹8,000 पर दो बैंकों के साधारण ब्याज का अंतर ₹800 है। यदि दो बैंकों में ब्याज की प्रतिवर्ष दर R1 तथा R2 है, तो R1 - R2 का मान क्या है? (जहाँ R1 > R2)\n(SSC CGL T-2 2022)",
    options: ["2 1/3%", "5 1/3%", "1 1/3%", "3 1/3%"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-11-q5",
    classId: "mcs-11",
    questionNumber: 5,
    text: "Arman invested an amount of 4500 at the simple interest of 2 1/2% per annum and another amount at the simple interest of 5% per annum. The total interest earned at the end of one year on the total amount invested became 3 1/2% per annum. Find the total amount invested.\nअरमान ने रु.4500 की राशि 2 1/2% साधारण ब्याज पर तथा एक अन्य राशि 5% साधारण ब्याज पर निवेश किया। यदि उसे एक वर्ष के अंत में पूरी राशि पर 3 1/2% ब्याज मिला हो तो कुल रकम ज्ञात करे ?",
    options: ["Rs.3000", "Rs.7000", "Rs.8000", "Rs.7500"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-11-q6",
    classId: "mcs-11",
    questionNumber: 6,
    text: "A total of ₹2,00,000 is divided into two parts for investment in different banks at simple interest. One yields 4% annual interest while the other yields 6% annual interest. If the total interest on the whole amount at the end of one year is equal to 4.7% annual rate, then the amount invested in each bank (in ₹) is respectively.\nसाधारण ब्याज पर विभिन्न बैंकों में निवेश के लिए कुल ₹2,00,000 को दो भागों में बांटा गया। एक पर 4% वार्षिक व्याज प्राप्त होता है। जबकि दूसरे पर 6% वार्षिक व्याज प्राप्त होता है। यदि एक वर्ष के अंत में पूर्ण राशि पर कुल व्याज 4.7% वार्षिक दर के बराबर है, तो प्रत्येक बैंक में निवेश की गई राशि (₹ में) क्रमशः है।\nSSC CGL PRE 2024",
    options: ["1,20,000 और 80,000", "1,30,000 और 70,000", "1,45,000 और 55,000", "1,60,000 और 40,000"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-11-q7",
    classId: "mcs-11",
    questionNumber: 7,
    text: "A person invests some money in two banks in the ratio 11: 9. The rate of simple interest on first investment is 19%, but overall annual interest on total investment is 23.5%, if simple interest received in second investment is Rs. 1305. Then find his total investment?\nकोई व्यक्ति कुछ धनराशि दो बैंकों में 11 : 9 के अनुपात में निवेश करता है। पहले बैंक से उसे 19% ब्याज की दर प्राप्त होती है जबकि कुल निवेश पर उसे 23.5% ब्याज दर प्राप्त होती है। अगर दुसरे बैंक उसे 1305 रु ब्याज देता है तो उसने बैंकों में कुल कितना निवेश किया?\n",
    options: ["8,000", "10,000", "12,000", "₹9,600"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-11-q8",
    classId: "mcs-11",
    questionNumber: 8,
    text: "Kiran lent a part of ₹4,000 to two persons at the rate of 8% per annum and the remaining part at the rate of 10% per annum. He got an annual simple interest of ₹352. So find the amount lent at 10%.\nकिरण ने दो व्यक्तियों को ₹4,000 का एक भाग 8% प्रति वर्ष की दर से और शेष भाग 10% प्रति वर्ष की दर से उधार दिए । उसे ₹352 का वार्षिक साधारण ब्याज मिला। तो 10% पर उधार दी गई राशि ज्ञात करें।\nSSC CGL PRE 2024",
    options: ["1,600", "2,200", "2,400", "1,800"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q9",
    classId: "mcs-11",
    questionNumber: 9,
    text: "A sum of ₹16,000 is divided between Rahul and Vinod. Rahul invested his sum at 7.5% p.a. for 4 years at simple interest, and Vinod invested his sum at 12% p.a. for 4 years at simple interest. If the total interest received by Rahul and Vinod together is ₹6,024, then the sum invested by Rahul is:\n₹16,000 की धनराशि राहुल और विनोद में बांटी गई। राहुल ने अपनी धनराशि 7.5% वार्षिक साधारण ब्याज दर पर 4 वर्ष के लिए निवेश की और विनोद ने अपनी धनराशि 12% वार्षिक साधारण व्याज दर पर 4 वर्ष के लिए निवेश की। यदि राहुल और विनोद को ब्याज के रूप में कुल ₹6,024 की धनराशि प्राप्त हुई, तो राहुल द्वारा कितनी धनराशि का निवेश किया गया था?\n(SSC MTS T-1 2020)",
    options: ["8,200", "9,200", "8,400", "9,500"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-11-q10",
    classId: "mcs-11",
    questionNumber: 10,
    text: "The equal sums (in ₹) are lent at 8% and 4% simple interest p.a., respectively at the same time. The first sum is received 2 years earlier than the other and the amount received in each case is ₹14,500. Each sum is:\nदो बराबर धनराशियां (₹ में) क्रमशः 8% और 4% वार्षिक साधारण ब्याज की दर पर एक ही समय पर उधार दी जाती हैं। पहली धनराशि दूसरी धनराशि से 2 वर्ष पहले ही प्राप्त हो जाती है और प्रत्येक धनराशि के लिए प्राप्त होने वाली धनराशि ₹14,500 है। प्रत्येक धनराशि ज्ञात कीजिए।\n(SSC CPO T-1 2019)",
    options: ["₹12,800", "₹12,500", "₹13,200", "₹12,000"],
    correctAnswer: 1,
    explanation: "null"
  },
  {
    id: "mcs-11-q11",
    classId: "mcs-11",
    questionNumber: 11,
    text: "Two equal sums are lent at 10% and 8% simple interest p.a. Respectively, at the same time. The first sum is recieved 2 years earlier then the second one and the amount received in each case was Rs. 36,900. Each sum was \nदो बराबर धनराशियों को क्रमशः 10% और 8% वार्षिक साधारण ब्याज दर पर एक ही समय पर उधार दिया जाता है। पहली धनराशि दूसरे धनराशि से 2 वर्ष पहले ही प्राप्त हो जाती है। और प्रत्येक मामलें में प्राप्त धनराशि रु. 36,900 है। प्रत्येक धनराशि थी।",
    options: ["Rs. 20,500", "Rs. 20,200", "Rs. 18,100", "Rs. 21,500"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q12",
    classId: "mcs-11",
    questionNumber: 12,
    text: "A man lent out two equal sums in two parts at the rate of 12% and 11% per annum on S.I. respectively. If the former is recovered 3 months earlier than the latter, and he received equal amount of Rs. 15960 each from both the parts. Find the principal.\nएक आदमी ने दो बराबर धन 12% व 11% साधारण ब्याज की दर से उधार दिए। पहले वाला दूसरे से 3 महीने पहले चूका दिया गया और प्रत्येक से 15960 रु. प्राप्त हुए। धन ज्ञात करो|",
    options: ["Rs. 16200", "Rs. 14200", "Rs. 12000", "Rs. 10200"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-11-q13",
    classId: "mcs-11",
    questionNumber: 13,
    text: "Suman lent ₹6,400 to Rahul for three years and ₹4,000 to Ganesh for 5 years on simple interest at the same rate of interest p.a., and received 4,116 in all from both as interest. The interest paid by Ganesh is\nसुमन ने राहुल को ₹6,400 तीन वर्षों के लिए और गणेश को ₹4,000, 5 वर्षों के लिए साधारण ब्याज की समान वार्षिक दर पर उधार दिए, और उसने उन दोनों से ब्याज के रूप में कुल ₹4,116 प्राप्त किये। गणेश द्वारा दिया जाने वाला ब्याज कितना है?\n(SSC MTS T-1 2020)",
    options: ["₹2,000", "₹2,200", "₹2,100", "₹1,800"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q14",
    classId: "mcs-11",
    questionNumber: 14,
    text: "Aman invested a sum of money in scheme A at 8% per annum for a period of 5 years at simple interest. He invested four times the amount of scheme A in scheme B at 5% per annum for 7 years at simple interest. He received a total interest of ₹1,620. How much amount (in ₹) did he invest in scheme B?\nअमन ने योजना A में साधारण ब्याज पर 5 वर्ष की अवधि के लिए 8% वार्षिक दर से एक धनराशि निवेश की। उसने साधारण ब्याज पर योजना A की राशि का चार गुना 5% वार्षिक दर से 7 वर्ष के लिए योजना B में निवेश किया। उसे कुल ब्याज राशि के रूप में ₹1,620 प्राप्त हुए। उसने योजना B में कितनी राशि (₹ में) निवेश की थी?\n(SSC CGL PRE 2024)",
    options: ["900", "2,400", "3,600", "3,200"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q15",
    classId: "mcs-11",
    questionNumber: 15,
    text: "A sum of ₹27,000 is divided into two parts A and B such that the simple interest at the rate of 15% p.a. on A and B after two years and four years respectively, is equal. The total interest (in) received together from A and B is:\n₹27,000 की राशि को दो भाग A और B में इस प्रकार विभाजित किया जाता है कि 15% वार्षिक दर पर A और B पर क्रमशः दो वर्ष और चार वर्ष बाद प्राप्त साधारण ब्याज बराबर है। A और B दोनों से प्राप्त कुल ब्याज (₹ में) ज्ञात करें।",
    options: ["₹9,600", "₹5,400", "₹18,000", "₹10,800"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q16",
    classId: "mcs-11",
    questionNumber: 16,
    text: "A person invested a total of ₹9,000 in three parts at 3%, 4% and 6% per annum on simple interest. At the end of a year, he received equal interest in all the three cases. The amount invested at 6% is:\nएक व्यक्ति के कुल मिलाकर ₹9,000 का निवेश तीन भागों में 3%, 4% और 6% वार्षिक साधारण ब्याज पर किया। वर्ष के अंत में, उसे तीनों ब्याज के रूप में बराबर रकम प्राप्त हुई। उसने 6% वार्षिक ब्याज पर कितनी धनराशि का निवेश किया था?\n(SSC CHSL T-1 2019)",
    options: ["₹2,000", "₹3,000", "₹4,000", "₹5,000"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q17",
    classId: "mcs-11",
    questionNumber: 17,
    text: "A person invested his money 51000 in three different parts. On the first part, he got interest at 3% simple interest rate for 5 years. On the second part he got interest at the rate of 10% for 12 years and on the third part he got interest at the rate of 5% for 20 years. the value of simple interest received from all parts is equal then each Find the value of the division.\nएक व्यक्ति ने अपनी धनराशि 51000 को तीन अलग-अलग भागों में निवेश किया। पहले भाग पर उसको 3% साधारण ब्याज दर 5 वर्ष तक ब्याज प्राप्त हुआ। दूसरे भाग पर 10% की दर से 12 वर्ष तक ब्याज मिला और तीसरे भाग पर 5% दर से 20 वर्ष तक ब्याज मिला। यदि तीनों भागों से प्राप्त साधारण ब्याज के मान बराबर हैं तो प्रत्येक भाग का मान ज्ञात करें।\n(SSC CHSL T-1 2019)",
    options: ["A-₹70,000, B-₹6,000, C-₹5,000", "A-₹80,000, B-₹10,000, C-₹4,000", "A-₹85,000, B-₹9,000, C-₹3,000", "A-₹40,000, B-₹5,000, C-₹6,000"],
    correctAnswer: 0,
    explanation: "null"
  },
  {
    id: "mcs-11-q18",
    classId: "mcs-11",
    questionNumber: 18,
    text: "A person deposited Rs 85,000 in three separate deposits. Simple interest was received on the first part at the rate of 2% for 3 years, on the second part at the rate of 3% for 4 years and on the third part at the rate of 5% for 6 years. If the value of simple interest received on all three parts is equal then find the value of simple interest received on the second part.\nएक व्यक्ति ने 85,000 धनराशि तीन अलग-अलग जमा कराई। पहले भाग पर 2% की दर से 3 वर्षों तक, दूसरे भाग पर 3% की दर से 4 वर्षों तक एवं तीसरे भाग पर 5% की दर से 6 वर्षों तक साधारण ब्याज प्राप्त हुआ। यदि तीनों भागों पे मिलने वाला साधारण ब्याज का मान बराबर हो तो दूसरे भाग पर मिलने वाले साधारण ब्याज का मान ज्ञात करें।",
    options: ["₹50,000", "₹25,000", "₹10,000", "₹40,000"],
    correctAnswer: 0,
    explanation: "null"
  },

  {
    id: "mcs-11-q19",
    classId: "mcs-11",
    questionNumber: 19,
    text: "A sum of Rs. 24000 is divided in three parts in such a way that Ist part at 10% for 5 Years, IInd part at 4% for 5 years and IIIrd part at 5% for 20 years. If the amount received from all three parts are equal. Find the sum lent in each part.\n24000 रु. को तीन भागों में इस प्रकार बांटा गया है। कि पहले भाग को 10% की दर से 5 साल के लिये, दूसरा भाग को 4% की दर से 5 साल के लिये तथा तीसरा भाग को 5% की दर से 20 साल के लिये दिया गया। तीनों से प्राप्त धनराशि बराबर है। तो तीनों भाग का मूल्य ज्ञात कीजिए।",
    options: ["5K:10K:7K", "6K:10K:7K", "8K:10K:6K", "2K:10K:6K"],
    correctAnswer: 3,
    explanation: "null"
  },
  {
    id: "mcs-11-q20",
    classId: "mcs-11",
    questionNumber: 20,
    text: "A person has left a sum of 1,45,600 to be divided among his two sons aged 15 years and 13 years now. Both of them invested their shares on simple interest at 10% per annum. If both of them gets equal amounts when they attains 18 years of age, then the original share received by younger son is:\nकिसी व्यक्ति ने अपने 15 वर्ष और 13 वर्ष की आयु वाले दो पुत्रों में ₹1,45,600 की राशि विभाजित की। दोनों पुत्रों ने अपने हिस्सों को 10% वार्षिक साधारण ब्याज पर निवेश किया। यदि प्रत्येक को उसकी 18 वर्ष की आयु होने पर बराबर धनराशि मिली हो, तो छोटे पुत्र ने कितनी राशि ब्याज पर निवेश की थी?\n(SSC MTS T-1 2020)",
    options: ["₹64,500", "₹67,600", "₹66,400", "₹67,500"],
    correctAnswer: 2,
    explanation: "null"
  },
  {
    id: "mcs-11-q21",
    classId: "mcs-11",
    questionNumber: 21,
    text: "Rs. 18210 is invested in three Schemes-A, B and C for 5 years, 8 years and 4 years respectively. If these three Schemes give a simple interest of 12%, 10% and 12.5% respectively. After completion of each scheme a person gets amount in the ratio 3:7:4 from these schemes. Then find the sum of money invested in Scheme C?\n18210 रुपये की धनराशि को तीन योजना-A, B और C में क्रमशः 5 वर्ष, 8 वर्ष और 4 वर्ष के लिए निवेशित किया गया है। यदि तीनों योजनाओं पर साधारण ब्याज की दर क्रमशः 12%, 10% और 12.5% है। प्रत्येक योजना की समाप्ति पर व्यक्ति को मिलने वाली धनराशि का अनुपात 3:7:4 है। तब योजना C में निवेशित धनराशि क्या थी?",
    options: ["₹4,320", "₹5,760", "₹5,880", "₹5,120"],
    correctAnswer: 3,
    explanation: "null"
  },



      // Math Simple intrest Class-5 : mcs-12
  
  {
    "id": "si-5-q1",
    "classId": "mcs-12",
    "questionNumber": 1,
    "text": "A certain amount at certain rate of simple interest for certain time gives a certain interest. The amount is increased by 20%, rate is made 2/3 of the previous and time is made 6/5 of the previous. In this way, the simple interest received is Rs.2400. What was the interest received in the first condition?\nकुछ समय के लिए साधारण ब्याज की निश्चित दर पर एक निश्चित राशि एक निश्चित ब्याज देती है। राशि में 20% की वृद्धि हुई है, दर अब पिछले के 2/3 है और समय पिछले के 6/5 है। इस तरह प्राप्त साधारण ब्याज 2400 रुपए है। पहली बार में क्या ब्याज मिला था?",
    "options": ["Rs.3000", "Rs.2400", "Rs.2500", "None of these"],
    "correctAnswer": 3,
    "explanation": null
  },
  {
    "id": "si-5-q2",
    "classId": "mcs-12",
    "questionNumber": 2,
    "text": "A sum of money was lent in two parts in the ratio 4 : 5 for 4 years and 5 years respectively, both at the rate of 8% per annum simple interest. If the difference between the interests earned from the two parts is ₹4680, then what was the total sum lent (in ₹)?\n4 : 5 के अनुपात में कोई धन राशि दो भागों में क्रमशः 4 वर्ष और 5 वर्ष के लिए उधार दी गई, दोनों भाग को 8% वार्षिक साधारण ब्याज की दर पर दिया गया है। यदि दोनों भागों से प्राप्त ब्याज के बीच अंतर ₹4680 था, तो उधार दी गई कुल राशि (₹में) ज्ञात करें।",
    "options": ["₹42,120", "₹46,800", "₹65,000", "₹58,500"],
    "correctAnswer": 1,
    "explanation": null
  },
  {
    "id": "si-5-q3",
    "classId": "mcs-12",
    "questionNumber": 3,
    "text": "A sum of ₹27,000 is divided into two parts A and B such that the simple interest at the rate of 15% p.a. on A and B after two years and four years respectively, is equal. The total interest (in ₹) received together from A and B is:\n₹27,000 की राशि को दो भाग A और B में इस प्रकार विभाजित किया जाता है कि 15% वार्षिक दर पर A और B पर क्रमशः दो वर्ष और चार वर्ष बाद प्राप्त साधारण व्याज बराबर है। A और B दोनों से प्राप्त कुल व्याज (₹ में) ज्ञात करें।",
    "options": ["9,600", "5,400", "18,000", "10,800"],
    "correctAnswer": 4,
    "explanation": null
  },
  {
    "id": "si-5-q4",
    "classId": "mcs-12",
    "questionNumber": 4,
    "text": "A sum of ₹5,000 is divided into two parts such that the simple interest on the first part for 4 years at 6% p.a is double the simple interest on the second part for 2 years at 4% p.a. What is the difference between the two parts?\n₹.5000 की राशि को दो भागों में इस प्रकार विभाजित किया जाता है कि पहले भाग पर 6% प्रतिवर्ष की दर से 4 सालो के लिए साधारण व्याज, दूसरे भाग पर 4% प्रतिवर्ष की दर से 2 सालो के लिए साधारण व्याज से दोगुना होता है। दोनों भागों में कितना अंतर है?",
    "options": ["620", "680", "560", "600"],
    "correctAnswer": 4,
    "explanation": null
  },
  {
    "id": "si-5-q5",
    "classId": "mcs-12",
    "questionNumber": 5,
    "text": "A sum of ₹50,250 is divided into two parts such that the simple interest on the first part for 7.5 years at 8⅓% p.a. is 2.5 times the simple interest on the second part for 5.25 years at 8% p.a. What is the difference (in ₹) between the two parts?\n₹50,250 की राशि को दो भागों में इस प्रकार विभाजित किया जाता है कि पहले भाग पर 7.5 वर्ष का साधारण ब्याज प्रति 8⅓% वर्ष की दर से, 8% प्रति वर्ष की दर से 5.25 वर्षों के लिए दूसरे भाग पर साधारण ब्याज का 2.5 गुना है। दोनों भागों के बीच का अंतर (रुपये में) क्या है?",
    "options": ["10,275", "12,750", "12,570", "15,270"],
    "correctAnswer": 2,
    "explanation": null
  },
  {
    "id": "si-5-q6",
    "classId": "mcs-12",
    "questionNumber": 6,
    "text": "A portion of ₹48,500 is invested at 15% simple interest per annum. After 2 years of the first investment, the remaining amount is invested at 10% simple interest per annum. After 5 years from the time of investment of the first amount, the ratio of interest is 5 : 3. What is the value (in ₹) of the second portion invested at 10% simple interest?\n₹48,500 का एक हिस्सा 15% प्रति वर्ष के साधारण व्याज पर निवेश किया जाता है। पहले निवेश के 2 वर्ष बाद, शेष धनराशि 10% वार्षिक साधारण व्याज की दर से निवेश की जाती है। पहली धनराशि के निवेश के समय से 5 वर्ष बाद, व्याज का अनुपात 5 : 3 है। 10% साधारण व्याज की दर पर निवेश किया गया दूसरा हिस्सा (₹में) कितना है?",
    "options": ["29,100", "20,940", "24,900", "19,400"],
    "correctAnswer": 1,
    "explanation": null
  },
  {
    "id": "si-5-q7",
    "classId": "mcs-12",
    "questionNumber": 7,
    "text": "If the amount obtained by A by investing Rs 9,100 for three years at a rate of 10% p.a. on simple interest is equal to the amount obtained by B by investing a certain sum of money for five years at a rate of 8% p.a. on simple interest, then 90% of the sum invested by B (in Rs) is:\nयदि A द्वारा साधारण ब्याज पर वार्षिक 10% की ब्याज दर से तीन वर्षों के लिए रूपये 9100 का निवेश करके प्राप्त की गई धनराशि, B द्वारा साधारण ब्याज पर वार्षिक 8% की ब्याज दर से पांच वर्षों के लिए एक निश्चित राशि का निवेश करके प्राप्त की गई राशि के बराबर है, तो B द्वारा निवेश की गई राशि का 90% ( रूपये में ) ज्ञात करें।",
    "options": ["7,800", "7,605", "8,540", "8,450"],
    "correctAnswer": 2,
    "explanation": null
  },
  {
    "id": "si-5-q8",
    "classId": "mcs-12",
    "questionNumber": 8,
    "text": "A person borrowed a sum at 6% per annum and returned Rs. 8400 after 1 year. Now the rate of interest is becomes 5% per annum on the rest of the amount. If the interest of second year is 13/20 of first year S.I. What amount was borrowed?\nकोई धन 6% की दर पर उधार लिया गया। 1 साल के बाद 8400 रु. वापस कर दिये। अब ब्याज की दर 5% कर दी तो अब जो भी धनराशि बची है। उस पर 5% के हिसाब से ब्याज देना होगा। दूसरे वर्ष का जो ब्याज है वो पहले वर्ष के ब्याज का 13/20 है। कितना पैसा उधार लिया गया था?",
    "options": ["Rs. 32,000", "Rs. 28,000", "Rs. 30,000", "Rs. 31,250"],
    "correctAnswer": 4,
    "explanation": null
  },
  {
    "id": "si-5-q9",
    "classId": "mcs-12",
    "questionNumber": 9,
    "text": "A part of INR 44500 is lent out at 15% simple interest per six months. The rest of the amount is lent out at 18% p.a. simple interest after one year. The ratio of interest after 4 years from the time when the first amount was lent out is 10:3. Find the second part that was lent out at 18%?\n44500 रु. के एक भाग को 15% प्रति अधिवार्षिक साधारण ब्याज की दर से दिया गया है। जबकि शेष भाग को 1 साल बाद 18% वार्षिक साधारण ब्याज की दर पर दिया गया है पहले भाग को उधार देने के समय के 4 वर्ष बाद दोनों भागो पर प्राप्त ब्याज का अनुपात 10:3 है। 18% की ब्याज दर पर दिया गया भाग कितना था।",
    "options": ["INR 16,900", "INR 17,900", "INR 16,800", "INR 17,800"],
    "correctAnswer": 1,
    "explanation": null
  },
  {
    "id": "si-5-q10",
    "classId": "mcs-12",
    "questionNumber": 10,
    "text": "A sum of Rs. 14000 is lent out in two parts in such a way that first part is given at 5% per annum and second part at 8% per annum. If the simple interest received on sum given at 5% is Rs. 92.25 more than the simple interest on sum given at 8% in one year. Find the sum lend at 8% per annum?\n14000 रुपये की धनराशि को दो भागों में इस प्रकार बांटा गया है कि पहले भाग पर 5% वार्षिक साधारण व्याज की दर और दूसरे भाग पर 8% वार्षिक साधारण व्याज की दर से ब्याज मिलता है एक वर्ष के बाद 5% कि दरवाले भाग पर प्राप्त ब्याज, 8% की दर वाले भाग पर प्राप्त ब्याज से 92.25 रुपए अधिक है तब 8% वार्षिक दरवाला भाग कितना था?",
    "options": ["₹4,675", "₹5,125", "₹4,450", "₹4,265"],
    "correctAnswer": 1,
    "explanation": null
  },
  {
    "id": "si-5-q11",
    "classId": "mcs-12",
    "questionNumber": 11,
    "text": "A man takes a loan of some amount at some rate of simple interest. After three years, the loan amount is doubled and rate of interest is decreased by 2%. After 5 more years, if the total interest paid on the whole is Rs. 13,600, which is equal to the same when the first amount was taken for 11 years, then the loan taken initially is:\nएक व्यक्ति साधारण ब्याज की किसी दर पर एक निश्चित धनराशि ऋण के रूप में लेता है। तीन वर्षों के बाद, ऋण की धनराशि दोगुनी और ब्याज दर 2% कम हो जाती है। अब से 5 वर्षों के बाद, यदि पूरी धनराशि पर दिया गया कुल ब्याज Rs. 13,600 है, जो उस पहली धनराशि के ब्याज के बराबर है जो 11 वर्षों के लिए ऋण के रूप में ली गई थी, तो लिए गए आरंभिक ऋण की राशि कीजिए।",
    "options": ["₹13,600", "₹12,500", "₹10,000", "₹12,000"],
    "correctAnswer": 3,
    "explanation": null
  },
  {
    "id": "si-5-q12",
    "classId": "mcs-12",
    "questionNumber": 12,
    "text": "A sum of money (Rs. x) was invested for 8 years in a scheme which offers simple interest at the rate of 20% per annum. The interest received after 8 years was reinvested in the same scheme for the same period. If the interest received after reinvesting for the said period was Rs. 'x + 7020', what is the value of x?\nएक धनराशि (x रुपये) को 8 वर्षों के लिए एक योजना में निवेश किया गया था, जो 20% प्रति वर्ष की दर से साधारण ब्याज प्रदान करती है। 8 वर्षों के बाद प्राप्त ब्याज को उसी योजना में उसी अवधि के लिए फिर से निवेश किया गया। यदि उक्त अवधि के लिए पुनः निवेश के बाद प्राप्त ब्याज 'x + 7020' रुपये था, तो x का मान क्या है?",
    "options": ["6400", "4800", "4500", "6000", "4850"],
    "correctAnswer": 5,
    "explanation": null
  },

       // Math Simple intrest Class-6 : mcs-13
    // Math Simple intrest Class-7 : mcs-14
    


];

export const getQuestionsByClassId = (classId: string): ClassQuestion[] => {
  return classQuestions.filter(q => q.classId === classId);
};

export const getQuestionByIndex = (classId: string, index: number): ClassQuestion | undefined => {
  const questions = getQuestionsByClassId(classId);
  return questions[index];
};
