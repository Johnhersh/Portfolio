import React, { FunctionComponent } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./next-prevButton.styles.scss";

interface NextPrevButtonProps {
  type: "nextButton" | "previousButton";
  clickFunction(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const NextPrevButton: FunctionComponent<NextPrevButtonProps> = ({ type, clickFunction }) => {
  return (
    <button className="nextPrevButton" type={"button"} id={type} onClick={clickFunction}>
      {type === "nextButton" && <FaChevronRight />}
      {type === "previousButton" && <FaChevronLeft />}
    </button>
  );
};

export default NextPrevButton;
