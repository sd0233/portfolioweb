import {SiJavascript} from "react-icons/si"
import{RiReactjsLine} from "react-icons/ri"

import{FaNodeJs} from "react-icons/fa"

import{SiMongodb} from "react-icons/si"

import{SiExpress} from "react-icons/si"
import{SiCplusplus} from "react-icons/si"
import { FaGitSquare } from "react-icons/fa"
import {motion} from "framer-motion"

const iconVariants= (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})


const Techonologies = () => {
  return (
    <div className="borde-b border-neutral-800 pb-24">
        <motion.h1
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
        className="my-20 text-center text-4xl ">Techonologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 1, x: -100}}
        transition={{duration: 1.5}}
        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
           variants={iconVariants(2.5)}
           initial="initial"
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-400 "/>
            </motion.div>
           
            <motion.div
           variants={(iconVariants(3))}
           initial="initial"
           animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
          
            <motion.div
            variants={(iconVariants(3.5))}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            
            <motion.div
            variants={(iconVariants(4))}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
           
            <motion.div
            variants={(iconVariants(5))}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl gray-500"/>
            </motion.div>
            <motion.div
            variants={(iconVariants(5.5))}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl gray-500"/>
            </motion.div>

            <motion.div
            variants={(iconVariants(6))}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitSquare className="text-7xl gray-500"/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Techonologies
