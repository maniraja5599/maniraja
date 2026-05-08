const fs = require('fs');
const file = 'e:\\Projects\\Maniraja Resume\\src\\App.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Add GraduationCap to imports
code = code.replace(
  "Download, X",
  "Download, X, GraduationCap"
);

// 2. Add 'education' to sections array
code = code.replace(
  "const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];",
  "const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];"
);

// 3. Add 'Education' to navLinks
code = code.replace(
  "{ name: 'Experience', id: 'experience' },\n  ];",
  "{ name: 'Experience', id: 'experience' },\n    { name: 'Education', id: 'education' },\n  ];"
);

// 4. Add Education Section in main page
code = code.replace(
  "          </div>\n        </section>\n\n        {/* CONTACT SECTION */}",
  `          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-emerald-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">B.Tech Information Technology</h3>
                <span className="text-emerald-400 font-mono text-sm">2010 – 2014</span>
              </div>
              <h4 className="text-lg text-slate-400">Adhiyamaan College Of Engineering</h4>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}`
);

// 5. Update Resume Header to include Image
code = code.replace(
  `               {/* Resume Header */}
               <div className="border-b border-slate-800 pb-6 print:border-gray-300">
                 <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black mb-2">MANI RAJA</h1>
                 <p className="text-emerald-400 print:text-gray-800 font-bold text-lg mb-4">Trading System Developer | Python | UI/UX | Automation</p>
                 <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 print:text-gray-600">
                   <span>📞 +91-91590 36301</span>
                   <span>✉️ manirajankg@gmail.com</span>
                   <span>📍 Namakkal, Tamil Nadu, India</span>
                 </div>
               </div>`,
  `               {/* Resume Header */}
               <div className="border-b border-slate-800 pb-6 print:border-gray-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                 <img src="/profile.png" alt="Mani Raja" className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border-4 border-slate-800 print:border-gray-300 shadow-xl print:shadow-none" />
                 <div className="text-center sm:text-left flex-1">
                   <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black mb-2">MANI RAJA</h1>
                   <p className="text-emerald-400 print:text-gray-800 font-bold text-lg mb-4">Trading System Developer | Python | UI/UX | Automation</p>
                   <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-slate-400 print:text-gray-600">
                     <span>📞 +91-91590 36301</span>
                     <span>✉️ manirajankg@gmail.com</span>
                     <span>📍 Namakkal, Tamil Nadu, India</span>
                   </div>
                 </div>
               </div>`
);

// 6. Add Education to Resume
code = code.replace(
  `                   </div>
                 </div>
               </section>

               {/* Projects */}`,
  `                   </div>
                 </div>
               </section>

               {/* Education */}
               <section>
                 <h2 className="text-xl font-bold text-white print:text-black border-l-4 border-emerald-500 pl-3 mb-4">EDUCATION</h2>
                 <div>
                   <div className="flex justify-between items-start mb-1">
                     <h3 className="text-lg font-bold text-slate-200 print:text-black">B.Tech Information Technology</h3>
                     <span className="text-sm font-mono text-slate-500 print:text-gray-500">2010 – 2014</span>
                   </div>
                   <p className="text-sm text-slate-400 print:text-gray-700">Adhiyamaan College Of Engineering</p>
                 </div>
               </section>

               {/* Projects */}`
);

fs.writeFileSync(file, code);
console.log("Successfully updated App.jsx");
