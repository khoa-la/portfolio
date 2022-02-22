import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

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
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My {data?.type} Design</h1>

          <div
            className="bgrid-quarters s-bgrid-thirds cf slide-track"
            id="portfolio-wrapper"
            style={{ width: "100%" }}
          >
            <div>{projects}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
