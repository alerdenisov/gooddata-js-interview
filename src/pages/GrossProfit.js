import React, { Component } from "react";
import { Wrapper, Sidebar, Content } from '../components/Layout';

export default class GrossProfit extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return <Wrapper>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
    </Wrapper>
  }
}