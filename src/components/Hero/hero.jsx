import React from "react";
import css from "./hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";


const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
      variants={staggerContainer}
      initial = "hidden"
      whileInView="show"      
      viewport={{once: false, amount: 0.25}}
      className={`innerWidth ${css.container}`}>
        <a className="anchor" id="hero"></a>

      {/* upperElements */}

        <div className={css.upperElements}>
          <motion.span
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="primaryText">
            Hey There <br /> I'm Suman.
          </motion.span> 
          <motion.span
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="secondaryText">
          Creating sleek, user-friendly applications <br />Passion for development.
          </motion.span>
        </div>

      {/* personImage */}

        <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={css.person}>
          <motion.img
          variants={slideIn("up", "tween", 0.5, 1.3)}
          src="./person.png" alt="image" />
        </motion.div>

        {/* email */}
        <a href="mailto:sumanpanditofficial@gmail.com" className={css.email}>
          sumanpanditofficial@gmail.com
        </a>

      {/* lowerElements */}

        <div className={css.lowerElements}>
          <motion.div
           variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.experience}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn("left", "tween", 0.5, 1)}
          className={css.certificate}>
            <img src="./certificate.png" alt="certificate" />
            <span>PROFICIENT PROGRAMMER</span>
            <span>FULL STACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
