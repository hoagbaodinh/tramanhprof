import React from 'react';
import './services.css';
import { motion } from 'framer-motion';
import { PiCloverFill } from 'react-icons/pi';
import { FaSeedling } from 'react-icons/fa';
import { MdGrass } from 'react-icons/md';
import './services.css';

const Services = () => {
  const motionVar = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        delayChildren: 0.3,
        duration: 0.7,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <section className="services" id="service">
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          bounce: 0,
          delayChildren: 0.5,
          duration: 0.5,
          staggerChildren: 0.05,
        }}
        className="container services__container"
      >
        <motion.h1 variants={motionVar} className="section__title">
          the seeds of mine
        </motion.h1>
        <motion.div variants={motionVar} className="row services__content">
          <motion.div
            variants={{
              offscreen: { opacity: 0, scale: 0.5 },
              onscreen: { opacity: 1, scale: 1 },
            }}
            className="col-md-4 col-12 mt-5"
          >
            <div className="services__item ">
              <PiCloverFill className="services__item--icon" />
              <span className="services__item--title">Idea Creation</span>
              <span className="services__item--text">
                Beside visuals, the content-idea seed facilitates the
                germination of audience’s trust, empathy, and actions.
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={{
              offscreen: { opacity: 0, scale: 0.5 },
              onscreen: { opacity: 1, scale: 1 },
            }}
            className="col-md-4 col-12 mt-5"
          >
            <div className="services__item ">
              <FaSeedling className="services__item--icon" />
              <span className="services__item--title">Social Content</span>
              <span className="services__item--text">
                The dynamic seed challenging “the field” need to understand
                seasonality and trends.
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={{
              offscreen: { opacity: 0, scale: 0.5 },
              onscreen: { opacity: 1, scale: 1 },
            }}
            className="col-md-4 col-12 mt-5"
          >
            <div className="services__item ">
              <MdGrass className="services__item--icon" />
              <span className="services__item--title">PerSonal Project</span>
              <span className="services__item--text">
                The type of seed planted to shape my creativity into a tangible
                product, without placing too much emphasis on commercial or
                theoretical aspects.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
