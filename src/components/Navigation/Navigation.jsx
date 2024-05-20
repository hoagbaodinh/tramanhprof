import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './navigation.css';
import NavbarItem from './NavbarItem';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

const Navigation = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const isVisible = visible ? 'visible' : 'hidden';
  const isOpenClass = isOpen ? 'open' : 'close';

  return (
    <div className="container-fluid">
      <motion.div
        className={`navbar ${isVisible} ${isOpenClass}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.ul
          className="navbar__list"
          variants={{
            onscreen: {
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <NavbarItem des={'home'} title={'Home'} />
          <NavbarItem des={'service'} title={'Services'} />
          <NavbarItem des={'work'} title={'Work'} />
          <NavbarItem des={'contact'} title={'Contact'} />
        </motion.ul>
        <FiMenu
          className="navbar__icon navbar__icon-menu"
          onClick={() => setIsOpen(true)}
        />
        <IoCloseOutline
          className="navbar__icon navbar__icon-close"
          onClick={() => setIsOpen(false)}
        />
      </motion.div>
    </div>
  );
};

export default Navigation;
