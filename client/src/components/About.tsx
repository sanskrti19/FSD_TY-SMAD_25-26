import React from 'react'

function About() {
  return (
    <div className="pt-36 pb-20 container mx-auto px-4 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DrawKit</h1>
          <p className="text-xl text-gray-300">
            We're on a mission to make collaboration visual, intuitive, and accessible for everyone.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-primary-custom mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              DrawKit started as a simple idea: what if teams could brainstorm as freely online as they do on a physical whiteboard? Frustrated by clunky and restrictive tools, our founders set out to build a platform that was fluid, fast, and, most importantly, collaborative at its core.
            </p>
            <p className="text-gray-400">
              Today, DrawKit is used by thousands of teams—from startups to Fortune 500 companies—to bring their best ideas to life.
            </p>
          </div>
          <div>
            <img 
              src="https://placehold.co/500x350/1a1a1a/a8a5ff/png?text=Our+Team" 
              className="rounded-lg shadow-2xl" 
              alt="Our team collaborating"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary-custom mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-3">Simplicity</h3>
              <p className="text-gray-400">
                Great tools should be easy to use. We focus on an intuitive experience that gets out of your way.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe the best ideas are built together. Our platform is designed for seamless teamwork.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We're constantly pushing boundaries to create new and better ways for you to visualize and create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About