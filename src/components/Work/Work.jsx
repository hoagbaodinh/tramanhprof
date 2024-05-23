import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import vin from '../../assets/vinf/thumb.webp';
import dove from '../../assets/dove/thumb.webp';
import durex from '../../assets/durex/thumb.webp';
import haste from '../../assets/haste/cover.webp';
import xboom from '../../assets/lg/loa/thumb.webp';
import purifier from '../../assets/lg/lkk/thumb.webp';
import chalames from '../../assets/chalmes/cover.webp';
import weallnet from '../../assets/weallnet/thumb.webp';
import honglai from '../../assets/ohkraft/honglai/thumb.webp';
import saycheese from '../../assets/ohkraft/saychesse/thumb.webp';
import bgIMG from '../../assets/work-bg.webp';
import { productListActions } from '../../store';
import './work.css';
import { motion } from 'framer-motion';
import WorkItems from './WorkItems';
import { useDispatch, useSelector } from 'react-redux';

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
  // Lay category tu productListSlice
  const category = useSelector((state) => state.productList.category);

  // Dispatch
  const dispatch = useDispatch();

  const [projectIsShowing, setProjectIsShowing] = useState([]);

  useEffect(() => {
    setProjectIsShowing([]);
    setTimeout(() => {
      const filteredWorks = works.filter((work) => work.cate === category);
      setProjectIsShowing(filteredWorks);
    }, 500);
  }, [category]);
  console.log(projectIsShowing);
  const handleClick = (cate) => {
    // Thay doi state voi muc vua click
    console.log(cate);

    dispatch(productListActions.changeCate(cate));
    // window.scrollTo(0, 300);
  };
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
            className={category === 'idea' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleClick('idea');
            }}
          >
            Idea Creation
          </button>
          <button
            className={category === 'social' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleClick('social');
            }}
          >
            Social Content
          </button>
          <button
            className={category === 'personal' ? 'activeCate' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleClick('personal');
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
