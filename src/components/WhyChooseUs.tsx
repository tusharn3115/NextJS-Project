"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn to Play Instruments",
    description:
      "Master the art of playing your favorite instruments with step-by-step lessons from experienced instructors. From guitar to piano, learn at your own pace and become a pro!",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/3599909/pexels-photo-3599909.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="learn to play instruments"
        />
      </div>
    ),
  },
  {
    title: "Master Vocal Techniques",
    description:
      "Unlock the power of your voice with our vocal training courses. Learn breathing techniques, pitch control, and stage presence to take your singing skills to the next level.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/1648288/pexels-photo-1648288.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="vocal training"
        />
      </div>
    ),
  },
  {
    title: "Personalized Music Lessons",
    description:
      "Get tailored music lessons designed just for you. Whether you're a beginner or an advanced musician, our expert instructors will craft a learning plan that suits your goals.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/2043737/pexels-photo-2043737.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="personalized music lessons"
        />
      </div>
    ),
  },
  {
    title: "Music Theory Simplified",
    description:
      "Understand the fundamentals of music theory with ease. Our courses cover scales, chords, rhythm, and more, helping you compose and play with confidence.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/964538/pexels-photo-964538.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="music theory course"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
