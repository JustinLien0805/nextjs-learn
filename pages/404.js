import React from "react";
import Link from "next/link";
const PageNotFound = () => {
  return (
    <div>
      <h1>PageNotFound</h1>
      <Link href="/"> back to the homepage</Link>
    </div>
  );
};

export default PageNotFound;
