import Link from "next/link";
import React from "react";

const List = ({ path, title }) => {
  return (
    <div>
      <li className="text-secondary leading-[26px]">
        <Link href={path}>{title}</Link>
      </li>
    </div>
  );
};

export default List;
