import { motion } from 'framer-motion';

export default function DroneSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-indigo-200 flex items-center justify-center">
                <span className="text-6xl">🚁</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WHAT IS <span className="text-indigo-600">DRONE?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A drone is a type of unmanned vehicle—most commonly an aircraft—that flies without a human pilot onboard.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">USE OF DRONES:</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Motors & propellers to fly",
                "Batteries for power",
                "Sensors & GPS to navigate",
                "Remote control or software to operate"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-indigo-800 font-semibold">
                An Initiative of Jalsa Ventures Group
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}