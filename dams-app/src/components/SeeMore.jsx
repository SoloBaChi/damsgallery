import React from "react";
import { Link } from "react-router-dom";

function SeeMore(props) {
  return (
    <section>
      <div className="see-more">
        <Link to="/">see more</Link>
      </div>
    </section>
  );
}

export default SeeMore;
