import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./Wrapper";
import { line, select, curveCardinal } from "d3";

export function LineChart() {
  const svgRef = useRef();
  const [data, setData] = useState([20, 35, 15, 40, 55, 85, 20]);

  useEffect(() => {
    const svg = select(svgRef.current);

    const myLine = line()
      .x((_, i) => i * 50)
      .y((v) => 150 - v)
      .curve(curveCardinal);

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <Wrapper>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((v) => v + 5))}>
        Update Data
      </button>
    </Wrapper>
  );
}
