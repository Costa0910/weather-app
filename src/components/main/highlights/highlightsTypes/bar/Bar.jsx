import { BarContainer } from "./bar-style";

const Bar = (props) => {
  return (
    <BarContainer>
      <div className="numbers">
        <div>0</div>
        <div>50</div>
        <div>100</div>
      </div>
      <div className="bar">
        <div
          className="width-color"
          style={{ height: "6px", width: `${props.width}%` }}
        ></div>
      </div>
      <div className="percentage">%</div>
    </BarContainer>
  );
};

export default Bar;
