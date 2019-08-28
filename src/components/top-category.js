import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import { AppConsumer } from "../services/context-app";

const BestSelling = styled.section`
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

const BestSellingSeeAll = styled.span`
  margin-left: auto;
  color: #557ac7;
  font-size: 14px;
`;

const BestSellingListWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BestSellingItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 70px;
  margin-right: 15px;
`;

const ImgWrap = styled.div`
  width: 72px;
  margin-bottom: 12px;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export default class TopCategory extends Component {
  renderBestSellingProduct(arr) {
    return arr.map(product => {
      return (
        <Slide index={product.index} key={product.id}>
          <BestSellingItemWrap>
            <ImgWrap>
              <Img src={product.picture} aria-hidden alt="Product picture." />
            </ImgWrap>
            <ProductTitle>{product.name}</ProductTitle>
          </BestSellingItemWrap>
        </Slide>
      );
    });
  }

  render() {
    return (
      <AppConsumer>
        {([products, productObj, getIndexProduct]) => {
          return (
            <BestSelling>
              <BestSellingTitleWrap>
                <BestSellingTitle>Best Selling</BestSellingTitle>
                <BestSellingSeeAll>See all</BestSellingSeeAll>
              </BestSellingTitleWrap>
              <BestSellingListWrap>
                <CarouselProvider
                  naturalSlideWidth={0}
                  naturalSlideHeight={0}
                  totalSlides={6}
                  style={{ width: "30%" }}
                >
                  <Slider>{this.renderBestSellingProduct(products)}</Slider>
                </CarouselProvider>
              </BestSellingListWrap>
            </BestSelling>
          );
        }}
      </AppConsumer>
    );
  }
}
