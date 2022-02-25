import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const options = {
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = `images/${data.type}/` + projects.image;
      return (
        <SRLWrapper options={options}>
          <div key={projects.id} className="columns portfolio-item slide">
            <div className="item-wrap">
              <img
                alt={projects.title}
                src={projectImage}
                className="portfolio__image"
              />
            </div>
          </div>
        </SRLWrapper>
      );
    });
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My {data?.type} Design</h1>
        </div>
      </div>
      <SRLWrapper options={options}>
        <Slider {...settings}>
          {data?.projects.map(function (project, index) {
            console.log(data);
            console.log(project);
            return (
              <React.Fragment key={index}>
                <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`images/${data.type}/${project.image}`}
                      style={{
                        width: "480px",
                        maxHeight: "480px",
                        objectFit: "contain",
                        paddingLeft: "20px",
                      }}
                      className="portfolio__image"
                    />
                  </Card>
                </Col>
              </React.Fragment>
            );
          })}
        </Slider>
      </SRLWrapper>
    </section>
  );
};

export default Portfolio;
