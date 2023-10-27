import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import abhishek from "../assets/Images/abhishek.jpeg"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import prashanjeet from "../assets/Images/prashanjeet.jpg"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto pt-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              SkillAdda is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          <div className="mx-auto grid w-[100%] md:grid-cols-2 md:grid-rows-1 md:gap-2 lg:gap-4">
            {/* abh */}
            <div className="mx-3 my-20 flex w-11/12 flex-col justify-center gap-10 md:mx-10 md:my-20 md:justify-between lg:gap-10 ">
              <div className=" relative flex w-[100%] flex-row justify-center py-3 text-[10px] leading-[18px] sm:text-sm sm:leading-6 ">
                <img
                  src={abhishek}
                  alt=""
                  className="mt-1 rounded-full md:mt-0"
                  height={200}
                  width={200}
                />
              </div>

              <div className=" mt-4 flex w-[100%] flex-col justify-center">
                <p className="mb-4 mt-2 text-center text-2xl font-semibold">
                  Abhishek Kumar{" "}
                </p>
                <p className="mt-1 text-center text-base font-bold text-richblack-300">
                  Abhishek is the BDA of SkillAdda. He started his career as BDA
                  in 2020. Prashanjeet has helped merchants drive millions in
                  revenue from their skills.
                </p>
              </div>
            </div>
            {/* pra */}
            <div className="mx-3 my-20 flex w-11/12 flex-col justify-center gap-10 md:mx-10 md:my-20 md:justify-between lg:gap-10 ">
              <div className=" relative flex w-[100%] flex-row justify-center py-3 text-[10px] leading-[18px] sm:text-sm sm:leading-6 ">
                <img
                  src={prashanjeet }
                  alt=""
                  className="mt-1 rounded-full md:mt-0"
                  height={200}
                  width={200}
                />
              </div>

              <div className=" mt-4 flex w-[100%] flex-col justify-center">
                <p className="mb-4 mt-2 text-center text-2xl font-semibold">
                  Prashanjeet Kumar{" "}
                </p>
                <p className="mt-1 text-center text-base font-bold text-richblack-300">
                Prashanjeet is the BDA of SkillAdda. He started his career as BDA in 2020. Prashanjeet has helped merchants drive millions in revenue from their skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="my-24 flex flex-col gap-10 lg:w-[50%]">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
