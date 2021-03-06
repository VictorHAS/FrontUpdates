/*
 * @Author: Marcus Dantas
 * @Date: 2019-01-27 12:11:20
 * @Last Modified by: Marcus Dantas
 * @Last Modified time: 2019-02-03 22:00:20
 */

import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="row row-cards row-deck">
        <div className="col-12">
          <div className="card">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
