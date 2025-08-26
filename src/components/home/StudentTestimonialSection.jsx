import { Star } from 'lucide-react'
import React from 'react'

const StudentTestimonialSection = () => {
      const testimonials = [
    {
      id: 1,
      author: "John Smith",
      role: "Computer Science Graduate",
      content: "The education I received at NiT College prepared me perfectly for my career in software development. The hands-on projects were invaluable.",
      rating: 5
    },
    {
      id: 2,
      author: "Sarah Johnson",
      role: "Business Administration",
      content: "The faculty's real-world experience and the practical curriculum gave me the confidence to start my own business after graduation.",
      rating: 5
    },
    {
      id: 3,
      author: "Michael Chen",
      role: "Engineering Graduate",
      content: "The internship opportunities and industry connections I gained through NiT College were instrumental in launching my career.",
      rating: 4
    }
  ];
  return (
    <section className="py-20 bg-gray-800 text-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="testimonials-title">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="testimonials-description">
              Hear from our successful graduates about their transformative learning experience at NiT College
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-testid="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-600">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StudentTestimonialSection