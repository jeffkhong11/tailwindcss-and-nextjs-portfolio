import React from "react"
import SlideUp from "./SlideUp"
import Image from 'next/image'

const experiences = [
  {
    company: "DSO National Laboratories",
    role: "Data Analyst Intern",
    duration: "May 2024 - Aug 2024",
    description: "Project Title: Employing Data Driven Decision Making to Building & Infrastructure Services",
    image: "/dso.jpeg",
  },
  {
    company: "Singapore Armed Forces (SAF)",
    role: "Terrex Infantry Carrier Vehicle (ICV) Operator",
    duration: "Jan 2020 - Nov 2021",
    description: "Oversaw the vehicle maintenance and condition before driving it during infantry mission exercises",
    image: "/army.jpg",
  },
]

const coursework = [
  {
    year: "Year 1",
    courses: [
      "Programming Methodology I",
      "Programming Methodology II",
      "Linear Algebra I",
      "Calculus for Computing",
      "Introduction to Business Analytics",
      "Data Management and Visualisation",
      "Introduction to Economic Analysis",
    ],
  },
  {
    year: "Year 2",
    courses: [
      "Data Structures and Algorithms",
      "Econometrics Modelling for Business Analytics",
      "Probability and Statistics",
      "Computational Methods for Business Analytics",
      "Application Systems Development for Business Analytics",
      "Risk Analytics for Financial Services",
      "Microeconomic Analysis I"
    ],
  },
]

const RelevantCoursework = () => {
  return (
    <section id="coursework">
      <h1 className="my-20 text-center font-bold text-4xl">
        Relevant Coursework
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col items-start justify-center space-y-28">
        {coursework.map((yearData, idx) => {
          return (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-6">{yearData.year}</h2>
              <ul className="list-disc list-inside">
                {yearData.courses.map((course, idx) => (
                  <li key={idx} className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const ExperienceSection = () => {
  return (
    <div>
      <section id="experience">
        <h1 className="my-20 text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-center justify-center space-y-28">
          {experiences.map((experience, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col items-center justify-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className="md:w-1/2">
                      <Image
                        src={experience.image}
                        alt={experience.company}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{experience.company}</h1>
                      <h2 className="text-2xl mb-4">{experience.role}</h2>
                      <h3 className="text-xl mb-4">{experience.duration}</h3>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            )
          })}
        </div>
      </section>
      <RelevantCoursework />
    </div>
  )
}

export default ExperienceSection