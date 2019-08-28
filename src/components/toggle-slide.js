import React, { Component } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Dot } from "pure-react-carousel";

import { AppConsumer } from "../services/context-app";

const ToggleProductSlideWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 5px;
`;

const ToggleProductSlideItem = styled.span`
  padding: 0;
  margin-left: 5px;
  border-radius: 2px;
  border: none;
  background-color: rgb(155, 155, 155);
  width: 5px;

  :disabled {
    background-image: linear-gradient(
      -62.95deg,
      rgb(142, 162, 255) 0%,
      rgb(85, 122, 199) 100%
    );
    width: 30px;
  }
`;

export default class ToggleSlide extends Component {
  renderToggleSlide(arr) {
    return arr.map(product => {
      return (
        <ToggleProductSlideItem
          as={Dot}
          key={product.index}
          slide={product.index}
        ></ToggleProductSlideItem>
      );
    });
  }

  render() {
    return (
      <AppConsumer>
        {([products, productObj, getIndexProduct]) => {
          return (
            <ToggleProductSlideWrap>
              {this.renderToggleSlide(products)}
            </ToggleProductSlideWrap>
          );
        }}
      </AppConsumer>
    );
  }
}
