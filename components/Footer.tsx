export default function Footer() {
       return (
         <footer className="py-6 bg-gray-800 text-center">
           <div className="container mx-auto px-6">
             <p className="text-gray-300">&copy; 2025 Kelvin Thuo. All rights reserved.</p>
             <div className="mt-4 flex justify-center space-x-6">
               <a href="#" className="text-gray-300 hover:text-teal-400">LinkedIn</a>
               <a href="#" className="text-gray-300 hover:text-teal-400">GitHub</a>
               <a href="#" className="text-gray-300 hover:text-teal-400">Twitter</a>
             </div>
           </div>
         </footer>
       );
     }