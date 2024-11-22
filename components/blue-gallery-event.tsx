"use client";
import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

const events = [
  { id: 1, title: 'Blue Hues Art Exhibition', date: '2023-12-15', time: '14:00', image: '/chef8.jpg' },
  { id: 2, title: 'Chefchaouen Music Festival', date: '2023-12-18', time: '19:00', image: '/caption.jpg' },
  { id: 3, title: 'Blue City Photography Workshop', date: '2023-12-20', time: '10:00', image: '/chef2.jpg' },
]

export function BlueGalleryEvent() {
  const [selectedEvent, setSelectedEvent] = useState<{ id: number; title: string; date: string; time: string; image: string } | null>(null)

  return (
    <section id="events" className="py-16 bg-chefchaouen-light-blue">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Blue Gallery Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={event.image} alt={event.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-chefchaouen-dark-blue">{event.title}</h3>
                <div className="flex items-center text-chefchaouen-blue mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-chefchaouen-blue mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-chefchaouen-blue text-white px-4 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors"
                >
                  RSVP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-chefchaouen-dark-blue">{selectedEvent.title}</h3>
            <p className="mb-4 text-chefchaouen-blue">Would you like to RSVP for this event?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 border border-chefchaouen-blue text-chefchaouen-blue rounded-full hover:bg-chefchaouen-light-blue transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle RSVP logic here
                  setSelectedEvent(null)
                }}
                className="px-4 py-2 bg-chefchaouen-blue text-white rounded-full hover:bg-chefchaouen-dark-blue transition-colors"
              >
                Confirm RSVP
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

