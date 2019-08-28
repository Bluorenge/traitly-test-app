import React, { Component } from "react";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import { AppConsumer } from "../services/context-app";
import ToggleSlide from "../components/toggle-slide";

const Trands = styled.section`
  padding: 0 20px;
  padding-bottom: 40px;
`;

const TrandsTitleWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
`;

const TrandsTitle = styled.h2`
  font-size: 21px;
  margin-right: 10px;
`;

const TrandsDate = styled.span`
  color: #9b9b9b;
  font-size: 14px;
`;

const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: calc(100% - 20px);
  height: 160px;
  margin-right: 20px;
  margin-bottom: 25px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04);
`;

const ImgWrap = styled.div`
  width: 100px;
  margin-right: 20px;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 400;
`;

const StoreName = styled.span`
  font-size: 13px;
  color: #666;
`;

const StarRatingWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StarRating = styled.span`
  font-size: 14px;
  color: ${props => (props.gold ? "gold" : "#666")};
`;

const ReviewQuantity = styled.span`
  display: block;
  height: 10px;
  margin-left: 5px;
  font-size: 10px;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 25px;
  background-image: linear-gradient(
    -62.95deg,
    rgb(142, 162, 255) 0%,
    rgb(85, 122, 199) 100%
  );
  font-size: 16px;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-size: 12px;
`;

export default class Trends extends Component {
  render() {
    return (
      <AppConsumer>
        {([products, productObj, getIndexProduct]) => {
          return (
            <Trands>
              <Global
                styles={css`
                  .carousel__slider-tray {
                    display: flex;
                  }
                `}
              />
              <TrandsTitleWrap>
                <TrandsTitle>Todays Trending</TrandsTitle>
                <TrandsDate>20th May</TrandsDate>
              </TrandsTitleWrap>
              <CarouselProvider
                naturalSlideWidth={0}
                naturalSlideHeight={0}
                totalSlides={6}
              >
                <Slider>
                  {products.map((product, productIdx) => (
                    <Slide index={product.index} key={product.id}>
                      <ProductWrap>
                        <ImgWrap>
                          <Img
                            src={product.picture}
                            aria-hidden
                            alt="Product picture."
                          />
                        </ImgWrap>
                        <div>
                          <ProductTitle>
                            <Link
                              to={`/product/${product.index}`}
                              onClick={() => getIndexProduct(productIdx)}
                            >
                              {product.name}
                            </Link>
                          </ProductTitle>
                          <StoreName>{product.company}</StoreName>
                          <StarRatingWrap>
                            <StarRating gold>&#9733;</StarRating>
                            <StarRating gold>&#9733;</StarRating>
                            <StarRating gold>&#9733;</StarRating>
                            <StarRating gold>&#9733;</StarRating>
                            <StarRating>&#9733;</StarRating>
                            <ReviewQuantity>(301)</ReviewQuantity>
                          </StarRatingWrap>
                          <Button>Add to cart</Button>
                        </div>
                      </ProductWrap>
                    </Slide>
                  ))}
                </Slider>
                <ToggleSlide />
              </CarouselProvider>
            </Trands>
          );
        }}
      </AppConsumer>
    );
  }
}
