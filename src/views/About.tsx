import{ useEffect, useRef } from 'react';
import Navbar from './Navbar';

const About = () => {
  const skillsRef = useRef(null);
  const journeyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    document.querySelectorAll('.skill-card, .timeline-item').forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 font-sans">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">About Me</h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Learn more about my journey, skills, and what drives me as a developer.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-md">
                AO
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Adepoju Olusegun</h2>
                <h3 className="text-xl text-blue-700 mb-6">Full Stack Developer</h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm a passionate developer with over 3 years of experience creating responsive, 
                  user-friendly web applications. My expertise lies in React.js, JavaScript, and modern CSS 
                  frameworks like TailwindCSS.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not 
                  coding, you can find me exploring new technologies, contributing to open source projects, 
                  or sharing knowledge through technical blogs.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">Experience: </span>3+ Years
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">Location: </span>Lagos, Nigeria
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">Education: </span>B.Sc Management Information System
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={skillsRef}>
              <div className="skill-card opacity-0 translate-y-10 transition-all duration-700">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    Frontend Development
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'TailwindCSS'].map((skill, index) => (
                      <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center text-sm font-medium shadow-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="skill-card opacity-0 translate-y-10 transition-all duration-700">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    Backend & Tools
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Postman'].map((skill, index) => (
                      <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center text-sm font-medium shadow-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">My Journey</h2>
            
            <div className="space-y-12 relative" ref={journeyRef}>
              
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200 ml-1"></div>
              
              <div className="timeline-item opacity-0 translate-x-10 transition-all duration-700 relative pl-16">
                <div className="absolute left-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md">
                  <div className="text-blue-600 font-bold text-lg mb-2">2021</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Started My Development Career</h3>
                  <p className="text-gray-700">
                    Began my journey as a frontend developer, learning HTML, CSS, and JavaScript fundamentals.
                    Built my first responsive website and discovered my passion for web development.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item opacity-0 translate-x-10 transition-all duration-700 relative pl-16">
                <div className="absolute left-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md">
                  <div className="text-blue-600 font-bold text-lg mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">React Experience</h3>
                  <p className="text-gray-700">
                    Began mastering React.js, building dynamic user interfaces with components, hooks, and state management. 
                    Developed responsive single-page applications with modern React patterns and best practices.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item opacity-0 translate-x-10 transition-all duration-700 relative pl-16">
                <div className="absolute left-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md">
                  <div className="text-blue-600 font-bold text-lg mb-2">2023 - Present</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Front-end Development Intern</h3>
                  <p className="text-gray-700">
                    As a Front-end Development Intern, I worked on building responsive and interactive user interfaces using React.js and Tailwind CSS. 
                    I developed reusable components, implemented client-side routing, and integrated APIs to display dynamic data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(1rem) translateX(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }
        
        .skill-card:nth-child(even) {
          transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3) {
          transition-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default About;