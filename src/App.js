import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { Global, css } from "@emotion/core";

import DataApp from "./services/data-sevice";
import { AppProvider } from "./services/context-app";
import CatalogPage from "./pages/catalog-page";
import ProductPage from "./pages/product-page";

export default class App extends Component {
  dataApp = new DataApp();

  state = {
    products: [],
    productObj: {}
  };

  getIndexProduct = idx => {
    this.setState(({ products }) => {
      return {productObj: products[idx]};
    });
  };

  componentDidMount() {
    this.upadetData();
  }

  upadetData() {
    this.dataApp.getProduct().then(product => {
      this.setState({ products: [...product] });
    });
  }

  render() {
    const { products, productObj } = this.state;

    return (
      <Router>
        <AppProvider value={[products, productObj, this.getIndexProduct]}>
          <Global
            styles={css`
            body {
              font-family: "Roboto", sans-serif;
                & > div {
                  overflow: hidden;
                }
              }

              body,
              h1,
              h2,
              h3,
              ul,
              li,
              p {
                margin: 0;
                padding: 0;
              }

              li {
                list-style-type: none;
              }

              * {
                box-sizing: border-box;
              }

              a {
                text-decoration: none;
                color: inherit;
              }
            `}
          />
          <Route exact path="/" component={CatalogPage} />
          <Route path="/product" component={ProductPage} />
        </AppProvider>
      </Router>
    );
  }
}
