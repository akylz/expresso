const GreetingComponent = ({ questionCount }) => {
    return (
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg text-center mt-12">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Thanks for visiting the Emotion Quiz!</h2>
        <p className="text-lg text-gray-700">We hope you enjoyed it. See you next time!</p>
        <p className="text-md text-gray-500 mt-4">You selected {questionCount} questions for the quiz.</p>
        
        {/* Centralized Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => window.location.reload()}  // You can adjust this action as needed
            className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  };
  
  export default GreetingComponent;
  