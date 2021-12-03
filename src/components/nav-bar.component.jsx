import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/context-api">Context Api</Link>
      <Link to="/react-query">React Query</Link>
    </div>
  );
};

export default React.memo(NavBar);
