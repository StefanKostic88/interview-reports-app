import {
  LoaderOuterContainerStyled,
  LoaderContainerStyled,
  CubeOneStyled,
  CubeTwoStyled,
  CubeThreeStyled,
  CubeFourStyled,
  CubeFiveStyled,
  CubeSixStyled,
  CubeSevenStyled,
  CubeEightStyled,
  CubeNineStyled,
} from "./LoaderStyles";
const LoaderModal = () => {
  return (
    <LoaderOuterContainerStyled>
      <LoaderContainerStyled>
        <CubeOneStyled />
        <CubeTwoStyled />
        <CubeThreeStyled />
        <CubeFourStyled />
        <CubeFiveStyled />
        <CubeSixStyled />
        <CubeSevenStyled />
        <CubeEightStyled />
        <CubeNineStyled />
      </LoaderContainerStyled>
    </LoaderOuterContainerStyled>
  );
};

export default LoaderModal;

// return (
//   <div>
//     <div className={`${classes["sk-cube-grid"]}`}>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube1"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube2"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube3"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube4"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube5"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube6"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube7"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube8"]}} bg-primary`}
//       ></div>
//       <div
//         className={`${classes["sk-cube"]} ${classes["sk-cube9"]}} bg-primary`}
//       ></div>
//     </div>
//   </div>
// );
