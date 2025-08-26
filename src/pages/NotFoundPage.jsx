import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-4 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>
          <p className="my-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
          <Link to="/" className="mt-6 bg-blue-800 hover:bg-[#000080] text-white px-6 py-2 rounded-md">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
