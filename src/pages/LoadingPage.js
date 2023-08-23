import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-white min-w-screen">
      <div className="w-10 h-10 border-4 border-gray-900 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default LoadingPage;
