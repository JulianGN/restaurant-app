import React from 'react';
import styled, { keyframes } from 'styled-components'; // os keyframes precisam se importados também

const keyFrameLoading = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${keyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
