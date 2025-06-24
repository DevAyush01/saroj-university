import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BellIcon } from "lucide-react";

const FloatingAdmissionAlert = () => {
  const deadline = new Date("July 30, 2025 23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showCountdown, setShowCountdown] = useState(true);
  const [showMessage, setShowMessage] = useState(true); // control message only

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <>
      {/* LEFT: Countdown - visible on md and up */}
      {showCountdown && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:block fixed bottom-6 left-6 z-50"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 w-72 relative">
            <div className="bg-red-600 px-4 py-3">
              <h3 className="text-white font-bold text-center">
                Admissions Closing Soon!
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-gray-100 rounded-lg p-2 text-center"
                  >
                    <div className="text-xl font-bold text-red-600">
                      {timeLeft[unit]}
                    </div>
                    <div className="text-xs text-gray-600">
                      {unit.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                 href="https://siu.in8.nopaperforms.com/"
                 target="_blank"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center shadow-md relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
            
                
                  APPLY NOW !
                
                <span className="absolute inset-0 bg-white/10 animate-pulse"></span>
              </motion.a>
            </div>

            <button
              onClick={() => setShowCountdown(false)}
              className="absolute top-2 right-2 text-white hover:text-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* RIGHT: Notification Bell - visible on md and up */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block fixed bottom-28 right-8 z-50"
      >
        <div className="relative group">
          {showMessage && (
            <motion.div
              className="absolute bottom-14 right-0 bg-white w-72 shadow-xl rounded-xl border border-gray-200 p-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="font-bold text-sm text-gray-800 mb-1 flex items-center gap-2">
                <BellIcon className="w-4 h-4 text-blue-600" />
                Last Chance!
              </div>
              <div className="text-gray-700 mb-3">
                Don’t miss out! Apply by{" "}
                <span className="text-red-600 font-medium">July 30</span> and
                grab a{" "}
                <span className="font-semibold text-green-700">
                  100% scholarship
                </span>{" "}
                chance!
              </div>

              <a
                  href="https://siu.in8.nopaperforms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Register now
              </a>

              <button
                onClick={() => setShowMessage(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-400"
              >
                ×
              </button>
            </motion.div>
          )}

          <div
            className="bg-blue-600 p-3 rounded-full text-white shadow-lg cursor-pointer animate-pulse"
            onClick={() => setShowMessage((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a2 2 0 002-2H8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingAdmissionAlert;
