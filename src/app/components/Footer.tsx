import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              SkillAccess
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering rural students with gamified, offline-first STEM education.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Impact</a></li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="text-white mb-4">Partnerships</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">NGOs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">CSR Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Government</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white mb-4">Stay Connected</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 flex-1"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 SkillAccess. Transforming education for rural India.</p>
        </div>
      </div>
    </footer>
  );
}
