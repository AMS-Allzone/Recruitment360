'use client'

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Profile from '../../../assets/Images/hr-profile.jpg'

const candidates = [
  {
    name: "Dhivagar Stanly",
    role: "Frontend Developer",
    stage: "Technical Round",
    completion: 50,
    image: Profile,
    color: "bg-blue-600",
  },
  {
    name: "Kirthishwaran",
    role: "Backend Developer",
    stage: "Assessment",
    completion: 25,
    image: Profile,
    color: "bg-gray-800",
  },
  {
    name: "Vinoth kumar. K",
    role: "Senior Medical Coder",
    stage: "Final Confirmation",
    completion: 85,
    image: Profile,
    color: "bg-purple-600",
  },
  {
    name: "Asha Kiro",
    role: "Senior Medical Coder",
    stage: "Post-Recruitment",
    completion: 95,
    image: Profile,
    color: "bg-teal-600",
  },
  {
    name: "Dhivagar Stanly 2222",
    role: "Frontend Developer",
    stage: "Technical Round",
    completion: 50,
    image: Profile,
    color: "bg-blue-600",
  },
  {
    name: "Kirthishwaran 2222",
    role: "Backend Developer",
    stage: "Assessment",
    completion: 25,
    image: Profile,
    color: "bg-gray-800",
  },
  // Add more candidates if needed
];

export default function CandidateTracker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Default for large screens

  useEffect(() => {
    // Adjust visible cards based on screen size
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // For smaller screens, show 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // For medium screens, show 2 cards
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3); // For large screens, show 3 cards
      } else {
        setVisibleCards(4); // For extra-large screens, show 4 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < candidates.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full" style={{ border: "1px solid red" }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Candidate Tracker</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            disabled={currentIndex >= candidates.length - visibleCards}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="px-2 min-w-[100%] sm:min-w-[100%] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] xl:min-w-[calc(100%/4)]"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`h-24 ${candidate.color} rounded-b-[40px]`}></div>
                <div className="p-4 -mt-12">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      className="rounded-full border-4 border-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    {candidate.role}
                  </p>
                  <div className="bg-gray-100 rounded-full h-2 mb-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${candidate.completion}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Current Stage: {candidate.stage}</span>
                    <span>Completion: {candidate.completion}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
