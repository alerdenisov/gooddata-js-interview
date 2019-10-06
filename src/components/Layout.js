import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;

  display: grid;
  grid-template-columns: ${props => props.sidebarWidth || "300px"} ${props => props.contentWidth || "auto"};
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