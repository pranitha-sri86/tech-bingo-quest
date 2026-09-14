const questionBank = [

  // ===========================
  // JAVA
  // ===========================

  {
    id: 1,
    category: "Java",
    difficulty: "Easy",
    type: "Theory",
    question: "Which keyword is used to inherit a class in Java?",
    answers: ["extends"],
    points: 10,
  },

  {
    id: 2,
    category: "Java",
    difficulty: "Easy",
    type: "Output",
    question: `int x = 5;
System.out.println(++x);`,
    answers: ["6"],
    points: 10,
  },

  {
    id: 3,
    category: "Java",
    difficulty: "Medium",
    type: "Debug",
    question: `int a = "5";`,
    answers: ["type mismatch", "datatype mismatch"],
    points: 20,
  },

  // ===========================
  // PYTHON
  // ===========================

  {
    id: 4,
    category: "Python",
    difficulty: "Easy",
    type: "Theory",
    question: "Which function prints output in Python?",
    answers: ["print"],
    points: 10,
  },

  {
    id: 5,
    category: "Python",
    difficulty: "Medium",
    type: "Debug",
    question: `for i in range(5)
    print(i)`,
    answers: ["missing colon", "colon"],
    points: 20,
  },

  // ===========================
  // C
  // ===========================

  {
    id: 6,
    category: "C",
    difficulty: "Easy",
    type: "Output",
    question: `printf("%d",5+3);`,
    answers: ["8"],
    points: 10,
  },

  {
    id: 7,
    category: "C",
    difficulty: "Medium",
    type: "Debug",
    question: `int a;
printf("%d",a);`,
    answers: [
      "uninitialized variable",
      "variable not initialized"
    ],
    points: 20,
  },

  // ===========================
  // C++
  // ===========================

  {
    id: 8,
    category: "C++",
    difficulty: "Easy",
    type: "Theory",
    question: "Which operator is used for scope resolution?",
    answers: ["::"],
    points: 10,
  },

  // ===========================
  // JAVASCRIPT
  // ===========================

  {
    id: 9,
    category: "JavaScript",
    difficulty: "Easy",
    type: "Output",
    question: `console.log(2 + "2");`,
    answers: ["22"],
    points: 10,
  },

  {
    id: 10,
    category: "JavaScript",
    difficulty: "Medium",
    type: "Debug",
    question: `let a = 5
console.log(a)`,
    answers: [
      "missing semicolon",
      "semicolon"
    ],
    points: 20,
  },

  // ===========================
  // HTML
  // ===========================

  {
    id: 11,
    category: "HTML",
    difficulty: "Easy",
    type: "Theory",
    question: "HTML stands for?",
    answers: [
      "hypertext markup language"
    ],
    points: 10,
  },

  // ===========================
  // CSS
  // ===========================

  {
    id: 12,
    category: "CSS",
    difficulty: "Easy",
    type: "Theory",
    question: "Which property changes text color?",
    answers: ["color"],
    points: 10,
  },

  // ===========================
  // REACT
  // ===========================

  {
    id: 13,
    category: "React",
    difficulty: "Easy",
    type: "Theory",
    question: "Which hook is used for state management?",
    answers: ["usestate"],
    points: 10,
  },

  {
    id: 14,
    category: "React",
    difficulty: "Medium",
    type: "Debug",
    question: `const [count,setCount]=useState()`,
    answers: [
      "missing initial value"
    ],
    points: 20,
  },

  // ===========================
  // NODE
  // ===========================

  {
    id: 15,
    category: "Node.js",
    difficulty: "Easy",
    type: "Theory",
    question: "Node.js runtime is built on which engine?",
    answers: [
      "v8",
      "v8 engine"
    ],
    points: 10,
  },

  // ===========================
  // SQL
  // ===========================

  {
    id: 16,
    category: "DBMS",
    difficulty: "Easy",
    type: "Theory",
    question: "Which SQL command retrieves records?",
    answers: ["select"],
    points: 10,
  },

  {
    id: 17,
    category: "DBMS",
    difficulty: "Medium",
    type: "Theory",
    question: "Which key uniquely identifies a record?",
    answers: ["primary key"],
    points: 20,
  },

  // ===========================
  // OPERATING SYSTEM
  // ===========================

  {
    id: 18,
    category: "Operating System",
    difficulty: "Easy",
    type: "Theory",
    question: "OS stands for?",
    answers: [
      "operating system"
    ],
    points: 10,
  },

  // ===========================
  // COMPUTER NETWORKS
  // ===========================
  {
    id: 19,
    category: "Computer Networks",
    difficulty: "Easy",
    type: "Theory",
    question: "HTTP stands for?",
    answers: [
      "hypertext transfer protocol"
    ],
    points: 10,
  },

  // ===========================
  // DSA
  // ===========================

  {
    id: 20,
    category: "DSA",
    difficulty: "Easy",
    type: "Theory",
    question: "Which data structure works on FIFO?",
    answers: ["queue"],
    points: 10,
  },

  // ===========================
  // APTITUDE
  // ===========================

  {
    id: 21,
    category: "Aptitude",
    difficulty: "Easy",
    type: "Math",
    question: "5 × 8 = ?",
    answers: ["40"],
    points: 10,
  },

  // ===========================
  // REASONING
  // ===========================

  {
    id: 22,
    category: "Reasoning",
    difficulty: "Easy",
    type: "Logical",
    question: "2, 4, 8, 16, ?",
    answers: ["32"],
    points: 10,
  },

  // ===========================
  // AI
  // ===========================

  {
    id: 23,
    category: "Artificial Intelligence",
    difficulty: "Easy",
    type: "Theory",
    question: "AI stands for?",
    answers: [
      "artificial intelligence"
    ],
    points: 10,
  },

  // ===========================
  // GIT
  // ===========================
 
  {
    id: 24,
    category: "Git",
    difficulty: "Easy",
    type: "Theory",
    question: "Which command uploads commits to GitHub?",
    answers: [
      "git push",
      "push"
    ],
    points: 10,
  },

  // ===========================
  // FULL STACK
  // ===========================

  {
    id: 25,
    category: "Full Stack",
    difficulty: "Medium",
    type: "Theory",
    question: "Which protocol is commonly used for REST APIs?",
    answers: ["http", "https"],
    points: 20,
  },

];

export default questionBank;