
"use client";
import { useState } from 'react'

const causes = [
  { id: 1, name: 'Education Fund', description: 'Support local schools and educational programs', goal: 10000, raised: 7500 },
  { id: 2, name: 'Cultural Preservation', description: 'Help preserve Chefchaouen\'s unique heritage', goal: 15000, raised: 9000 },
  { id: 3, name: 'Community Development', description: 'Fund local infrastructure and community projects', goal: 20000, raised: 12000 },
]

export function DonationBox() {
  const [selectedCause, setSelectedCause] = useState(causes[0])
  const [donationAmount, setDonationAmount] = useState(10)

  const progress = (selectedCause.raised / selectedCause.goal) * 100

  return (
    <section id="donate" className="py-16 bg-chefchaouen-light-blue">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Support Local Causes</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label htmlFor="cause-select" className="block text-sm font-medium text-chefchaouen-dark-blue mb-2">
              Select a cause to support
            </label>
            <select
              id="cause-select"
              value={selectedCause.id}
              onChange={(e) => setSelectedCause(causes.find(cause => cause.id === Number(e.target.value)) || causes[0])}
              className="w-full p-2 border border-chefchaouen-light-blue rounded-md text-chefchaouen-blue"
            >
              {causes.map((cause) => (
                <option key={cause.id} value={cause.id}>{cause.name}</option>
              ))}
            </select>
          </div>
          <p className="text-chefchaouen-blue mb-4">{selectedCause.description}</p>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-chefchaouen-blue mb-1">
              <span>Raised: ${selectedCause.raised}</span>
              <span>Goal: ${selectedCause.goal}</span>
            </div>
            <div className="w-full bg-chefchaouen-light-blue rounded-full h-2.5">
              <div className="bg-chefchaouen-blue h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="donation-amount" className="block text-sm font-medium text-chefchaouen-dark-blue mb-2">
              Donation Amount
            </label>
            <div className="flex items-center">
              <span className="text-chefchaouen-blue mr-2">$</span>
              <input
                type="number"
                id="donation-amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
                min="1"
                className="w-full p-2 border border-chefchaouen-light-blue rounded-md text-chefchaouen-blue"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button className="bg-chefchaouen-blue text-white px-6 py-2 rounded-full hover:bg-chefchaouen-dark-blue transition-colors">
              Donate Once
            </button>
            <button className="bg-chefchaouen-light-blue text-chefchaouen-blue px-6 py-2 rounded-full hover:bg-chefchaouen-blue hover:text-white transition-colors">
              Donate Monthly
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

