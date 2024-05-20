import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chamales from '../components/WorkDetail/Chamales';
import Vinfruit from '../components/WorkDetail/Vinfruit';
import WeAllNet from '../components/WorkDetail/WeAllNet';
import Haste from '../components/WorkDetail/Haste';
import Dove from '../components/WorkDetail/Dove';
import LGXBoom from '../components/WorkDetail/LGXBoom';
import LGPurifier from '../components/WorkDetail/LGPurifier';
import Durex from '../components/WorkDetail/Durex';
import OHKraft from '../components/WorkDetail/OHKraft';

const Work = () => {
  const { workId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [workId]);
  console.log(workId);
  return (
    <>
      {workId === 'chalames' && <Chamales />}
      {workId === 'vinfruit' && <Vinfruit />}
      {workId === 'weallnet' && <WeAllNet />}
      {workId === 'haste' && <Haste />}
      {workId === 'dove' && <Dove />}
      {workId === 'xboom' && <LGXBoom />}
      {workId === 'purifier' && <LGPurifier />}
      {workId === 'durex' && <Durex />}
      {workId === 'saychesse' && <OHKraft />}
      {workId === 'honglai' && <OHKraft />}
    </>
  );
};

export default Work;
