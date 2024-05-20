import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import vin from '../../assets/vinf/vincover.png';
import dove from '../../assets/dove/thumb.png';
import durex from '../../assets/durex/thumb.png';
import haste from '../../assets/haste/cover.png';
import xboom from '../../assets/lg/loa/thumb.png';
import purifier from '../../assets/lg/lkk/thumb.png';
import chalames from '../../assets/chalmes/cover.jpeg';
import weallnet from '../../assets/weallnet/thumb.png';
import honglai from '../../assets/ohkraft/honglai/thumb.png';
import saycheese from '../../assets/ohkraft/saychesse/thumb.png';
import bgIMG from '../../assets/work-bg.png';
import './work.css';
import { motion } from 'framer-motion';
import WorkItems from './WorkItems';

const works = [
  {
    id: 'chalames',
    img: chalames,
    cate: 'idea',
  },
  {
    id: 'durex',
    img: durex,
    cate: 'idea',
  },
  {
    id: 'vinfruit',
    img: vin,
    cate: 'idea',
  },
  {
    id: 'weallnet',
    img: weallnet,
    cate: 'idea',
  },
  {
    id: 'haste',
    img: haste,
    cate: 'social',
  },
  {
    id: 'dove',
    img: dove,
    cate: 'social',
  },
  {
    id: 'xboom',
    img: xboom,
    cate: 'social',
  },
  {
    id: 'purifier',
    img: purifier,
    cate: 'social',
  },
  {
    id: 'honglai',
    img: honglai,
    cate: 'personal',
  },
  {
    id: 'saychesse',
    img: saycheese,
    cate: 'personal',
  },
];
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

const Work = () => {
  const [cateIsShowing, setCateIsShowing] = useState('idea');
  const [projectIsShowing, setProjectIsShowing] = useState([]);
  useEffect(() => {
    if (cateIsShowing === 'idea') {
      setProjectIsShowing(works.filter((work) => work.cate === 'idea'));
    } else if (cateIsShowing === 'social') {
      setProjectIsShowing(works.filter((work) => work.cate === 'social'));
    } else if (cateIsShowing === 'personal') {
      setProjectIsShowing(works.filter((work) => work.cate === 'personal'));
    }
  }, [cateIsShowing]);
  console.log(cateIsShowing);
  console.log(projectIsShowing);
  return (
    <Element name="work" className="works" id="work">
      <motion.div
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
        className="container works-container"
      >
        <motion.div variants={motionVar} className="works-title">
          {/* <p></p> */}
          <h2>My Crops</h2>
        </motion.div>
        <motion.div variants={motionVar} className="works-cate">
          <button
            className={cateIsShowing === 'idea' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCateIsShowing('idea');
            }}
          >
            Idea Creation
          </button>
          <button
            className={cateIsShowing === 'social' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCateIsShowing('social');
            }}
          >
            Social Content
          </button>
          <button
            className={cateIsShowing === 'personal' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCateIsShowing('personal');
            }}
          >
            Personal Project
          </button>
        </motion.div>
        <motion.div variants={motionVar} className={'works-content'}>
          <div className="row">
            <WorkItems works={projectIsShowing} />
          </div>
        </motion.div>
      </motion.div>
      <div className="works-bg">
        <img src={bgIMG} alt="" />
      </div>
    </Element>
  );
};

export default Work;
