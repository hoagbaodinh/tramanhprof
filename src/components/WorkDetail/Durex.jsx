import React from 'react';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import img1 from '../../assets/durex/img-main1.webp';
import gif1 from '../../assets/durex/gif1.webm';

import './workPage.css';
import { HashLink } from 'react-router-hash-link';

const Durex = () => {
  return (
    <div>
      <section className="work">
        <div className="container-fluid work-item__container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#98242E' }}
                  className="work-item__title"
                >
                  DUREX INVISIBLE - VIRTUAL PROJECT
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">
                  VALENTINE’s WISHLIST: “TRUE LOVE” FEELING
                </h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#98242E" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#98242E' }}>TASK</h3>
                      <p>
                        The TVC Script for Durex Invisible on Valentine
                        occasion.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#98242E" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#98242E' }}>INSIGHT</h3>
                      <p>
                        Couples usually want to celebrate Valentine's Day in the
                        sweetest way, and that may involves the mindset that
                        they need to give each other a truly special gift.
                        However, <b>love</b> is the most valuable thing on
                        Valentine's Day for every couples. Even for those who
                        are single, what they often desire on Valentine's Day is{' '}
                        <b>love</b>.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#98242E" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#98242E' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#98242E' }}>
                          VALENTINE ĐỈNH LÀ KHI YÊU “CHÂN” THẬT
                        </b>{' '}
                        <br />n Vietnamese language, the word{' '}
                        <b style={{ color: '#98242E' }}>
                          <i>“đỉnh”</i>{' '}
                        </b>
                        is an adjective that describes the excellence of
                        anything associated with it. Furthermore, this word is
                        also used to describe the peak of emotional intensity
                        during couple’s intimate moments.
                        <br />
                        Also, the word{' '}
                        <b style={{ color: '#98242E' }}>
                          <i> “chân thật”</i>
                        </b>{' '}
                        could refer to a truly loving way in the language of
                        love. Additionally, its meaning is real - “leg”,
                        translated word by word.
                      </p>
                      <br />
                    </div>
                  </div>
                  <p>
                    <b style={{ color: '#98242E' }}>Script:</b> To make a
                    “Valentine đỉnh” for girlfriend, a man wants to know about
                    her expectations for Valentine through a blank Wishlist he
                    gave. And what she fill in is just a “true love” feeling.
                    But, not in a literal meaning.
                  </p>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-4 col-sm-12 p-0">
              <div className="work-item__img">
                <img src={img1} alt="" />
                <video src={gif1} autoPlay muted playsInline loop />
              </div>
            </div>
          </div>

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#98242E' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Durex;
