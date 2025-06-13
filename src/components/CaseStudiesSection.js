'use client'

import Image from 'next/image'

const caseStudies = [
  {
    src: '/images/side-view-doctor-checking-patient-before-rhinoplasty.jpg',
    title: 'Laser Treatment',
    location: 'London, UK',
    date: 'December 2, 2024',
  },
  {
    src: '/images/side-view-doctor-checking-patient-before-rhinoplasty.jpg',
    title: 'Hair Transplant',
    location: 'Paris, France',
    date: 'February 15, 2025',
  },
  {
    src: '/images/side-view-doctor-checking-patient-before-rhinoplasty.jpg',
    title: 'Plastic Surgery',
    location: 'Paris, France',
    date: 'February 15, 2025',
  },
  {
    src: '/images/side-view-doctor-checking-patient-before-rhinoplasty.jpg',
    title: 'Hair Transplant',
    location: 'Paris, France',
    date: 'February 15, 2025',
  },
]

export default function CaseStudiesScrolly() {
  return (
    <div className="relative top-20 pb-[25vh] space-y-20">
      {caseStudies.map((item, index) => (
        <div
          key={index}
          className="sticky top-20 h-[80vh] flex items-center justify-center px-4 md:px-10"
          style={{ zIndex: index + 1 }}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={item.src}
              alt={`case-${index}`}
              fill
              className="object-cover"
              priority
            />

            {/* Overlay text */}
            <div className="absolute top-0 left-0 w-full h-full p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                {item.title}
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <span className="bg-white text-black bg-opacity-20 px-3 py-1 rounded-full text-xs sm:text-sm w-max">
                  {item.location}
                </span>
                <span className="bg-white text-black bg-opacity-20 px-3 py-1 rounded-full text-xs sm:text-sm w-max">
                  {item.date}
                </span>
              </div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <button className="bg-white text-black bg-opacity-20 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm tracking-wide font-semibold hover:bg-opacity-40 transition">
                  [ EXPLORE ]
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
