import React from "react";
import "./style.css";
import { AiOutlineBank } from "react-icons/ai";
import { BsFillPeopleFill, BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { BiCopyAlt } from "react-icons/bi";
import { SiVlcmediaplayer } from "react-icons/si";
// import { CgScreen } from "react-icons/cg";
// import { MdEmail } from "react-icons/md";
import { Container } from "../../globalStyles";

const CardSection2 = () => {
  return (
    <>
      {/* <!-- START SECTION SERVICES --> */}
      <section className="section-services">
        <Container>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-8">
                <div className="header-section">
                  <h2 className="title">We've Got Your Covered</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur malesuada fermentum purus, eu volutpat nisi
                    laoreet id. Phasellus fringilla accumsan metus, at tempor
                    est hendrerit et.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <AiOutlineBank />
                    </span>
                    <h3 className="title">Global coverage</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk">Learn More</a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service -->
				<!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <BsFillPeopleFill />
                    </span>
                    <h3 className="title">It Management</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service -->
				<!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <BsBarChartFill />
                    </span>
                    <h3 className="title">Software Development</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service -->
				<!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <BsGraphUp />
                    </span>
                    <h3 className="title">Brand Strategy</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service -->
				<!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <BiCopyAlt />
                    </span>
                    <h3 className="title">Business Consulting</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service -->
				<!-- Single Service --> */}
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <SiVlcmediaplayer />
                    </span>
                    <h3 className="title">Website Design</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="https://www.google.lk" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
              {/* <!-- / End Single Service --> */}

              {/* <div className="last">
                <div className="col-md-6 col-lg-3">
                  <div className="single-service">
                    <div className="content">
                      <span className="icon">
                        <CgScreen />
                      </span>
                      <h3 className="title">Business Consulting</h3>
                      <p className="description">
                        Mauris volutpat urna tristique finibus iaculis. Morbi
                        facilisis, justo eu vulputate elementum, est augue
                        tincidunt ante, sed efficitur leo ligula vel velit.
                      </p>
                      <a href="https://www.google.lk" className="learn-more">
                        Learn More
                      </a>
                    </div>
                    <span className="circle-before"></span>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="single-service">
                    <div className="content">
                      <span className="icon">
                        <MdEmail />
                      </span>
                      <h3 className="title">Business Consulting</h3>
                      <p className="description">
                        Mauris volutpat urna tristique finibus iaculis. Morbi
                        facilisis, justo eu vulputate elementum, est augue
                        tincidunt ante, sed efficitur leo ligula vel velit.
                      </p>
                      <a href="https://www.google.lk" className="learn-more">
                        Learn More
                      </a>
                    </div>
                    <span className="circle-before"></span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </section>
      {/* <!-- / END SECTION SERVICES --> */}

      {/* <!-- Not Important Code --> */}
      {/* <div className="watch">
		<a href="https://www.youtube.com/watch?v=tDulPgj_JeQ" target="_blank">
			<span>Watch me code this!</span>
			<img src="https://i.ibb.co/LvyBs8v/youtube-logo-png-3566.png" alt="">
			<a>
	</div> */}
    </>
  );
};

export default CardSection2;
