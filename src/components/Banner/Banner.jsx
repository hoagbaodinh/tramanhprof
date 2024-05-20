import React from 'react';
import { motion } from 'framer-motion';
import bgMov from '../../assets/banner.webm';
import { Element } from 'react-scroll';
import './banner.css';

const Banner = () => {
  const motionVar = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
      },
    },
  };
  return (
    <Element className="banner" name="home">
      <div className="banner-container container-fluid ">
        <motion.div
          className="banner-content"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            type: 'spring',
            bounce: 0,
            delayChildren: 1.2,
            duration: 3,
            staggerChildren: 0.5,
          }}
        >
          <motion.h1 variants={motionVar}>Just call me Đồng</motion.h1>
          <motion.p variants={motionVar}>
            Cultivating creativity and reaping ideas
          </motion.p>
          <motion.a variants={motionVar} href={'#service'}>
            go harvest →
          </motion.a>
        </motion.div>
        <div className="banner-bg relative">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 1,
                duration: 0.7,
              },
            }}
            className="black-bg"
          ></motion.div>

          <video autoPlay muted loop playsInline src={bgMov} type="video/mov" />
        </div>
        :
      </div>
    </Element>
  );
};

export default Banner;
