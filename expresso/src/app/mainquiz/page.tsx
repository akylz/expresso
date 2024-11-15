"use client"; // Ensures this file is treated as a client component in Next.js

import React, { useState } from "react";
import Link from "next/link";
import QuizComponent from "../components/quiz/QuizComponent";
import ResultComponent from "../components/resultquiz/ResultComponent";
import GreetingComponent from "../components/greating/GreetingComponent";

// Define function to shuffle array
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const emotions: { [key: string]: string[] } = {
  Anger: ["/images/emotions/Anger/anger1.jpg", "/images/emotions/Anger/anger2.jpg", "/images/emotions/Anger/anger3.jpg"],
  Anxiety: ["/images/emotions/Anxiety/anx1.jpg", "/images/emotions/Anxiety/anx2.jpg", "/images/emotions/Anxiety/anx3.jpg"],
  Confusion: ["/images/emotions/Confusion/conf1.jpg", "/images/emotions/Confusion/conf2.jpg", "/images/emotions/Confusion/conf3.jpg"],
  Disgust: ["/images/emotions/Disgust/dis1.jpg", "/images/emotions/Disgust/dis2.jpg", "/images/emotions/Disgust/dis3.jpg"],
  Excitement: ["/images/emotions/Excitement/exc1.jpg", "/images/emotions/Excitement/exc2.jpg", "/images/emotions/Excitement/exc3.jpg"],
  Fear: ["/images/emotions/Fear/fear1.jpg", "/images/emotions/Fear/fear2.jpg", "/images/emotions/Fear/fear3.jpg"],
  Happiness: ["/images/emotions/Happiness/hap1.jpg", "/images/emotions/Happiness/hap2.jpg", "/images/emotions/Happiness/hap3.jpg"],
  Love: ["/images/emotions/Love/love1.jpg", "/images/emotions/Love/love2.jpg", "/images/emotions/Love/love3.jpg"],
  Sadness: ["/images/emotions/Sadness/sad1.jpg", "/images/emotions/Sadness/sad2.jpg", "/images/emotions/Sadness/sad3.jpg"],
  Surprise: ["/images/emotions/Surprise/sur1.jpg", "/images/emotions/Surprise/sur2.jpg", "/images/emotions/Surprise/sur3.jpg"],
};

const MainQuiz = () => {
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(10);

  // Generate questions based on selected number of questions
  const emotionQuestions = shuffleArray(Object.keys(emotions).map(emotion => ({
    question: "What emotion does this image represent?",
    image: shuffleArray(emotions[emotion])[0],
    options: shuffleArray([emotion, ...Object.keys(emotions).filter(e => e !== emotion).slice(0, 2)]),
    correctAnswer: emotion,
  }))).slice(0, numQuestions);

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setIsQuizComplete(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setIsQuizComplete(false);
    setIsQuizStarted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Navbar */}
      <header className="fixed w-full z-10 p-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm">
        <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-indigo-600">expresso</Link>

          <div className="space-x-6">
          <Link href="/mainquiz" className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors">
          Quiz
      </Link>
            <Link href="/frs" className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors">show</Link>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="container mx-auto pt-24 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Emotion Recognition Quiz</h1>

        {/* Choose number of questions */}
        {!isQuizStarted && !isQuizComplete && (
          <div className="mb-8">
            <label className="block text-xl mb-2">Select Number of Questions</label>
            <input
              type="range"
              min="5"
              max="20"
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              className="w-full"
            />
            <span>{numQuestions} Questions</span>
            <button
              onClick={() => setIsQuizStarted(true)}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz or Results */}
        {isQuizStarted && !isQuizComplete ? (
          <QuizComponent questions={emotionQuestions} onQuizComplete={handleQuizComplete} />
        ) : isQuizComplete ? (
          <ResultComponent score={score} total={emotionQuestions.length} onRestart={restartQuiz} />
        ) : (
          <GreetingComponent questionCount={numQuestions} />
        )}
      </main>
    </div>
  );
};

export default MainQuiz;
