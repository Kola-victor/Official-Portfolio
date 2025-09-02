import{ useState } from 'react';
import Navbar from './Navbar'; 

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
  github: string;
  liveDemo?: string; 
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Dessert Ordering Web App',
      description: 'A full-featured dessert ordering platform with shopping cart, user authentication, and menu management.',
      technologies: ['Html', 'Css', 'Javascript'],
      features: ['User authentication', 'Shopping cart', 'Payment processing', 'Admin dashboard'],
      status: 'Development completed, deployed',
      github: 'https://github.com/Kola-victor/Product-Cart-Project-',
      liveDemo: 'https://dessertly.netlify.app/', 
      
    },
    {
      id: 2,
      title: 'Conference Ticket Generator',
      description: 'A ticket generation system with QR codes, validation, and PDF export functionality.',
      technologies: ['Html', 'Css', 'Javascript'],
      features: ['QR code generation', 'PDF export', 'Ticket validation', 'Admin panel'],
      status: 'Development completed, deployed',
      github: 'https://github.com/Kola-victor/Kola-victor-Conference-ticket-generator/tree/main',
      liveDemo: 'https://conference-ticket-form.netlify.app/', 
    },
    {
      id: 3,
      title: 'React Multi-Step Form',
      description: 'A user-friendly multi-step form with progress tracking and form validation.',
      technologies: ['React', 'AntD', 'Taiwind','Typescript'],
      features: ['Multi-step navigation', 'Form validation', 'Progress indicator', 'Data persistence'],
      status: 'Development completed, deployed',
      github: 'https://github.com/Kola-victor/Kola-victor-Conference-ticket-generator/tree/main',
      liveDemo: 'https://reactformstep.netlify.app', 

    },
     {
      id: 4,
      title: 'Basic Calculator',
      description: 'A functional calculator with basic arithmetic operations and responsive design.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      features: ['Basic operations', 'Responsive design', 'Keyboard support', 'Error handling'],
      status: 'Development completed, deployed',
      github: 'https://github.com/Kola-victor/Basic-Calculator-',
      liveDemo: 'https://fundamentalcalculator.netlify.app', 
      
    }
    
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-cover bg-center pt-24 font-sans">
     
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">My Projects</h1>
        <p className="text-xl text-blue-900 text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've developed. Each demonstrates different skills and technologies I've mastered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white/90 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center relative">
                <span className="text-white text-xl font-bold text-center px-4">{project.title}</span>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.liveDemo ? 'Live Demo' : 'Code Available'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-900 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                  
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  <button 
                    onClick={() => openModal(project)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-16 bg-white/90 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About Project Deployment</h2>
          <p className="text-gray-700 mb-4">
            Some of these projects are deployed and available for live demonstration, while others are completed 
            and fully functional but not currently deployed to live servers. You can explore the codebase on GitHub 
            to see the implementation details, architecture, and coding practices.
          </p>
          <p className="text-gray-700">
            I can deploy any of these projects upon request for demonstration purposes. Please feel free to contact me if you'd like to see a live demo of any specific project.
          </p>
        </div>
      </div>

    
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-900">{selectedProject.title}</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Status:</h4>
                <p className="text-gray-700">{selectedProject.status}</p>
              </div>
              
              <div className="mt-6 flex justify-between">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
                
                
                {selectedProject.liveDemo && (
                  <a 
                    href={selectedProject.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                
                <button 
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;