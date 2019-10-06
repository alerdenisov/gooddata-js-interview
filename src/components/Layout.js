import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;

  display: grid;
  grid-template-columns: ${props => props.sidebar ? `${props.sidebarWidth} ${props.contentWidth}` : "auto"};
  justify-content: stretch;
  justify-items: stretch;
  flex: 1;
`

export const Part = styled.div`
  padding: 20px;
  overflow: auto;
`;

export const Sidebar = styled(Part)`
  border-right: 1px solid #dde4eb
`;

export const Content = styled(Part)`
`;

export const Visualizer = styled.div`
  height: 400px;
`;

export default class Layout extends Component { 
  render() {
    return (
    <Wrapper {...this.props}>
      {this.props.sidebar && <Sidebar>{this.props.sidebar}</Sidebar>}
      <Content>{this.props.children}</Content>
    </Wrapper>
    )
  }
}

Layout.propTypes = {
  sidebar: PropTypes.node,
  sidebarWidth: PropTypes.string,
  contentWidth: PropTypes.string,
}

Layout.defaultProps = {
  sidebarWidth: "300px",
  contentWidth: "auto",
}