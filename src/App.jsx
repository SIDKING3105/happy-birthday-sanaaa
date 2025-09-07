import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 border"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-6 h-6" />
          <h1 className="text-3xl font-bold">Happy Birthday, Sana! 🎉</h1>
          <Heart className="w-6 h-6" />
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wishing you a day as wonderful as you are. Here’s a little site made with love.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-3 rounded-xl shadow border text-sm font-medium"
          onClick={() => alert('🎂 Have the best day!')}
        >
          Tap for a wish
        </motion.button>
      </motion.div>
    </div>
  )
}
