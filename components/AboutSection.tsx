import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "Vue.js" },
  { skill: "R" },
  { skill: "MySQL" },
  { skill: "Firebase" },
  { skill: "Tableau" },
  { skill: "Flutter" },
  { skill: "PowerBI" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jeff and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> data analyst
              from Singapore.
            </p>
            <br />
            <p>
              I am a Penultimate Undergraduate at the National University of Singapore with a BS in Business Analytics with a Financial Analytics Specialisation. I am also taking a minor in Economics.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              I love running long distances and have completed several full marathons. One of the goals on my bucket list is to complete all six World Marathon Majors marathons.
            </p>
            <br />
            <p>
              Besides that, I like to watch football and short documentaries. I love to travel and explore new places and cultures. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/cross.jpg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:top-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
