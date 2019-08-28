import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

import { AppConsumer } from "../services/context-app";

const ProductWrap = styled.section`
  padding: 40px 20px;
`;

const ProductBack = styled.div`
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ProductTopContentWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  width: calc(65% - 40px);
`;

const ProductImgWrap = styled.div`
  width: 35%;
`;

const ImgWrap = styled.div`
  width: 120px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 5px;
`;

const ProductTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 400;
`;

const StoreName = styled.span`
  color: #666;
  font-size: 14px;
`;

const ProductDesc = styled.p`
  color: #9b9b9b;
  font-size: 12px;
  margin-bottom: 30px;
`;

const ProductPrice = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const StarRatingWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const StarRatingTitle = styled.span`
  display: block;
  color: #4a4a4a;
  font-size: 13px;
`;

const StarRating = styled.span`
  font-size: 18px;
  color: ${props => (props.gold ? "gold" : "#666")};
`;

const ReviewQuantity = styled.span`
  display: block;
  margin-left: 5px;
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

const SizeWrap = styled.div`
  margin-bottom: 35px;
`;

const SizeTitle = styled.span`
  display: block;
  color: #4a4a4a;
  font-size: 13px;
  margin-bottom: 15px;
`;

const SizeItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 285px;
`;

const SizeItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 85px;
  height: 46px;
  padding-left: 10px;
  border-radius: 2px;
  border: 1px solid #8ea2ff;
`;

const SizeItemName = styled.span`
  display: block;
  color: #4a4a4a;
  font-size: 14px;
`;

const SizeItemProportions = styled.span`
  display: block;
  color: #9b9b9b;
  font-size: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CounterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  height: 20px;
  margin-right: 15px;
`;

const CounterArrow = styled.span`
  color: #8da1fe;
`;

const CounterCurrentNumber = styled.span``;

const ToggleProductSlideWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 3px;
`;

const ToggleProductSlideItem = styled.span`
  display: block;
  margin-left: 3px;
  border-radius: 2px;
  ${props =>
    props.active
      ? "background-image: linear-gradient( -62.95deg, rgb(142,162,255) 0%, rgb(85,122,199) 100%);"
      : "background-color: rgb(155, 155, 155);"};
  width: ${props => (props.active ? "20px" : "3px")};
`;

export default class Product extends Component {
  getSizes(small, medium, big) {
    if (small) {
      return (
        <SizeItem>
          <SizeItemName>Small</SizeItemName>
          <SizeItemProportions>10cm x 24cm</SizeItemProportions>
        </SizeItem>
      );
    }

    if (medium) {
      return (
        <SizeItem>
          <SizeItemName>Medium</SizeItemName>
          <SizeItemProportions>14cm x 28cm</SizeItemProportions>
        </SizeItem>
      );
    }

    if (big) {
      return (
        <SizeItem>
          <SizeItemName>Large</SizeItemName>
          <SizeItemProportions>18cm x 32cm</SizeItemProportions>
        </SizeItem>
      );
    }
  }

  render() {
    return (
      <AppConsumer>
        {([products, productObj, getIndexProduct]) => {
          return (
            <ProductWrap>
              <ProductBack>
                <Link to="/">&larr;</Link>
              </ProductBack>
              <ProductTopContentWrap>
                <ProductInfoWrap>
                  <ProductTitle>{productObj.name}</ProductTitle>
                  <StoreName>{productObj.company}</StoreName>
                  <ProductPrice>${productObj.price}</ProductPrice>
                  <ProductDesc>{productObj.about}</ProductDesc>
                </ProductInfoWrap>
                <ProductImgWrap>
                  <ImgWrap>
                    <Img
                      src={productObj.picture}
                      aria-hidden
                      alt="Product picture."
                    />
                  </ImgWrap>
                  <ToggleProductSlideWrap>
                    <ToggleProductSlideItem active />
                    <ToggleProductSlideItem />
                    <ToggleProductSlideItem />
                  </ToggleProductSlideWrap>
                </ProductImgWrap>
              </ProductTopContentWrap>
              <div>
                <StarRatingTitle>Rating</StarRatingTitle>
                <StarRatingWrap>
                  <StarRating gold>&#9733;</StarRating>
                  <StarRating gold>&#9733;</StarRating>
                  <StarRating gold>&#9733;</StarRating>
                  <StarRating gold>&#9733;</StarRating>
                  <StarRating>&#9733;</StarRating>
                  <ReviewQuantity>(301)</ReviewQuantity>
                </StarRatingWrap>
              </div>
              <SizeWrap>
                <SizeTitle>Size</SizeTitle>
                <SizeItemWrap>
                  {this.getSizes(
                    productObj.sizes.small,
                    productObj.sizes.medium,
                    productObj.sizes.big
                  )}
                </SizeItemWrap>
              </SizeWrap>
              <ButtonWrap>
                <CounterWrap>
                  <CounterArrow>&lt;</CounterArrow>
                  <CounterCurrentNumber>1</CounterCurrentNumber>
                  <CounterArrow>&gt;</CounterArrow>
                </CounterWrap>
                <Button>Add to cart</Button>
              </ButtonWrap>
            </ProductWrap>
          );
        }}
      </AppConsumer>
    );
  }
}
