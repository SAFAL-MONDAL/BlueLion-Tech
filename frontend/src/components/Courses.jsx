import { motion } from 'framer-motion';

const courses = [
  {
    title: "Fundamentals of Data Science",
    instructor: "Dr. Michael Carter",
    role: "Data Scientist Specialists",
    hours: 78,
    level: "Beginner to Advanced"
  },
  {
    title: "Mastering Web Development",
    instructor: "John Smith",
    role: "Senior Web Developer",
    hours: 76,
    level: "All Levels"
  },
  {
    title: "Graphic Design for Beginners",
    instructor: "Emily Davis",
    role: "Professional Designer",
    hours: 58,
    level: "Beginner"
  },
  {
    title: "Basic Steps of Digital Marketing",
    instructor: "Sarah Lee",
    role: "Marketing Expert",
    hours: 64,
    level: "Intermediate"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Learning <span className="text-indigo-600">Opportunities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-400 relative">
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.hours} Hours
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-indigo-600">{course.instructor}</p>
                  <p className="text-sm text-gray-500">{course.role}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.level}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}