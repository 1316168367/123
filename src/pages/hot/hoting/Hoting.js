import React, { Component } from "react";
import { List, WingBlank,WhiteSpace } from "antd-mobile";
import { movie_list } from "../../../apis/movie/movie";
import "./Hoting.scss";

export default class Hoting extends Component {
  state = {
    
    movieList: [],
    imgurl: "http://localhost:3333",
  };
  render() {
    let { imgurl } = this.state;
    return (
      <div className="hoting">
        <List className="hoting-movie-list">
          {this.state.movieList.map((item) => {
            return (
              <WingBlank  key={item.id}>
                  <WhiteSpace></WhiteSpace>
                <div className="hoting-movie-introduce">
                  <img
                    className="movie-img"
                    src={imgurl + item.image}
                    alt=""
                  ></img>
                  <div className="movie-introduce-minute">
                    <span className="title">{item.name}</span>
                    <span className="score">
                      淘票票评分<em>{item.point}</em>{" "}
                    </span>
                    <span className="director">导演：{item.director}</span>
                    <span className="protagonist">主演：{item.actors}</span>
                  </div>
                  <button>购票</button>
                </div>
                <WhiteSpace></WhiteSpace>
              </WingBlank>
            );
          })}
        </List>
      </div>
    );
  }
  async componentDidMount() {
    let res = await movie_list({
      state: 1,
    });
    console.log(res.data.data);
    this.setState({
      movieList: res.data.data,
    });
  }
}
