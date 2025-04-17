export default function Projects() {
       const projects = [
         {
           title: 'E-Commerce Platform',
           description: 'A fully responsive e-commerce site built with Next.js, featuring secure payments and a dynamic product catalog.',
           link: '#',
           image: 'https://via.placeholder.com/600x400',
         },
         {
           title: 'Task Management App',
           description: 'A collaborative task management tool with real-time updates, built using React and Firebase.',
           link: '#',
           image: 'https://via.placeholder.com/600x400',
         },
         {
           title: 'Portfolio Website',
           description: 'This very portfolio, showcasing my skills and projects with a sleek dark theme.',
           link: '#',
           image: 'https://via.placeholder.com/600x400',
         },
       ];
     
       return (
         <section id="projects" className="py-20 bg-gray-900">
           <div className="container mx-auto px-6">
             <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                 <div
                   key={index}
                   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                 >
                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                   <div className="p-6">
                     <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                     <p className="text-gray-300 mb-4">{project.description}</p>
                     <a
                       href={project.link}
                       className="text-teal-400 hover:underline"
                     >
                       View Project
                     </a>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
       );
     }