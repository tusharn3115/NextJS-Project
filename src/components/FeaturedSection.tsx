"use client";
import Link from "next/link";
import courseData from "../app/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

function FeaturedSection() {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: Boolean;
  }

  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-lg text-black mt-4 mb-2 dark:text-neutral-400 flex-wrap">{course.title}</p>
                  <p>{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-20 text-center">
          <Link
            className="px-4 py-2 rounded-full text-white active:scale-90 bg-teal-600 hover:bg-teal-700 duration-150"
            href={"/courses"}
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
