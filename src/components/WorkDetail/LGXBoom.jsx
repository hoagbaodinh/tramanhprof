import React from 'react';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import img1 from '../../assets/lg/loa/gif1.webm';
import img2 from '../../assets/lg/loa/image22.png';
import img3 from '../../assets/lg/loa/image10.png';
import img4 from '../../assets/lg/loa/image16.png';
import img5 from '../../assets/lg/loa/image19.png';

import './workPage.css';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const LGXBoom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="work">
        <div className="container-fluid ">
          <div className="work-container">
            <div className="row h-100">
              <div className="col-lg-8 col-sm-12">
                <div className="work-item">
                  {/* Title */}
                  <p
                    style={{ background: '#BB271A' }}
                    className="work-item__title"
                  >
                    LG’s AUDIO VISUAL - ALWAYS ON CONTENT
                  </p>

                  {/* Tagline */}
                  <h2 className="work-item__tagline">
                    FEEL THE GOOD VIBRATION
                  </h2>

                  {/* Content */}
                  <div className="work-item__content">
                    {/* Task */}
                    <div className="work-item__item">
                      <VscTarget className="work-item__icon" color="#BB271A" />
                      <div className="work-item__text">
                        <h3 style={{ color: '#BB271A' }}>TASK</h3>
                        <p>
                          Executing{' '}
                          <b style={{ color: '#BB271A' }}>always-on content</b>{' '}
                          for owned channels to convey the “Chất âm lay động”
                          message.
                        </p>
                      </div>
                    </div>

                    {/* Insight */}
                    <div className="work-item__item">
                      <IoEyeOutline
                        className="work-item__icon"
                        color="#BB271A"
                      />
                      <div className="work-item__text">
                        <h3 style={{ color: '#BB271A' }}>INSIGHT</h3>
                        <p>
                          The sound effect is one of the top criteria for users
                          when selecting an Audio Visual (AV) product. Besides
                          technical specs, they need a vivid and specific
                          description of the sound effects to{' '}
                          <b style={{ color: '#BB271A' }}>
                            feel the experience even before a trial listen.
                          </b>
                        </p>
                      </div>
                    </div>

                    {/* Idea */}
                    {/* <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#BB271A" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#BB271A' }}>IDEA</h3>
                      <p>
                        Based on the concept of "Chất âm lay động" already in
                        place, executing content that consistently convey the
                        message, while revolving around the word "động" to
                        describe various experiences.
                      </p>
                      <br />
                    </div>
                  </div> */}

                    {/* GIF */}
                    <div className="work-item__gif">
                      <div className="row ">
                        <div className=" col-md-5 col-12 ">
                          <video
                            src={img1}
                            alt=""
                            className="work-item__gif-img"
                            autoPlay
                            muted
                            playsInline
                            loop
                          />
                        </div>
                        <div className=" col-md-5 col-12 ">
                          <img
                            src={img2}
                            alt=""
                            className="work-item__gif-img fit-image"
                          />
                        </div>
                        {/* <div className=" col-lg-4 col-12">
                        <img src={img5} alt="" className="work-item__gif-img" />
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMG */}
              <div className="col-lg-4 col-sm-12 p-0">
                <div className="work-item__img">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 align-items-center">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <img src={img3} className="w-100" alt="" />
                </div>
                <div className="col-md-6">
                  <img src={img5} className="w-100" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-item__item">
                <GoLightBulb className="work-item__icon" color="#BB271A" />
                <div className="work-item__text">
                  <h3 style={{ color: '#BB271A' }}>IDEA</h3>
                  <p>
                    Based on the concept of "Chất âm lay động" already in place,
                    executing content that consistently convey the message,
                    while revolving around the word "động" to describe various
                    experiences.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#BB271A' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LGXBoom;
