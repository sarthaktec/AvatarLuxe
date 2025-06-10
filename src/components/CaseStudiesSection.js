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
          className="sticky top-20 h-[80vh] flex items-center justify-center"
          style={{ zIndex: index + 1 }}
        >
          <div className="relative w-[1400px] h-[700px]">
            <Image
              src={item.src}
              fill
              alt={`case-${index}`}
              className="rounded-xl object-cover shadow-2xl"
            />

            {/* Overlay text */}
            <div className="absolute top-0 left-0 w-full h-full mb-90 p-8 text-white flex flex-col justify-between">
              <h1 className="text-5xl font-light">{item.title}</h1>
              <div className="flex flex-col gap-2">
                <span className="bg-white text-black bg-opacity-20 px-3 py-1 rounded-full text-sm w-max">
                  {item.location}
                </span>
                <span className="bg-white text-black bg-opacity-20 px-3 py-1 rounded-full text-sm w-max">
                  {item.date}
                </span>
              </div>
              <div className="absolute top-8 right-8">
                <button className="bg-white text-black bg-opacity-20 px-4 py-1 rounded-full text-sm tracking-widest font-semibold hover:bg-opacity-40 transition">
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
