"use client";

import { useState } from "react";
import Logo from "./Logo";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
      {/* <Logo />  we used this to demonstrate that components can be re-used as both server components and client component (Here this compoent acts as client component becus of the "use client" specified key) */}
    </span>
  );
}

export default TextExpander;

// We can only achieve the functionality of "interactivity" on this component by making this component a client component
// Any component that this "TextExpander" imports will become a use client component instance meaning they would all be client components
