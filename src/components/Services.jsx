import React from "react";
import Service from "./Service";
import StrategyIcon from "./icons/StrategyIcon";
function Services() {
  return (
    <section>
      <h2>Our services</h2>
      <h3>Where we can add value</h3>
      <div className="servicelist">
        <Service
          title="Strategy"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum,
        excepturi quae voluptatum est consequatur libero minima labore
        blanditiis porro fuga nulla odit amet facere et sed, veniam suscipit.
        Inventore."
        >
          <StrategyIcon width="200" height="200" />
        </Service>
      </div>
    </section>
  );
}

export default Services;
