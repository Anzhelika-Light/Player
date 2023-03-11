import styled from 'styled-components';
import ReactPlayer from 'react-player';

// Розмітка для респонсивності (масштабування при зміні розміру вікна)
export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
