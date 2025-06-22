import React from 'react';

const About = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center overflow-auto" style={{backgroundColor: '#DCDCDC'}}>
      {/* Navigation */}
      <div className="w-full bg-gray-50 py-4" style={{backgroundColor: '#DCDCDC'}}>
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex justify-center space-x-8">
            <button 
  onClick={() => onNavigate('home')}
  className="text-black font-medium px-4 py-2 rounded-lg"
  style={{
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'all 0.3s ease',
    boxShadow: 'none'
  }}
  onMouseEnter={(e) => {
    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  }}
  onMouseLeave={(e) => {
    e.target.style.boxShadow = 'none';
    e.target.style.backgroundColor = 'transparent';
  }}
>
  Home
</button>
            <button 
  onClick={() => onNavigate('make-me-do-anything')}
  className="text-black font-medium px-4 py-2 rounded-lg"
  style={{
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'all 0.3s ease',
    boxShadow: 'none'
  }}
  onMouseEnter={(e) => {
    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  }}
  onMouseLeave={(e) => {
    e.target.style.boxShadow = 'none';
    e.target.style.backgroundColor = 'transparent';
  }}
>
  Make Me Do Anything
</button>
            <button className="text-black hover:text-gray-600 font-medium transition-colors duration-200 underline focus:outline-none" style={{backgroundColor: '#DCDCDC', outline: 'none', border: 'none', boxShadow: 'none'}}>
              About
            </button>
          </nav>
        </div>
      </div>

      {/* Full Width Logo Header */}
      <div className="w-full bg-gray-50" style={{
        paddingTop: '400px',
        paddingBottom: '32px',
        backgroundImage: 'url("/about_new.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>

      {/* Content Section */}
      <div className="w-full bg-gray-50 p-8 py-8" style={{backgroundColor: '#DCDCDC'}}>
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              The Entire History of You was an experiment in exploring unlived lives, some form of a
              life-browser - how do the choices we make change the way our life unfolds? Is there a way
              that could be reflected back more viscerally?

            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              I wanted a system that understood what I was about, my history and my choices,
              that understood the turns my life had taken so far, and what was driving me forward.
              Maybe it needed to know more about me than I consciously knew about myself. And to be
              believable, it would have to approximate my voice
              in the way it was played back to me.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              How do you explain who you are, where you’ve been, and where you’re headed?
              At the time I was using Instagram fairly prolifically, as a way to bookmark
              everything I loved or found interesting in the physical world. It made sense
              as a starting point for training data, and then I created a series of custom GPTs
              to fill in the gaps and develop a complete understanding of my life story and
              forms of expression. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              I started to generate alternate lives, creating a fork in the present and leading me into
              unexpected futures - and watching them play out in the form of generated photographs from
              now until the moments of all my hypothesized deaths. 
 
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              
Watch the video here, or generate your own future version of me.
 
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-2xl w-full bg-white mx-4 mb-8 rounded-lg" style={{backgroundColor: '#DCDCDC'}}>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Want to discuss this project, share your thoughts, or explore collaboration? 
            I'd love to hear from you.
          </p>
          
          <div className="space-y-4 flex flex-col items-center">
            <a
              href="https://twitter.com/charlienothing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-1/2 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Connect on Twitter
            </a>
            
            <a
              href="mailto:grishma.entirehistoryofyou@gmail.com"
              className="inline-flex items-center justify-center w-1/2 bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send an Email
            </a>
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default About;