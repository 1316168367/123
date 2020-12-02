import React, { Component } from "react";
import { WingBlank } from "antd-mobile";
import "./cinema.scss";
import { celima_list } from "../../apis/movie/movie";
import {imgurl} from '../../utils/utils'

export default class Cinema extends Component {
  state = {
    cinemaList: [],
  };
  render() {
    return (
      <div className="cinema">
        <div className="cinema-top">
          <span>成都▼</span>
          <img src={imgurl('icon_search.png')} alt=''></img>
        </div>
        <div className="cinema-list">
          {this.state.cinemaList.map((item) => {
            return <WingBlank key={item.name}>
              <div  className="cinema-list-details">
                <div className="title">
                  <h2>{item.name}</h2>
                  <span className="price">{item.price}</span>
                </div>
                <span className="site">{item.address}</span>
                <span className="describe">{item.type}</span>
              </div>
            </WingBlank>;
          })}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    var res = await celima_list({});
    console.log(res);
      this.setState({
        cinemaList: res.data.data
    })
  }
}
