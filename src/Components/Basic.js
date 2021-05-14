import { select } from "d3";
import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./Wrapper";

export function Basic() {
  const [data, setData] = useState([25, 60, 40, 95, 15]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <Wrapper>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((v) => v + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((v) => v < 50))}>
        Filter Data
      </button>
    </Wrapper>
  );
}
