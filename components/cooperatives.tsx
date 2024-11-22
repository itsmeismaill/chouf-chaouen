"use client";
import { useState } from 'react'
import Image from 'next/image'

const shops = [
  { id: 1, name: 'Artisan Rugs', category: 'Handmade', image: '/chef4.jpg', description: 'Beautiful handwoven rugs' },
  { id: 2, name: 'Local Spices', category: 'Produce', image: '/chef5.png', description: 'Authentic Moroccan spices' },
  { id: 3, name: 'Blue Pottery', category: 'Handmade', image: '/chef6.jpg', description: 'Unique Chefchaouen-style pottery' },
  { id: 4, name: 'Organic Oils', category: 'Produce', image: '/chef7.jpg', description: 'Locally produced organic oils' },
]

export function Cooperatives() {
  const [filter, setFilter] = useState('All')

  const filteredShops = filter === 'All' ? shops : shops.filter(shop => shop.category === filter)

  return (
    <section id="cooperatives" className="py-16 bg-chefchaouen-light-blue">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Local Cooperatives & Shops</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full ${filter === 'All' ? 'bg-chefchaouen-blue text-white' : 'bg-white text-chefchaouen-blue'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('Handmade')}
            className={`px-4 py-2 rounded-full ${filter === 'Handmade' ? 'bg-chefchaouen-blue text-white' : 'bg-white text-chefchaouen-blue'}`}
          >
            Handmade
          </button>
          <button
            onClick={() => setFilter('Produce')}
            className={`px-4 py-2 rounded-full ${filter === 'Produce' ? 'bg-chefchaouen-blue text-white' : 'bg-white text-chefchaouen-blue'}`}
          >
            Produce
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={shop.image} alt={shop.name} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-chefchaouen-dark-blue">{shop.name}</h3>
                <p className="text-sm text-chefchaouen-blue mb-2">{shop.category}</p>
                <p className="text-gray-600">{shop.description}</p>
                <button className="mt-4 bg-chefchaouen-blue text-white px-4 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

