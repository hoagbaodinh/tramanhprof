import React, { useEffect, useState } from 'react';
import { VscTarget } from 'react-icons/vsc';
import { GoLightBulb } from 'react-icons/go';
import { FiArrowLeft } from 'react-icons/fi';
import imgHLMain from '../../assets/ohkraft/honglai/image-main.png';
import imgHL1 from '../../assets/ohkraft/honglai/image30.png';
import imgHL2 from '../../assets/ohkraft/honglai/image35.png';
import imgHL3 from '../../assets/ohkraft/honglai/image36.png';
import imgSCMain from '../../assets/ohkraft/saychesse/image-main.png';
import imgSC1 from '../../assets/ohkraft/saychesse/image29.png';
import gifSC1 from '../../assets/ohkraft/saychesse/gif1.webm';
import gifSC2 from '../../assets/ohkraft/saychesse/gif2.webm';

import './workPage.css';
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';

const tags = [
  {
    id: 'honglai',
    title: <span>OH’KRAFT - TẾT’s GIFT BOX</span>,
    tagline: <span>HỒNG LÀI - HÀI LÒNG</span>,
    rationale: (
      <span>
        Tết is an occasion when people often wish each other well with many
        words like:
        <b style={{ color: '#c4ab89' }}> ‘An’, ‘Tài’, ‘Lộc’, ‘Phúc’ </b>, and
        more. However, for each individual, at different stages of life, they
        will have different aspirations for the new year. Sometimes, wishing for
        what they truly need may go beyond the well-wisher’s expectations. To
        encompass these wishes comprehensively, the phrase{' '}
        <b style={{ color: '#c4ab89' }}>‘Hài Lòng’</b> is the flexible term that
        can perfectly reflect their ‘insight’. When they get what they need,
        that is certainly <b style={{ color: '#c4ab89' }}>satisfaction</b> for a
        new year.
      </span>
    ),
    ideaTitle: 'HỒNG LÀI - HÀI LÒNG',
    idea: (
      <span>
        Taking the main products centered around{' '}
        <b style={{ color: '#c4ab89' }}>'hồng'</b> and{' '}
        <b style={{ color: '#c4ab89' }}>'lài'</b> items to create the wordplay{' '}
        <b style={{ color: '#c4ab89' }}>'Hài Lòng'</b> for a fulfilling new
        year.
      </span>
    ),
    imgCover: imgHLMain,
    img1: imgHL1,
    img2: imgHL2,
    img3: imgHL3,
  },
  {
    id: 'saychesse',
    title: <span>OH’KRAFT - CHEER UP GIFT BOX</span>,
    tagline: <span>SAY CHEESE THE KRAFT</span>,
    rationale: (
      <span>
        In order to bring joy to the recipient, the gift they receive should
        carry a spirit as bright as the positive symbolism of sunflowers.
        Happiness is associated with smiles, so instead of constantly comforting
        someone with 'don't be sad,' the first step is to let them gently begin
        with a smile.
      </span>
    ),
    ideaTitle: 'SAY CHEESE THE KRAFT',
    idea: (
      <span>
        ​​Inspired by the phrase{' '}
        <b style={{ color: '#c4ab89' }}>'Say Cheese!'</b> that instinctively
        makes people smile, combined with a product line embodying the spirit
        and colors of sunflowers to convey a positive energy. Certainly, it
        wouldn't be complete without Cheese products because: 'if just saying
        CHEESE can make you SMILE, imagine what eating it will do'.
      </span>
    ),
    imgCover: imgSCMain,
    img1: imgSC1,
    img2: gifSC1,
    img3: gifSC2,
  },
];

const OHKraft = () => {
  const { workId } = useParams();
  const [curPJ, setCurPJ] = useState(null);
  useEffect(() => {
    const PJ = tags.find((tag) => tag.id === workId);
    setCurPJ(PJ);
  }, [workId]);
  console.log(curPJ);

  return (
    <div>
      <section className="work">
        <div className="container-fluid ">
          {curPJ && (
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="work-item">
                  {/* Title */}
                  <p
                    style={{ background: '#c4ab89' }}
                    className="work-item__title"
                  >
                    {curPJ?.title}
                  </p>

                  {/* Tagline */}
                  <h2 className="work-item__tagline">{curPJ?.tagline}</h2>

                  {/* Content */}
                  <div className="work-item__content">
                    {/* Task */}
                    <div className="work-item__item">
                      <VscTarget className="work-item__icon" color="#c4ab89" />
                      <div className="work-item__text">
                        <h3 style={{ color: '#c4ab89' }}>RATIONALE</h3>
                        <p>{curPJ?.rationale}</p>
                      </div>
                    </div>

                    {/* Idea */}
                    <div className="work-item__item">
                      <GoLightBulb
                        className="work-item__icon"
                        color="#c4ab89"
                      />
                      <div className="work-item__text">
                        <h3 style={{ color: '#c4ab89' }}>IDEA</h3>
                        <p>
                          <b style={{ color: '#c4ab89' }}>{curPJ?.ideaTitle}</b>{' '}
                          <br />
                          {curPJ?.idea}
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>

                  {/* GIF */}
                  <div className="work-item__gif">
                    <div className="row work-item__gif-content">
                      <div className="col-md-4 col-12 honglai-img">
                        <img
                          src={curPJ?.img1}
                          className="work-item__gif-img"
                          alt=""
                        />
                      </div>
                      <div className="col-md-4 col-12 honglai-img ">
                        {workId === 'honglai' && (
                          <img
                            src={curPJ.img2}
                            className="work-item__gif-img"
                            alt=""
                          />
                        )}
                        {workId === 'saychesse' && (
                          <video
                            src={curPJ.img2}
                            className="work-item__gif-img"
                            alt=""
                            autoPlay
                            playsInline
                            muted
                            loop
                          />
                        )}
                      </div>
                      <div className="col-md-4 col-12 honglai-img">
                        {workId === 'honglai' && (
                          <img
                            src={curPJ.img3}
                            className="work-item__gif-img"
                            alt=""
                          />
                        )}
                        {workId === 'saychesse' && (
                          <video
                            src={curPJ.img3}
                            className="work-item__gif-img"
                            alt=""
                            autoPlay
                            playsInline
                            muted
                            loop
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMG */}
              <div className="col-md-5 col-sm-12 p-md-0">
                <div className="work-item__img">
                  <img src={curPJ?.imgCover} alt="" />
                </div>
              </div>
            </div>
          )}

          <div className="work__back">
            <HashLink to={'/#work'} style={{ background: '#c4ab89' }}>
              <FiArrowLeft /> Back to my works
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OHKraft;
