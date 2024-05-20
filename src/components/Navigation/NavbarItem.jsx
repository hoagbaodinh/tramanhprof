import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavbarItem = ({ des, title }) => {
  return (
    <motion.li
      className="navbar__list-item"
      variants={{
        offscreen: {
          opacity: 0,
          y: -50,
        },
        onscreen: {
          opacity: 1,
          y: 0,

          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
          },
        },
      }}
    >
      <Link
        activeClass="activeNav"
        spy={true}
        smooth={true}
        duration={500}
        to={`${des}`}
      >
        {title}
      </Link>
    </motion.li>
  );
};

export default NavbarItem;
