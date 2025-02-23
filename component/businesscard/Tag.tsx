import * as React from "react";
import { TagProps } from "../types";

export const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="gap-1 self-stretch px-3 pt-0.5 pb-1 my-auto bg-red-100 rounded-xl">
      {text}
    </div>
  );
};

export default Tag;
