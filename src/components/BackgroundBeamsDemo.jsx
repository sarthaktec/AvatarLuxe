"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
        <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative">
                Be First. Be Exclusive.
                </h1>
                
                <p className="text-gray-400 max-w-md mx-auto mt-4 text-center text-sm z-10 relative">
                AvatarLuxe is redefining personal identity in the digital realm. Join the waitlist for early access to the most advanced, AI-powered avatar experience.
                </p>
                
                <input
                type="email"
                placeholder="you@avatarluxe.ai"
                className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full z-10 mt-6 bg-black placeholder:text-gray-600 px-4 py-2 transition-all duration-300"
                />
            </div>
      <BackgroundBeams />
    </div>
  );
}
