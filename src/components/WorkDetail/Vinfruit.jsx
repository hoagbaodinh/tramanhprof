import React from 'react';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import gif1 from '../../assets/vinf/gif1.webm';
import gif2 from '../../assets/vinf/gif2.webm';
import gif3 from '../../assets/vinf/gif3.webm';
import gif4 from '../../assets/vinf/gif4.webm';

import './workPage.css';
import { HashLink } from 'react-router-hash-link';

const Vinfruit = () => {
  return (
    <div>
      <section className="work">
        <div className="container-fluid work-item__container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#2b5e69' }}
                  className="work-item__title"
                >
                  VINFRUITS - FRUITSHION REEL
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">
                  EVERY DAY, EVERY SINGLE JOY
                </h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#2b5e69" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#2b5e69' }}>TASK</h3>
                      <p>
                        Social Reel for Vinfruits base on a fashion trendy sound
                        on that time.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#2b5e69" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#2b5e69' }}>INSIGHT</h3>
                      <p>
                        Modern women are not afraid to refresh and transform
                        themselves every day. They strive to color themselves
                        with a new shade, bringing a fresh spirit each day.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#2b5e69" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#2b5e69' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#2b5e69' }}>
                          EVERY DAY, EVERY SINGLE JOY
                        </b>{' '}
                        <br />
                        Refresh themselves everyday is a joy. Women also love
                        fashion, the most basically changing is about daily
                        outfit. It’s a joyful choice everyday. <br />
                        Even though{' '}
                        <b style={{ color: '#2b5e69' }}>
                          they make changes in the color of outfits and fruits
                        </b>{' '}
                        every day,
                        <b style={{ color: '#2b5e69' }}>
                          {' '}
                          they remain loyal to VinFruits products{' '}
                        </b>
                        . For modern women, they excel at making smart choices
                        to enhance the quality of life.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div className="work-item__gif">
                  <div className="row work-item__gif-content">
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src={gif1}
                        className="work-item__gif-img"
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src={gif2}
                        className="work-item__gif-img"
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src={gif3}
                        className="work-item__gif-img"
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src={gif4}
                        className="work-item__gif-img"
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-4 col-sm-12 p-0">
              <div className="work-item__img">
                <video
                  src="https://res.cloudinary.com/papindev/video/upload/v1716008460/tramanh-pj/hjbyygvxzagx3voty18t.mp4"
                  controls
                  autoPlay
                  muted
                />
              </div>
            </div>
          </div>

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#2b5e69' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vinfruit;
