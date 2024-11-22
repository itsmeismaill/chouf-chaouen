"use client";

import { useState } from 'react'
import Image from 'next/image'
import { Bed, Wifi, Coffee, MapPin } from 'lucide-react'

const lodgings = [
  { id: 1, name: 'Blue Haven Hostel', price: 15, amenities: ['wifi', 'breakfast'], image: '/hot1.jpg', location: { lat: 35.168, lng: -5.268 } },
  { id: 2, name: 'Chefchaouen Student House', price: 20, amenities: ['wifi'], image: '/hot2.jpg', location: { lat: 35.170, lng: -5.270 } },
  { id: 3, name: 'Medina View Guesthouse', price: 25, amenities: ['wifi', 'breakfast'], image: '/hot3.jpg', location: { lat: 35.167, lng: -5.265 } },
]

export function SymbolicPriceLodging() {
  const [priceFilter, setPriceFilter] = useState(30)

  const filteredLodgings = lodgings.filter(lodging => lodging.price <= priceFilter)

  return (
    <section id="lodging" className="py-16 bg-chefchaouen-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-chefchaouen-blue">Affordable Lodging</h2>
        <div className="mb-8 max-w-md mx-auto">
          <label htmlFor="price-filter" className="block text-sm font-medium text-chefchaouen-dark-blue mb-2">
            Max Price: ${priceFilter}
          </label>
          <input
            type="range"
            id="price-filter"
            min="10"
            max="30"
            step="5"
            value={priceFilter}
            onChange={(e) => setPriceFilter(Number(e.target.value))}
            className="w-full h-2 bg-chefchaouen-light-blue rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLodgings.map((lodging) => (
            <div key={lodging.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={lodging.image} alt={lodging.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-chefchaouen-dark-blue">{lodging.name}</h3>
                <p className="text-chefchaouen-blue font-bold mb-2">${lodging.price} / night</p>
                <div className="flex items-center mb-4">
                  {lodging.amenities.includes('wifi') && <Wifi className="w-4 h-4 mr-2 text-chefchaouen-light-blue" />}
                  {lodging.amenities.includes('breakfast') && <Coffee className="w-4 h-4 mr-2 text-chefchaouen-light-blue" />}
                </div>
                <div className="flex items-center text-chefchaouen-blue mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>View on map</span>
                </div>
                <button className="w-full bg-chefchaouen-blue text-white px-4 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

