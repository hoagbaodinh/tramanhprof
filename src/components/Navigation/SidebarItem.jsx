import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SidebarItem = ({ des, icon }) => {
  return (
    <motion.li
      variants={{
        offscreen: {
          opacity: 0,
          x: -50,
        },
        onscreen: {
          opacity: 1,
          x: 0,

          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
          },
        },
      }}
    >
      <Link to={des}>{icon}</Link>
    </motion.li>
  );
};

export default SidebarItem;
