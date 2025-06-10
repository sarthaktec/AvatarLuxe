'use client';
import { MenuBar } from '@/components/MenuBar';
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomCursor from '@/components/CustomCursor';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Button } from '@/components/ui/button';
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import HorizontalScrollCarousel from '@/components/horizontalScrollSection';
import Image from 'next/image';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/footer';
import { BackgroundBeamsDemo } from '@/components/BackgroundBeamsDemo';

export default function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  // Animate from wider spacing to tighter spacing
  const letterSpacing = useTransform(heroScroll, [0, 1], ['0.50em', '0.30em']);

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(videoScroll, [0, 1], [0, 2]);
  const radius = useTransform(videoScroll, [0, 1], ['100%', '0%']);

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const serviceItems = [
    {
      id: 1,
      name: 'Hair Treatment',
      image: '/images/services/0000_Hair-website.jpg',
    },
    {
      id: 2,
      name: 'Skin Treatment',
      image: '/images/services/0001_Skin-website-.jpg',
    },
    {
      id: 3,
      name: 'Laser Treatment',
      image: '/images/services/0003_Laser_website.jpg',
    },
    {
      id: 4,
      name: 'Plastic Surgery',
      image: '/images/services/0002_Plastic_surgery_website.jpg',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <MenuBar />

      <section
        ref={heroRef}
        className="w-full min-h-screen flex text-center justify-center items-center bg-black"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-9xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative"
          style={{ letterSpacing }}
        >
          AVATARLUXE
        </motion.h1>
      </section>

      <CustomCursor />
      
      <section id="cursor-section" className='w-full'>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex justify-between">
            <TabsTrigger value="about" className="text-lg border-[#ffffff45] border-0 border-t-2 p-10 mx-5 rounded-none">About Us</TabsTrigger>
            <TabsTrigger value="testimonial" className="text-lg border-[#ffffff45] border-0 border-t-2 p-10 mx-5 rounded-none">Testimonial</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="p-5 md:p-40 text-4xl font-medium">
            Redefine your beauty with our accomplished Plastic Surgeons, Aesthetic physicians & Skin specialists at Avatarluxe™ in Bangalore.
            No matter what your Hair, skin and aesthetic goals are, our tremendously skilled Professionals will treat you accurately under the right protocol.
            <Button className="text-sm mt-10 border-2 rounded-full border-amber-50">
              Book a free consulting
              <LuArrowUpRight />
            </Button>
          </TabsContent>
          <TabsContent value="testimonial" className="flex justify-center p-40">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </TabsContent>
        </Tabs>
      </section>
      <section ref={videoRef} className="w-full min-h-screen bg-black flex justify-center items-center overflow-hidden">
          <motion.div
            style={{
              scale: scale,
              borderRadius: radius,
              animation: easeIn,
              animationDelay:0.1,
            }}
            className="overflow-hidden mx-auto z-20 transition-all ease-in-out"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/avatar_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </section>
        <section className="py-6">
          <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
            <div>
              <h2 className="font-bold">2004</h2>
            </div>
            <div className="flex-1 text-base md:text-lg text-center">
              <p>The company was established by a young designer, gaining local recognition for unique, high-quality fashion.</p>
            </div>
            <div>
              <h2 className="font-bold">Launch</h2>
            </div>
          </div>
          <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
            <div>
              <h2 className="font-bold">2004</h2>
            </div>
            <div className="flex-1 text-base md:text-lg text-center">
              <p>The company was established by a young designer, gaining local recognition for unique, high-quality fashion.</p>
            </div>
            <div>
              <h2 className="font-bold">Launch</h2>
            </div>
          </div>
          <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
            <div>
              <h2 className="font-bold">2004</h2>
            </div>
            <div className="flex-1 text-base md:text-lg text-center">
              <p>The company was established by a young designer, gaining local recognition for unique, high-quality fashion.</p>
            </div>
            <div>
              <h2 className="font-bold">Launch</h2>
            </div>
          </div>
          <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
            <div>
              <h2 className="font-bold">2004</h2>
            </div>
            <div className="flex-1 text-base md:text-lg text-center">
              <p>The company was established by a young designer, gaining local recognition for unique, high-quality fashion.</p>
            </div>
            <div>
              <h2 className="font-bold">Launch</h2>
            </div>
          </div>
        </section>

        <HorizontalScrollCarousel 
          items={serviceItems}
          title="Our Services"
          heightPerCard={50} 
          cardWidth={500}
        >
        </HorizontalScrollCarousel>
        <section className="h-auto bg-black text-white py-20">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-10">Our Partners</h1>

          <div className="grid grid-cols-4 gap-0 px-10">
            {[
              {
                name: 'LuxeSkin Co.',
                tagline: 'Advanced skincare innovations',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'HairRevive',
                tagline: 'Trusted hair restoration experts',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'LaserWorks',
                tagline: 'Precision laser technology',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'SkinCraft',
                tagline: 'Redefining skin aesthetics',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'Aesthetiq',
                tagline: 'Elevate your beauty',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'DermaZone',
                tagline: 'Where science meets beauty',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'SurgiCare',
                tagline: 'Pioneers in plastic surgery',
                logo: '/images/whitelogo.png',
                link: '#',
              },
              {
                name: 'GlowBar',
                tagline: 'Your glow, our mission',
                logo: '/images/whitelogo.png',
                link: '#',
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="relative group w-full h-96 border border-amber-50 overflow-hidden flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center transform transition-transform duration-300 ease-in-out group-hover:scale-95">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <p className="text-sm text-gray-300 mt-2">{partner.tagline}</p>
                </div>

                <a
                  href={partner.link}
                  className="flex items-center justify-center gap-2 absolute bottom-[-2rem] opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-500 ease-in-out px-4 py-2  text-white font-medium rounded-full"
                >
                  Discover
                  <LuArrowRight />
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-black text-white min-h-screen">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-10">Our Case Studies</h2>
          <CaseStudiesSection />
        </section>
        <section className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-10">OUR TEAM</h2>
            <p className="text-center text-gray-400 mt-2 text-sm tracking-wide">
              — THE CREATORS OF YOUR NEXT LOOK —
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Team Member 1 */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/-9rtUhR1pRs"
                    title="Dr. Ashrith Iyanahally"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold leading-tight">
                    Dr. Ashrith<br /> Iyanahally
                  </h3>
                  <h4 className="text-sm text-right">
                    MBBS, MS, MCh<br /> Plastic Surgery
                  </h4>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Giig67nMzVU"
                    title="Dr. Jane Doe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold leading-tight">
                    Dr. Jane<br /> Doe
                  </h3>
                  <h4 className="text-sm text-right">
                    MBBS, DNB<br /> Dermatology
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BackgroundBeamsDemo />
        <Footer/>
    </div>
  );
}
