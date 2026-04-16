import { motion } from 'framer-motion';

export default function CBSEUpdate() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-600">
              CBSE HAS CHANGED EVERYTHING.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              And Your Child's School Starts in 2027.
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Shri Dharmendra Pradhan</span>
              <br />
              <span className="text-sm">Education Minister</span>
            </p>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mt-8"
            >
              <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
                Important Update
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}