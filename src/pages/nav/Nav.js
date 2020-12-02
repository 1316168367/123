import React, { Component } from "react";

import {TabBar} from "antd-mobile";
import My from "../my/my";
import Cinema from "../cinema/Cinema";
import Hot from "../hot/Hot";

export default class Nav extends Component {
    state={
        selectedTab:'one'
    }

  render() {
    return (
      <div className="nav" style={{height:'100%'}}>

          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition='bottom'
          >
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              title="热映"
              key="Koubei"
              data-seed="logId1"
              selected={this.state.selectedTab === 'one'}
              onPress={() => {
                this.setState({
                  selectedTab: 'one',
                });
              }}
            >
              <Hot></Hot>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              title="影院"
              key="Friend"
              selected={this.state.selectedTab === 'two'}
              onPress={() => {
                this.setState({
                  selectedTab: 'two',
                });
              }}
            >
              <Cinema></Cinema>
            </TabBar.Item>
            <TabBar.Item
              icon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
              }}
              selectedIcon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
              }}
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'three'}
              onPress={() => {
                this.setState({
                  selectedTab: 'three',
                });
              }}
            >
            <My></My>
            </TabBar.Item>
          </TabBar>

      </div>
    );
  }
}
