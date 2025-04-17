export default function Hero() {
       return (
         <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
           <div className="container mx-auto px-6 text-center">
             <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
               Kelvin Thuo
             </h1>
             <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
               Full-Stack Developer | Crafting Innovative Web Solutions
             </p>
             <a
               href="#projects"
               className="inline-block px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105"
             >
               View My Work
             </a>
           </div>
         </section>
       );
     }