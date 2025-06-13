import { motion } from 'framer-motion';
import { AlertTriangle, Home, Mail, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  // Button tap animation
  const buttonTap = {
    scale: 0.98
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="relative h-64 bg-gradient-to-r from-rose-100 to-pink-200 overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/30 rounded-full"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '1s' }}
            className="absolute top-1/3 right-1/5 w-24 h-24 bg-white/20 rounded-full"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '2s' }}
            className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-white/25 rounded-full"
          />

          {/* Main error icon */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="absolute inset-0 border-4 border-rose-400 rounded-full -z-10"
              />
            </div>
          </motion.div>
        </div>

        <div className="p-8 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-gray-800 mb-3"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-gray-700 mb-4"
          >
            Oops! Page Not Found
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-8 max-w-md mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              Return Home
            </motion.button>

            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </motion.button>

            <motion.a
              whileHover={buttonHover}
              whileTap={buttonTap}
              href="mailto:support@university.edu"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </motion.a>
          </div>

          {/* Animated search suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-indigo-50/50 p-4 rounded-lg inline-block"
          >
            <p className="text-indigo-800 mb-2">Try searching for what you need:</p>
            <div className="relative max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 border border-indigo-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;