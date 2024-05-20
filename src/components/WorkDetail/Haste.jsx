import React from 'react';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import mainIMG from '../../assets/haste/image8.jpg';
import img1 from '../../assets/haste/image13.jpg';
import img2 from '../../assets/haste/image14.jpg';
import img3 from '../../assets/haste/image15.jpg';
import img4 from '../../assets/haste/image2.png';

import './workPage.css';
import { HashLink } from 'react-router-hash-link';

const Haste = () => {
  return (
    <div>
      <section className="work">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#5A21A5' }}
                  className="work-item__title"
                >
                  HASTE STORE - FANPAGE CONTENT
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">THE SOCKS PROFILE</h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#5A21A5" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#5A21A5' }}>TASK</h3>
                      <p>
                        Provide socks products’s information to customers
                        through posts on the Fanpage.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#5A21A5" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#5A21A5' }}>INSIGHT</h3>
                      <p>
                        The brand's customers are young individuals who enjoy
                        interesting and vibrant content without it being overly
                        commercial.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#5A21A5" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#5A21A5' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#5A21A5' }}>THE SOCKS PROFILE</b>{' '}
                        <br />
                        The Sock Profile series serves as an{' '}
                        <b style={{ color: '#5A21A5' }}>
                          {' '}
                          individual profile for each socks product{' '}
                        </b>
                        , providing all the details about its name, style,
                        color, and material. The storytelling style is intimate
                        and easy to remember.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div className="work-item__gif">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <img src={img1} className="work-item__gif-img" alt="" />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <img src={img2} className="work-item__gif-img" alt="" />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <img src={img3} className="work-item__gif-img" alt="" />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <img src={img4} className="work-item__gif-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-4 col-md-5 col-sm-12 p-0">
              <div className="work-item__img">
                <img src={mainIMG} alt="" />
              </div>
            </div>
          </div>

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#5A21A5' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Haste;
