import { useState } from "react";
import { SchoolNav } from "../../components/navbar";
import heroImg from "../../assets/school-building.jpg";
import { SimpleCard, ExtraCard } from "../../components/card";
import { prestasi, extra } from "../../data/list";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "../../components/swiper/Swiper";
import { Button } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

import "./School.css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// https://www.free-css.com/free-css-templates/page237/varsity

export const School = () => {
  const array = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(-1);

  const opts = {
    height: "350",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <>
      <SchoolNav />
      <section className="hero position-relative">
        <img
          src={heroImg}
          alt="..."
          style={{ width: "100%", height: "500px", zIndex: "-1" }}
          className="position-absolute"
        />
        <div className="w-100 d-flex flex-column align-items-center gap-3 pt-3 text-white">
          <h1 className="school-name fw-bold mt-2 text-shadow-md ">
            Skuy University
          </h1>
          <h4 className="p-2 border-bottom border-info text-shadow-md ">
            Welcome
          </h4>
          <h1 className="fw-bold text-shadow-md ">Education For Everyone</h1>
          <p className="fs-4 text-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nobis repudiandae incidunt est, ex ea.
          </p>
        </div>
      </section>
      <section className="container d-flex justify-content-around w-100">
        {prestasi.map((item) => {
          return (
            <SimpleCard
              key={item.id}
              title={item.total}
              desc={item.desc}
              bg={item.bg}
            />
          );
        })}
      </section>
      <section className="news container text-center bg-secondary text-white px-3 py-5">
        <h1 className="fw-semibold border-bottom border-light mb-4">
          LATEST NEWS
        </h1>
        <Swiper
          slidesPerView={4}
          breakpoints={{
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            420: { slidesPerView: 1 },
          }}
          autoplay={{ delay: 5000 }}
          spaceBetween={15}
          navigation={true}
        >
          {array.map((item, index) => {
            return (
              <SwiperSlide key={item}>
                <div
                  className="swiper-card rounded bg-light text-dark"
                  onMouseEnter={() => {
                    setHover(true);
                    setSwiperIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                    setSwiperIndex(index);
                  }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={heroImg}
                      alt=""
                      width={"100%"}
                      height={200}
                      className={`swiper-img rounded-top ${
                        hover && index == swiperIndex ? "scale" : ""
                      }`}
                    />
                  </div>

                  <div className="p-2">
                    <h2>Title In Here</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta cum est eaque iste magnam consequatur dolor, labore
                      delectus sint eos...
                    </p>
                    <Button variant="outline-dark w-100">READ MORE</Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="extracurricular container mt-5 text-center">
        <h1 className="border-bottom border-info p-2 mb-4">EXTRACURRICULAR</h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {extra.map((item) => {
            return <ExtraCard key={item.id} data={item} />;
          })}
        </div>
      </section>
      <section className="about container d-flex justify-content-around bg-white mb-4">
        <div className="about-desc col-12 col-md-6">
          <h1 className="fw-semibold">ABOUT US</h1>
          <div className="d-flex flex-column gap-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus corrupti quis veritatis, quas aliquid incidunt
              animi eos aperiam et sequi, fuga sed, accusamus aut excepturi
              saepe molestiae ipsum unde quae vel eaque repudiandae provident
              qui. Est saepe at culpa, labore nihil sunt
            </p>
            <ul>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, et.
                </p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ethial albdoa.
                </p>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus corrupti quis veritatis
            </p>
          </div>
        </div>
        <div className="yt-trailer col-12 col-md-6 text-end">
          <YouTube videoId="eZqdLaJJDWc" opts={opts} onReady={onPlayerReady} />
        </div>
      </section>
      <Footer />
    </>
  );
};
