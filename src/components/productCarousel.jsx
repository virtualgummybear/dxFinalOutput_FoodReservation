import React from "react";
import { Avatar, Card, Carousel, Col, Row } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductCarousel = () => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img
            style={contentStyle}
            src="https://www.webdesignmuseum.org/uploaded/exhibitions/web-banners-in-the-90s/macromedia-flash-3-1998.gif"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://www.webdesignmuseum.org/uploaded/exhibitions/web-banners-in-the-90s/pentium-1999.gif"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://www.webdesignmuseum.org/uploaded/exhibitions/web-banners-in-the-90s/netscape-netcenter-personal-finance-1999.gif"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://www.webdesignmuseum.org/uploaded/exhibitions/web-banners-in-the-90s/internet-explorer-3-0-1996.gif"
          />
        </div>
      </Carousel>
    </>
  );
};

export default ProductCarousel;
