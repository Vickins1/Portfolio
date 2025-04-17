export default function About() {
       return (
         <section id="about" className="py-20 bg-gray-850">
           <div className="container mx-auto px-6">
             <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
             <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                 <p className="text-lg text-gray-300 leading-relaxed">
                   I'm Kelvin Thuo, a passionate full-stack developer with over 5 years of experience building
                   scalable and user-friendly web applications. My expertise spans modern JavaScript frameworks
                   like Next.js and React, backend technologies like Node.js, and cloud solutions. I thrive on
                   turning complex problems into elegant solutions.
                 </p>
                 <p className="text-lg text-gray-300 leading-relaxed mt-4">
                   When I'm not coding, you can find me exploring new tech trends, contributing to open-source
                   projects, or enjoying a good cup of coffee.
                 </p>
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-4">
                 {['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS'].map((skill) => (
                   <div
                     key={skill}
                     className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
                   >
                     {skill}
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </section>
       );
     }
     