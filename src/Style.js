import styled from "styled-components";

/***********************      
           BUTTON SECTION 
           **********************/
export const Wrapper = styled.div`
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh; //max height
  width: 100%;
  font-family: "Roboto", sans-serif;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://avante.biz/wp-content/uploads/Wallpaper-Red/Wallpaper-Red-001.jpg");
`;

export const Main = styled.div`
  width: 374px;
  margin: 0 auto;
`;

export const SpinButton = styled.button`
  border: none;
  outline: none;
  background: red;
  height: 50px;
  width: 150px;

  display: ${props => (props.hide ? "none" : "inline-block")};
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  cursor: pointer;
  color: #fff;

  padding: 12px;
  margin: 12px;
  position: relative;
  left: 130px;
  border-radius: 5px;

  :hover {
    border: 2px solid white;
    background-color: green;
    text-align: center;
    color: white;
    font-size: 20px;
    transition: 0.2s ease-out;
  }

  :active {
    font-size: 21px;
  }
`;

export const ResetButton = styled.button`
  border: none;
  outline: none;
  background: red;
  height: 50px;
  width: 150px;

  font-family: "Roboto", sans-serif;
  font-size: 20px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  color: #fff;

  display: ${props => (props.hide ? "none" : "inline-block")};
  padding: 12px;
  margin: 12px;

  border-radius: 5px;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
  transition: opacity 0.24s linear;

  padding: 12px;
  margin: 12px;
  position: relative;
  left: 130px;

  :hover {
    border: 2px solid white;
    background-color: green;
    text-align: center;
    color: white;
    font-size: 20px;
    transition: 0.2s ease-out;
  }

  :active {
    font-size: 21px;
  }
`;

export const ButtonLabel = styled.span`
  padding: 12px;
  white-space: nowrap;
`;

/***********************      
           WHEEL SECTION 
           **********************/
export const Plate = styled.div`
  background-color: gray;
  width: 450px;
  height: 450px;
  margin: 12px;
  border-radius: 50%;
  position: relative;

  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
  }

  ::after {
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border: 6px solid #b2854b;
    box-shadow: inset 0px 0px 0px 2px #b2854b, 0px 0px 0px 2px #b2854b;
  }

  ::before {
    background: rgba(0, 0, 0, 0.65);
    border: 1px solid silver;
    box-shadow: inset 0px 0px 0px 2px #808080;
    top: 12%;
    left: 12%;
    right: 12%;
    bottom: 12%;
    z-index: 1;
  }
`;

export const Ball = styled.p`
  position: absolute;
  top: 24%;
  bottom: 21%;
  left: 24%;
  right: 22%;
  color: #fff;
  font-size: 36px;
  z-index: 5;
  transform: rotateZ(-2821deg);
`;

export const Inner = styled.div`
  display: block;
  height: 450px;
  width: 450px;
  position: relative;

  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
  }

  ::after {
    // results circle
    z-index: 3;
    top: 24%;
    right: 24%;
    bottom: 24%;
    left: 24%;
    background-color: #caa881; //results circle background color
    border: 3px solid #866538; //results circle border color
  }

  #rest::before {
    transition: top 0.5s ease-in, right 0.5s ease-in, bottom 0.5s ease-in,
      left 0.5s ease-in;
    top: 25%;
    right: 25%;
    bottom: 24%;
    left: 25%;
  }
`;

export const Number = styled.div`
  width: 135px;
  height: 225px;
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 0;
  left: calc(50% - (130px / 2));
  transform-origin: 50% 100%;
  background-color: transparent;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 175px solid black;
  box-sizing: border-box;

  :nth-child(1) {
    -webkit-transform: rotateZ(35.027027028deg);
    transform: rotateZ(35.027027028deg);
    border-top-color: red;
  }

  :nth-child(2) {
    -webkit-transform: rotateZ(70.054054056deg);
    transform: rotateZ(70.054054056deg);
  }

  :nth-child(3) {
    -webkit-transform: rotateZ(105.081081084deg);
    transform: rotateZ(105.081081084deg);
    border-top-color: red;
  }

  :nth-child(4) {
    -webkit-transform: rotateZ(140.108108112deg);
    transform: rotateZ(140.108108112deg);
  }

  :nth-child(5) {
    -webkit-transform: rotateZ(175.13513514deg);
    transform: rotateZ(175.13513514deg);
    border-top-color: red;
  }

  :nth-child(6) {
    -webkit-transform: rotateZ(210.162162168deg);
    transform: rotateZ(210.162162168deg);
  }

  :nth-child(7) {
    -webkit-transform: rotateZ(245.189189196deg);
    transform: rotateZ(245.189189196deg);
    border-top-color: red;
  }

  :nth-child(8) {
    -webkit-transform: rotateZ(280.216216224deg);
    transform: rotateZ(280.216216224deg);
  }

  :nth-child(9) {
    -webkit-transform: rotateZ(315.243243252deg);
    transform: rotateZ(315.243243252deg);
    border-top-color: red;
  }

  :nth-child(10) {
    border-top-color: green;
  }
`;

export const Pit = styled.span`
  color: #fff;
  padding-top: 12px;
  width: 100px;
  display: inline-block;
  font-size: 25px;
  -webkit-transform: scale(1, 2);
  transform: scale(1, 2);
  position: absolute;
  top: -175px;
  left: -16px;
`;

/***********************      
           RESULTS PREVIEW SECTION 
           **********************/

export const Data = styled.div`
  display: block;
  position: absolute;
  top: 30%;
  right: 30%;
  bottom: 30%;
  left: 30%;
  border-radius: 50%;
  perspective: 2000px;
  z-index: 100;
`;

export const DataInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: -webkit-transform 0.21s;
  transition: transform 0.21s;
  transition: transform 0.21s, -webkit-transform 0.21s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
  color: #fff;
  font-size: 34px;
  margin: auto;
  line-height: 1.4;
  padding-top: 36px;
`;

export const Result = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  color: #fff;
  align-items: center;
  backface-visibility: hidden;
  background-color: ${props => props.slotColor};
`;
export const ResultNumber = styled.div`
  font-size: 72px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 12px;
`;
export const ResultColor = styled.div`
  text-transform: uppercase;
  font-size: 21px;
  line-height: 1;
`;
