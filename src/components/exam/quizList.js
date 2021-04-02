const qBank = [
  {
    question: "1. What ( ) you do ? - 너 뭐하니?   ",
    answers: ["did", "does", "do", "are", "is"],
    correct: "do",
    questionId: "099099",
  },
  {
    question:
      '2. Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
    correct: "Wales",
    questionId: "183452",
  },
  {
    question: "3. Where () uncle go? - 삼촌은 어디 가니?",
    answers: ["did", "does", "do", "are", "is"],
    correct: "HTC",
    questionId: "267908",
  },
  {
    question: "4. What is Seha doing? - 새하는 (지금) 머하고 있니?",
    answers: ["did", "does", "do", "are", "is"],
    correct: "Thomas & Martha",
    questionId: "333247",
  },
  {
    question: "5. What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293",
  },
  {
    question:
      "6. What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answers: [
      "Demolition",
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs",
    ],
    correct: "Demolition",
    questionId: "588909",
  },
  {
    question:
      '7. What name represents the letter "M" in the NATO phonetic alphabet?',
    answers: ["Mike", "Matthew", "Mark", "Max"],
    correct: "Mike",
    questionId: "648452",
  },
  {
    question: "8. What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: "786649",
  },
  {
    question:
      "9. In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answers: ["Key", "Sword", "Pen", "Cellphone"],
    correct: "Key",
    questionId: "839754",
  },
  {
    question:
      "10. Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answers: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik’s Cube",
    ],
    correct: "Cabbage Patch Kids",
    questionId: "98390",
  },
];

export default () => Promise.resolve(qBank);
