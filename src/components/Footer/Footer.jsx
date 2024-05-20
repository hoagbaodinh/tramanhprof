import React from 'react';
import './footer.css';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const motionVar = {
  offscreen: {
    opacity: 0,
    type: 'spring',
    bounce: 0,
    duration: 0.3,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.05,
      duration: 1,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      id="contact"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        bounce: 0,
        delayChildren: 0.8,
        duration: 2,
        staggerChildren: 0.05,
      }}
    >
      <motion.p variants={motionVar} className="footer-text">
        I'm always here:
      </motion.p>

      <motion.div variants={motionVar} className="footer-bottom">
        <div className="footer-bottom-item">
          <FaPhoneAlt className="footer__social-icon" />
          <span>070 2810 700</span>
        </div>
        <div className="footer-bottom-item">
          <FaGoogle className="footer__social-icon" />
          <span>ngtta131@gmail.com</span>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
