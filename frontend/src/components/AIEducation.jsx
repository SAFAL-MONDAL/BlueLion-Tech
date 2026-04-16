import { motion } from 'framer-motion';

export default function AIEducation() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              GRADE 10 – BOARD EXAM – 2029
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3">GRADE 8 – HOW AI THINKS</h3>
                <div className="flex flex-wrap gap-3">
                  {["Machine Learning", "Data Science", "Artificial Intelligence"].map((item, i) => (
                    <span key={i} className="bg-indigo-500 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3">GRADE 5 – CODING</h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "JavaScript", "HTML", "CSS"].map((item, i) => (
                    <span key={i} className="bg-purple-500 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-xl font-semibold mb-4">
                AI STARTS FROM GRADE 3. BY GRADE 10 – IT IS A BOARD EXAM
              </p>
              <p className="text-gray-200">
                Every student from Grade 3 to Grade 8 will learn how AI thinks. 
                By 2029 – AI becomes a compulsory Grade 10 board exam subject.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}