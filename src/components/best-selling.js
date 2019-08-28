import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import { AppConsumer } from "../services/context-app";

const BestSellingWrap = styled.section`
  padding: 0 20px;
  padding-bottom: 40px;
`;

const BestSellingTitleWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
`;

const BestSellingTitle = styled.h2`
  font-size: 21px;
  margin-right: 10px;
`;

const BestSellingDate = styled.span`
  color: #9b9b9b;
  font-size: 14px;
`;

const BestSellingSeeAll = styled.span`
  margin-left: auto;
  color: #557ac7;
  font-size: 14px;
`;

const BestSellingListWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BestSellingItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const ImgWrap = styled.div`
  width: 95px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 5px;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

const StarRatingWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StarRating = styled.span`
  height: 24px;
  color: ${props => (props.gold ? "gold" : "#666")};
`;

const ReviewQuantity = styled.span`
  display: block;
  margin-left: 5px;
  color: #666;
  font-size: 10px;
`;

export default class BestSelling extends Component {
  renderBestSellingProduct(arr) {
    return arr.map(product => {
      return (
        <Slide index={product.index} key={product.id}>
          <BestSellingItem>
            <ImgWrap>
              <Img src={product.picture} aria-hidden alt="Product picture." />
            </ImgWrap>
            <div>
              <ProductTitle>{product.name}</ProductTitle>
              <StarRatingWrap>
                <StarRating gold>&#9733;</StarRating>
                <StarRating gold>&#9733;</StarRating>
                <StarRating gold>&#9733;</StarRating>
                <StarRating gold>&#9733;</StarRating>
                <StarRating>&#9733;</StarRating>
                <ReviewQuantity>(301)</ReviewQuantity>
              </StarRatingWrap>
            </div>
          </BestSellingItem>
        </Slide>
      );
    });
  }

  render() {
    return (
      <AppConsumer>
        {([products, productObj, getIndexProduct]) => {
          return (
            <BestSellingWrap>
              <Global
                styles={css`
                  .carousel__slider-tray {
                    display: flex;
                  }
                `}
              />
              <div>
                <BestSellingTitleWrap>
                  <BestSellingTitle>Best Selling</BestSellingTitle>
                  <BestSellingDate>This week</BestSellingDate>
                  <BestSellingSeeAll>See all</BestSellingSeeAll>
                </BestSellingTitleWrap>
                <BestSellingListWrap>
                  <CarouselProvider
                    naturalSlideWidth={0}
                    naturalSlideHeight={0}
                    totalSlides={6}
                    style={{ width: "40%" }}
                  >
                    <Slider>{this.renderBestSellingProduct(products)}</Slider>
                  </CarouselProvider>
                </BestSellingListWrap>
              </div>
            </BestSellingWrap>
          );
        }}
      </AppConsumer>
    );
  }
}
