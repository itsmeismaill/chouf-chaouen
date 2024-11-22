export function WelcomeOffer() {
  return (
    <section id="offers" className="py-16 moroccan-pattern text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome Offers for Newcomers</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Experience the magic of Chefchaouen with our special offers for first-time visitors and students.
          Enjoy discounted lodging, guided tours, and unique local experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white text-chefchaouen-blue p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Student Package</h3>
            <p className="mb-4">50% off on selected accommodations and guided tours for students.</p>
            <button className="bg-chefchaouen-blue text-white px-6 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white text-chefchaouen-blue p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">First-Time Visitor Special</h3>
            <p className="mb-4">Complimentary welcome dinner and 20% off on local experiences.</p>
            <button className="bg-chefchaouen-blue text-white px-6 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

