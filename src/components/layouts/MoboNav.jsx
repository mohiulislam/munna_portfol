import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoboMenu } from "../../features/moboMenu/moboMenuSelector";
import { toggleMenu } from "../../features/moboMenu/moboMenuSlice";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

function MoboNav() {
  const [navHeight, setNavHeight] = useState("auto");

  const isOpen = useSelector(selectMoboMenu);
  const dispatch = useDispatch();
  const controls = useAnimation();

  const handleToggle = () => {
    if (isOpen) {
      setNavHeight("72px");
      controls.start("closed");
    } else {
      setNavHeight("auto");
      controls.start("open");
    }
    dispatch(toggleMenu());
  };
  const navVariants = {
    open: {
      height: "320px",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        ease: "easeIn",
      },
    },
    closed: {
      height: "52px",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <motion.nav
      className="z-50 text-xs bg-secondary justify-start pb-12 top-5  absolute right-5  rounded-b-2xl rounded-t-md gap-6 w-21 flex flex-col  text-center "
      variants={navVariants}
      initial="closed"
      animate={controls}
      style={{ height: navHeight }}
    >
      <motion.a
        className={`neon-box-shadow-link ${
          !isOpen ? "pointer-events-none" : null
        }`}
        variants={linkVariants}
      >
        Hello
      </motion.a>
      <motion.a
        className={`neon-box-shadow-link ${
          !isOpen ? "pointer-events-none" : null
        }`}
        variants={linkVariants}
      >
        About <br /> Me
      </motion.a>

      <motion.a
        className={`neon-box-shadow-link ${
          !isOpen ? "pointer-events-none" : null
        }`}
        variants={linkVariants}
      >
        Services
      </motion.a>
      <motion.a
        className={`neon-box-shadow-link ${
          !isOpen ? "pointer-events-none" : null
        }`}
        variants={linkVariants}
      >
        Contact
      </motion.a>
      <span className=" absolute bottom-0 right-1/2 translate-x-1/2">
        <Hamburger
          toggled={isOpen}
          toggle={handleToggle}
          rounded
          size={20}
          color="white"
        />
      </span>
    </motion.nav>
  );
}

export default MoboNav;
