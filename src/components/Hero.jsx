import { HERO_CONTENT } from "../constants/index"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

import profile from "../Asset/myprofile.png"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            > 
              Sahil Dhote
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -10, skewX: -10 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-normal"
            > 
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center m-7 mr-5">
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotate: [0, 2, -2, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="h-80 w-80 rounded-2xl"
              src={profile} alt="" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
