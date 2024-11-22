import { Star } from 'lucide-react'
import Image from 'next/image'

export function ExperienceSharing() {
  const experiences = [
    { id: 1, name: 'John Doe', rating: 5, comment: 'Amazing experience! The blue city is breathtaking.', image: '/chef1.jpg' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Loved the local culture and food. Highly recommend!', image: '/chef2.jpg' },
    { id: 3, name: 'Mike Johnson', rating: 5, comment: 'The views are unbelievable. A must-visit destination!', image: '/chef3.jpg' },
  ]

  return (
    <section id="experience" className="py-16 bg-chefchaouen-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-chefchaouen-blue">Share Your Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={exp.image} alt={`Experience by ${exp.name}`} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-chefchaouen-dark-blue">{exp.name}</h3>
                <div className="flex items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < exp.rating ? 'text-chefchaouen-accent fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-600">{exp.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-chefchaouen-blue text-white px-6 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  )
}

