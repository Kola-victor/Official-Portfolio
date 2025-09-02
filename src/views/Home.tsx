import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV/Segun Adepoju_CV_2024_updated port--.pdf';
    link.download = 'Adepoju_Olusegun_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-200 flex flex-col items-center justify-start pt-40 font-sans">
      <Navbar />

      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-medium text-blue-900 mb-4">Hey I'm</h1>
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 mb-6">Adepoju Olusegun</h1>
        <h2 className="text-3xl md:text-4xl font-medium text-blue-800 mb-10">Full Stack Developer</h2>
        
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          I create responsive, user-friendly web applications with modern technologies. 
          Passionate about clean code, performance optimization, and creating intuitive user experiences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button 
            onClick={handleDownloadCV}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download CV
          </button>
          
          <Link to="/projects">
            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow transition-all duration-300">
              View Projects
            </button>
          </Link>
          
          <Link to="/contact">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 text-lg font-medium text-blue-900">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">HTML</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">CSS</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">TailwindCSS</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">JavaScript</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">TypeScript</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">React.js</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Next.js</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Node.js</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Express.js</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">MongoDB</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-800 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-800 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-800 mb-2">5+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </div>
      </div>

      <footer className="w-full py-8 bg-white mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-极.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 极c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 极" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 极 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.极 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} Adepoju Olusegun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;