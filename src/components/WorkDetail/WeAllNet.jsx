import React from 'react';
import { Link } from 'react-router-dom';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import img1 from '../../assets/weallnet/image4.jpg';

import './workPage.css';

const WeAllNet = () => {
  return (
    <div>
      <section className="work">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#7441EF' }}
                  className="work-item__title"
                >
                  WEALLNET - LUNAR NEW YEAR SKITS
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">THE GENZ OFFICE GOD</h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#7441EF" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#7441EF' }}>TASK</h3>
                      <p>
                        Highlighting the fun, dynamic corporate culture and
                        counting down to the Lunar New Year.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#7441EF" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#7441EF' }}>INSIGHT</h3>
                      <p>
                        The office environment is often associated with various
                        dramas, ranging from small to large, from joy to
                        tension. Furthermore, the Gen Z generation is
                        exceptionally sharp and eager to listen to every drama
                        story of their own office.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#7441EF" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#7441EF' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#7441EF' }}>THE GENZ OFFICE GOD</b>{' '}
                        <br />
                        In Vietnamese culture, before the Lunar New Year, there
                        is a tradition of{' '}
                        <b style={{ color: '#7441EF' }}>
                          {' '}
                          "sending the Kitchen God to heaven”.{' '}
                        </b>
                        The Kitchen God will deliver an annual report on the
                        household’s activities to the Jade Emperor.
                        <br />
                        Inspired by that culture,{' '}
                        <b style={{ color: '#7441EF' }}>
                          {' '}
                          Weallnet's Office God
                        </b>{' '}
                        will also reports everything he knows about this office
                        to the CEO. He will present all matters, from employees'
                        dramas to the company's valuable achievements throughout
                        the year. In the end, he will be playfully teased by the
                        company's employees for revealing too much.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-4 col-sm-12 p-0">
              <div className="work-item__img">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

          <div className="work__back">
            <Link to={'/'} style={{ background: '#7441EF' }}>
              <FiArrowLeft /> Back to my works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAllNet;
