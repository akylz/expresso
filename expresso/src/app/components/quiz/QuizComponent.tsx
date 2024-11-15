import React, { useState } from "react";

interface Question {
  question: string;
  image: string;
  options: string[];
  correctAnswer: string;
}

interface QuizComponentProps {
  questions: Question[];
  onQuizComplete: (score: number) => void;
}

// Function to shuffle an array
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);

  // Handle clicking on an answer option
  const handleAnswerClick = (answer: string) => {
    if (!answerChecked) {
      setSelectedAnswer(answer);
    }
  };

  // Check if the selected answer is correct and update score
  const handleCheckClick = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnswerChecked(true);
  };

  // Move to the next question or finish the quiz
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswerChecked(false);
    } else {
      onQuizComplete(score);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setAnswerChecked(false);
    }
  };

  // Get the class for the question card based on correctness
  const getCardClass = () => {
    if (!answerChecked) return "bg-white";
    return selectedAnswer === questions[currentQuestion].correctAnswer
      ? "bg-green-100"
      : "bg-red-100";
  };

  // Get the class for the answer options
  const getOptionClass = (option: string) => {
    if (!answerChecked) {
      return option === selectedAnswer
        ? "bg-indigo-500 text-white"
        : "bg-white text-indigo-600";
    }
    return option === questions[currentQuestion].correctAnswer
      ? "bg-green-500 text-white"
      : option === selectedAnswer
      ? "bg-red-500 text-white"
      : "bg-white text-indigo-600";
  };

  // Disable the "Next" button if no answer has been selected and checked
  const isNextButtonDisabled = selectedAnswer === null || !answerChecked;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100">
      <div
        className={`p-8 rounded-lg shadow-lg max-w-lg w-full text-center ${getCardClass()} transition-all duration-500 ease-in-out`}
      >
        {/* Updated Title Color */}
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          {`Question ${currentQuestion + 1} of ${questions.length}`}
        </h2>
        <p className="text-lg mb-4 text-indigo-800">{questions[currentQuestion].question}</p>

        <img
          src={questions[currentQuestion].image}
          alt="Emotion"
          className="w-64 h-64 mx-auto mb-6 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <div className="flex flex-col space-y-4 mb-6">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              className={`p-3 border-2 rounded-lg ${getOptionClass(option)} hover:bg-indigo-700 hover:text-white transition duration-300`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleCheckClick}
            disabled={selectedAnswer === null}
            className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {answerChecked ? "Checked" : "Check"}
          </button>
          <button
            onClick={handleNext}
            disabled={isNextButtonDisabled}
            className={`p-2 ${isNextButtonDisabled ? 'bg-gray-400' : 'bg-indigo-500'} text-white rounded-lg hover:bg-indigo-700 transition duration-300`}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
