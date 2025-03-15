import { motion } from "framer-motion";
import Logo from "../Asset/logo.png";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo with Animation */}
      <motion.div 
        className="flex flex-shrink-0 items-center "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img className="mx-2 w-10 " src={Logo} alt="logo" />
      </motion.div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {[
          { href: "https://www.linkedin.com/in/sahil-dhote-116191206/", icon: <FaLinkedin />, color: "text-blue-600 hover:text-blue-800" },
          { href: "https://github.com/sd0233", icon: <FaGithub />, color: "text-gray-600 hover:text-black" },
          { href: "https://x.com/sahildhote47", icon: <FaSquareXTwitter />, color: "hover:text-blue-500" },
          { href: "https://www.instagram.com/sahil_dhote47/?hl=en", icon: <FaInstagram />, color: "text-pink-500 hover:text-pink-700" }
        ].map(({ href, icon, color }, index) => (
          <motion.a 
            key={index} 
            href={href} 
            className={color} 
            whileHover={{ scale: 1.2, rotate: 5 }} 
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

