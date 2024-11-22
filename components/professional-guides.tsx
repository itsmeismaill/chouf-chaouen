import Image from 'next/image'
import { Star, Mail } from 'lucide-react'

const guides = [
  { id: 1, name: 'Hassan', specialty: 'Historical Tours', rating: 4.8, image: '/man1.webp' },
  { id: 2, name: 'Fatima', specialty: 'Culinary Experiences', rating: 4.9, image: '/man1.webp' },
  { id: 3, name: 'Youssef', specialty: 'Photography Tours', rating: 4.7, image: '/man1.webp' },
]

export function ProfessionalGuides() {
  return (
    <section id="guides" className="py-16 bg-chefchaouen-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-chefchaouen-blue">Professional Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={guide.image} alt={guide.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-chefchaouen-dark-blue">{guide.name}</h3>
                <p className="text-sm text-chefchaouen-blue mb-2">{guide.specialty}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-chefchaouen-accent fill-current" />
                  <span className="ml-1 text-chefchaouen-dark-blue">{guide.rating}</span>
                </div>
                <button className="w-full bg-chefchaouen-blue text-white px-4 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

