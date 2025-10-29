import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-white pt-16"> {/* Add padding-top to offset fixed navbar */}
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Unleash Your Ideas, Together.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              DrawKit is a real-time collaborative whiteboard for brainstorming, wireframing, and bringing your team's vision to life. Effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/register"
                className="py-3 px-6 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
              >
                Start Drawing Now
              </Link>
              <Link
                to="/about"
                className="py-3 px-6 border border-secondary-custom text-gray-300 rounded-md hover:bg-gray-700 transition-colors font-medium text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden md:block">
            {/* Using a placeholder image */}
            <img 
              src="https://placehold.co/600x400/121212/a8a5ff/png?text=DrawKit+App" 
              className="img-fluid rounded-lg shadow-2xl" 
              alt="Collaborative whiteboard illustration"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-dark-custom">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Teams Love DrawKit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="bg-darker-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-semibold text-primary-custom mb-3">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-400">
                See your team's cursors and edits live. Work together on the same canvas from anywhere in the world.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-darker-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-semibold text-primary-custom mb-3">
                Infinite Canvas
              </h3>
              <p className="text-gray-400">
                Never run out of space. Our infinite canvas lets your ideas grow without boundaries. Pan and zoom with ease.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-darker-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-semibold text-primary-custom mb-3">
                Powerful Tooling
              </h3>
              <p className="text-gray-400">
                From smart shapes and sticky notes to flow-chart connectors, we provide the tools you need to visualize any concept.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home