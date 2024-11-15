import React from "react";

interface ResultComponentProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ score, total, onRestart }) => {
  const accuracy = (score / total) * 100; // Keep accuracy as a number
  const formattedAccuracy = accuracy.toFixed(2); // Format accuracy as a string for display
  let affirmation = "";

  // Set a word of affirmation based on the score
  if (accuracy >= 90) {
    affirmation = "Outstanding! You have an excellent grasp of emotion recognition!";
  } else if (accuracy >= 70) {
    affirmation = "Great job! You did really well in recognizing emotions!";
  } else if (accuracy >= 50) {
    affirmation = "Good effort! Keep practicing, and you'll get even better!";
  } else {
    affirmation = "Don't be discouraged! Keep practicing, and you'll improve over time!";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 text-center">
      <div className="p-8 rounded-lg shadow-lg bg-white max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Quiz Completed!</h2>
        <p className="text-2xl font-bold text-indigo-700 mb-4">Your Score: {score} / {total}</p>
        <p className="text-xl text-gray-700 mb-4">Accuracy: {formattedAccuracy}%</p>
        <p className="text-lg text-green-600 mb-8">{affirmation}</p>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultComponent;
