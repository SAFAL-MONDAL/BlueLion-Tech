import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                BlueLion<span className="text-cyan-400">.</span>Tech
              </h3>
              <p className="text-sm text-cyan-400 mt-1">BLUELION SCHOOL OF ROBOTICS AND AI</p>
            </motion.div>
            <p className="text-gray-400 text-sm mb-4">
              Building Your Skills, Expanding Your Horizons
            </p>
            <div className="text-xs text-gray-500">
              Branch Code: <span className="text-cyan-400">WB202623</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition">Courses</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+9170378332783" className="hover:text-cyan-400">+91 7038332783</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+918999114538" className="hover:text-cyan-400">+91 8999114538</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919749294592" className="hover:text-cyan-400">+91 9749294592</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Asansol - 713304</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Address</h4>
            <address className="text-gray-400 text-sm not-italic">
              Flat - B, 2nd Floor,<br />
              Maa Durga Apartment,<br />
              Near PR Mukharjee Nursing Home<br />
              Lower Cheliangla<br />
              Asansol - 713304
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 BlueLion Tech. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Managed By <span className="text-cyan-400">RSR GLOBAL SERVICES</span> | Robotics & AI Innovation HUB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}