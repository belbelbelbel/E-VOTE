import React from "react";

export const FeedbackError = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
        <h1 className="text-gray-700 mb-6">{message}</h1>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
