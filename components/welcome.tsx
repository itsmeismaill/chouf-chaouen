import Image from 'next/image'

export function WelcomeToChefchaouen() {
  return (
    <section id="welcome" className="py-16 bg-chefchaouen-blue">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to the Blue City, Chefchaouen</h2>
        <p className="text-xl text-white mb-8">"Where every corner is a masterpiece and every moment is a memory."</p>
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8">
          <Image
            src="/545350.jpg"
            alt="Welcome to Chefchaouen"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <button className="bg-white text-chefchaouen-blue px-6 py-2 rounded-full font-semibold hover:bg-chefchaouen-dark-blue transition-colors">
          Explore More
        </button>
      </div>
    </section>
  )
}
