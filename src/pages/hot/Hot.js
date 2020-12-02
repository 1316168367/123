import React, { Component } from "react";
import { Tabs,Badge  } from "antd-mobile";
import Hoting from './hoting/Hoting'
import AboutHot from './aboutHot/AboutHot'

export default class Hot extends Component {
  render() {
    const tabs = [
      { title: <Badge >正在热映</Badge>,sub:'1' },
      { title: <Badge >即将上映</Badge>,sub:'2' },
    ];
    return (
      <div style={{height:'100%'}}>
        <Tabs
          tabs={tabs}
          initialPage={0}
          // initialPage={'t1'}
          /* onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }} */
        >
          <div key='1' style={{height:'100%',backgroundColor:'#fff'}}>
              <Hoting></Hoting>
          </div>
          <div key='2' style={{height:'100%',backgroundColor:'#fff'}}>
              <AboutHot></AboutHot>
          </div>
        </Tabs>
      </div>
    );
  }
}
