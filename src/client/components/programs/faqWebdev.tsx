export const faqData: Array<{ question: string; answer: string | React.ReactNode }> = [
  {
    question: "How do I sign up?",
    answer: (
      <>
        Keep an eye out for <strong>Spring 2025</strong> applications on Jenius’s{" "}
        <a href="https://www.instagram.com/ufsase/" target="_blank" rel="noopener noreferrer" className="text-saseGreen underline">
          Instagram
        </a>{" "}
        and{" "}
        <a href="http://discord.gg/q3HBeC5" target="_blank" rel="noopener noreferrer" className="text-saseGreen underline">
          Discord
        </a>
        !
      </>
    ),
  },
  {
    question: "What if I have little experience?",
    answer: "It’s ok! SASE Web Dev team is open to people of all experiences! If you have little experience, this is a great opportunity to learn!",
  },
  {
    question: "What is the time commitment?",
    answer: "The Web Dev team time commitment is 2-5 hours a week including weekly meetings and outside work.",
  },
  {
    question: "I have more questions!",
    answer: (
      <>
        Feel free to ask your questions in the{" "}
        <a href="http://discord.gg/q3HBeC5" target="_blank" rel="noopener noreferrer" className="text-saseGreen underline">
          SASE Discord channel
        </a>{" "}
        or contact our Webmaster, Ricky through Discord!
      </>
    ),
  },
];
