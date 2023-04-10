import styled, { keyframes } from "styled-components";

export const flash = keyframes`
0%,
70%,
100% {
  -webkit-transform: scale3D(1, 1, 1);
  transform: scale3D(1, 1, 1);
}
35% {
  -webkit-transform: scale3D(0, 0, 1);
  transform: scale3D(0, 0, 1);
}
`;

export const LoaderContainerStyled = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 auto;
`;

export const CubsStyled = styled.div`
  width: 33%;
  height: 33%;
  background-color: hsl(29, 80%, 70%);
  float: left;
  -webkit-animation: ${flash} 1.3s infinite ease-in-out;
  animation: ${flash} 1.3s infinite ease-in-out;
`;

export const CubeOneStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;
export const CubeTwoStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
`;
export const CubeThreeStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
`;
export const CubeFourStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
`;
export const CubeFiveStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;
export const CubeSixStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
`;
export const CubeSevenStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
`;
export const CubeEightStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
`;
export const CubeNineStyled = styled(CubsStyled)`
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
`;

export const LoaderOuterContainerStyled = styled.div`
  flex: 1;
  display: flex;
  justify-self: center;
  align-items: center;
  margin-top: 10rem;
`;
