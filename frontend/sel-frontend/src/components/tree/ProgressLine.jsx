import React, { useEffect, useState } from "react";
import "./ProgressLine.css";

const ProgressLine = ({
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => (
          <div
            key={index}
            style={{
              width: widths[index],
              backgroundColor: item.color
            }}
            className="progressVisualPart"
          />
        ))}
      </div>
    </>
  );
};

export default ProgressLine;
