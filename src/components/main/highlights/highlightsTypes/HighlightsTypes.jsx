import Bar from "./bar/Bar";
import { TypesStyle } from "./highlightsTypes-style";
import WindIcon from "./wind/WindIcon";

const HighlightsTypes = ({ data, type }) => {
  let added;
  if (type === "bar") {
    added = <Bar width={data.Value} />;
  } else if (type === "wind") {
    added = <WindIcon />;
  }

  return (
    <TypesStyle>
      <h3>{data.Name}</h3>
      <p>
        {data.Value}
        <span>{data.Unit}</span>
      </p>
      {added}
    </TypesStyle>
  );
};

export default HighlightsTypes;
