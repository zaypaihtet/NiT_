import React from 'react'

const LmsSection = () => {
  return (
     <section className="py-20 bg-gray-800 text-white" data-testid="lms-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6" data-testid="lms-title">
                    Boost Your Learning with Our LMS
                  </h2>
                  <p className="text-xl text-gray-200 mb-8" data-testid="lms-description">
                    Welcome to our Learning Management System (LMS), designed to help you learn at your own pace and convenience. Our platform offers interactive courses and personalized learning paths.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center" data-testid="lms-feature-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-lg">Interactive online courses</span>
                    </div>
                    <div className="flex items-center" data-testid="lms-feature-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-lg">Personalized learning paths</span>
                    </div>
                    <div className="flex items-center" data-testid="lms-feature-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-lg">24/7 access to course materials</span>
                    </div>
                  </div>
                  <a 
                    href="https://learnwithnit.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg inline-flex items-center transition-all duration-200"
                    data-testid="start-learning-button"
                  >
                    Start Learning Today
                  </a>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Students using online learning platform" 
                    className="rounded-xl shadow-2xl"
                    data-testid="lms-image"
                  />
                </div>
              </div>
            </div>
          </section>
  )
}

export default LmsSection