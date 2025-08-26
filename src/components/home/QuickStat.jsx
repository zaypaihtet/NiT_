import { BookOpen, Trophy, Users } from 'lucide-react';
import React from 'react'

const QuickStat = () => {
     const stats = [
    { icon: Users, label: "Active Students", value: "500+", testId: "stat-students" },
    { icon: BookOpen, label: "Study Programs", value: "5", testId: "stat-programs" },
    { icon: Users, label: "Expert Instructors", value: "15+", testId: "stat-instructors" },
    { icon: Trophy, label: "Graduates", value: "100+", testId: "stat-graduates" },
  ];
  return (
    <section className="bg-white py-16" data-testid="stats-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center transform transition duration-700 ease-out hover:-translate-y-1 hover:scale-105"
          data-testid={stat.testId}
          style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg mb-4">
            <stat.icon className="h-6 w-6" />
          </div>
          <div
            className="text-4xl font-bold text-gray-800 mb-2 animate-fade-up"
            data-testid={`${stat.testId}-value`}
          >
            {stat.value}
          </div>
          <p className="text-gray-600" data-testid={`${stat.testId}-label`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default QuickStat