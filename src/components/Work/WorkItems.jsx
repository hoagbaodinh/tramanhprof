import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WorkItems = ({ works }) => {
  const [curWorks, setCurWorks] = useState([]);
  useEffect(() => {
    setCurWorks(works);
  }, [works]);
  return (
    <AnimatePresence>
      {curWorks.length !== 0 &&
        curWorks.map((work, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial={false}
              animate="visible"
              exit="hidden"
            >
              <Link to={`/work/${work.id}`} className="works-item">
                <img src={work.img} alt="" />
              </Link>
            </motion.div>
          </div>
        ))}
    </AnimatePresence>
  );
};

export default WorkItems;
