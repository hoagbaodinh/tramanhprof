import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import { FaAngleDoubleDown } from 'react-icons/fa';

import mainIMG from '../../assets/dove/img-main.webp';
import img1 from '../../assets/dove/img1.webp';
import gif1 from '../../assets/dove/gif1.webm';
import dove1 from '../../assets/dove/dove1.webp';
import dove2 from '../../assets/dove/dove2.webp';

import './workPage.css';

const Dove = () => {
  const [isShowing, setIsShowing] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setIsShowing(true);
    window.scrollTo(0, 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsShowing(true);
    });
  }, []);
  return (
    <div>
      <section className="work">
        <div className="container-fluid work-item__container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#DE9D9B' }}
                  className="work-item__title"
                >
                  DOVE SAKURA BLOSSOMS - VIRTUAL PROJECT
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">
                  BEAUTY STARTS WITH A FLORAL SKIN
                </h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#DE9D9B" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#DE9D9B' }}>TASK</h3>
                      <p>
                        <b style={{ color: '#DE9D9B' }}>
                          Content Pillars & Angles
                        </b>{' '}
                        to approach audience by the USP of Dove Sakura shower
                        gel.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#DE9D9B" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#DE9D9B' }}>INSIGHT</h3>
                      <p>
                        Women always want to be beautiful. And once they are
                        beautiful, they want to be recognized through
                        compliments with positive comparisons.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#DE9D9B" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#DE9D9B' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#DE9D9B' }}>
                          BEAUTY STARTS WITH A FLORAL SKIN
                        </b>{' '}
                        <br />
                        Flowers are beautiful, soft and smooth, they must{' '}
                        <b style={{ color: '#DE9D9B' }}>
                          be cared for from the very root
                        </b>{' '}
                        to bloom{' '}
                        <b style={{ color: '#DE9D9B' }}>
                          beautifully. Skin is the same way,{' '}
                        </b>
                        to achieve results like a flower, women must care for
                        their skin from deep within (Product USP).
                      </p>
                      <br />
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div className="work-item__gif">
                  <div className="row">
                    <div className=" col-md-4 col-6">
                      <img src={img1} alt="" className="work-item__gif-img" />
                    </div>
                    <div className="col-md-4 col-6">
                      <video
                        src={gif1}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="work-item__gif-img"
                      />
                    </div>
                  </div>
                </div>

                {/* View more */}
                <div className="work-item__extra" onClick={clickHandler}>
                  <span style={{ color: '#DE9D9B' }}>view more</span>
                  <FaAngleDoubleDown color="#DE9D9B" />
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-5 col-sm-12 p-0">
              <div className="work-item__img">
                <img src={mainIMG} alt="" />
              </div>
            </div>
          </div>

          <div className="container dove-info">
            <img src={dove1} alt="" className="w-100" />
            <img src={dove2} alt="" className="w-100 mt-5" />
          </div>

          {isShowing && (
            <div className="work__back">
              <HashLink to={'/#work'} smooth style={{ background: '#DE9D9B' }}>
                <FiArrowLeft /> Back to my works
              </HashLink>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dove;
