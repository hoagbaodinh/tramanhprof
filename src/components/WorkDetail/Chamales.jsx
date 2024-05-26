import React from 'react';
import { VscTarget } from 'react-icons/vsc';
import { IoEyeOutline } from 'react-icons/io5';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

import 'swiper/css';
import 'swiper/css/scrollbar';
import './workPage.css';

const Chamales = () => {
  return (
    <div>
      <section className="work">
        <div className="container-fluid work-item__container ">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="work-item">
                {/* Title */}
                <p
                  style={{ background: '#132A45' }}
                  className="work-item__title"
                >
                  CHALAMES - AIMANT WALLET LAUNCH
                </p>

                {/* Tagline */}
                <h2 className="work-item__tagline">
                  ENDLESS SUMMER FOR EVERYONE
                </h2>

                {/* Content */}
                <div className="work-item__content">
                  {/* Task */}
                  <div className="work-item__item">
                    <VscTarget className="work-item__icon" color="#132A45" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#132A45' }}>TASK</h3>
                      <p>
                        The emotional video to launch the new version of “Aimant
                        Wallet” named “Aimant Summer”.
                      </p>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="work-item__item">
                    <IoEyeOutline className="work-item__icon" color="#132A45" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#132A45' }}>INSIGHT</h3>
                      <p>
                        The consumers of Chalames often confused about the{' '}
                        <b>style suitability</b> and the <b>durability</b> of
                        Aimant Wallet.
                      </p>
                    </div>
                  </div>

                  {/* Idea */}
                  <div className="work-item__item">
                    <GoLightBulb className="work-item__icon" color="#132A45" />
                    <div className="work-item__text">
                      <h3 style={{ color: '#132A45' }}>IDEA</h3>
                      <p>
                        <b style={{ color: '#132A45' }}>
                          ENDLESS SUMMER FOR EVERYONE{' '}
                        </b>
                        <br />
                        The new Aimant is launched in summer, and “Summer” is
                        also an unofficial name of the product.
                        <br />
                        Offering their concern:
                        <br /> <BsDot /> Suitability? For Everyone.
                        <br /> <BsDot /> Durability? Endless.
                      </p>
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div className="work-item__gif ">
                  <small>
                    <i className="text-center">
                      “Summer is for everyone, as long as your heart have a
                      place for it.” - script
                    </i>
                  </small>
                  <div className="row work-item__gif-content">
                    <div className="col-lg-3 col-sm-6">
                      {/* <img src={img1} className="work-item__gif-img" alt="" /> */}
                      <video
                        src="https://res.cloudinary.com/papindev/video/upload/v1716178902/tramanh-pj/chalmes/rjbv0p1hqxlobo7k0xhk.webm"
                        autoPlay
                        muted
                        loop
                        className="work-item__gif-img"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src="https://res.cloudinary.com/papindev/video/upload/v1716178902/tramanh-pj/chalmes/iqowkopkloahx9uj5wqp.webm"
                        autoPlay
                        muted
                        loop
                        className="work-item__gif-img"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src="https://res.cloudinary.com/papindev/video/upload/v1716178902/tramanh-pj/chalmes/wsvfhtaaycxufzqfvelr.webm"
                        autoPlay
                        muted
                        loop
                        className="work-item__gif-img"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <video
                        src="https://res.cloudinary.com/papindev/video/upload/v1716178902/tramanh-pj/chalmes/z9vp1iyqhozel2xvpgwd.webm"
                        autoPlay
                        muted
                        loop
                        className="work-item__gif-img"
                      />
                    </div>
                  </div>
                  <small>
                    <i className="text-center">
                      *Each gender places their “Summer” into the heart's
                      position.
                    </i>
                  </small>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className="col-lg-4 col-sm-12 p-0">
              <div className="work-item__img">
                <video
                  controls
                  src="https://res.cloudinary.com/papindev/video/upload/v1715929352/tramanh-pj/vtyrp3adcgnfhjmmq3ky.mp4"
                  type="video/mp4"
                />
                {/* <small className="pt-3">
                  <i>
                    Video tells a story about summer in the natural way. Not
                    only the story about a summer occasion, but also the
                    storytelling about product through visual frame
                  </i>
                </small> */}
              </div>
            </div>
          </div>

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#132A45' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chamales;
