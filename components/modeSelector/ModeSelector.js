import _ from "./modeSelector.module.css";
import { useState } from "react";

export default function ModeSelector(props) {
  const [currentSelect, setCurrentSelect] = useState(undefined);

  return (
    <div
      className={_.modeselctor__wrap}
      {...props}
      // onClick={() => {
      //   setCurrentSelect(props.numbering);
      //   console.log(props);
      // }}
    >
      <div
        className={`${_.modeselctor__background}`}
        style={{
          backgroundImage: props.image,
          backgroundColor: props.backgroundColor,
          // backgroundColor: currentSelect !== props.numbering ? "blue" : "pink",
        }}
      >
        <div className={_.modeselctor__text__container}>
          <div
            className={_.modeselctor__numbering__container}
            style={{ backgroundColor: props.numberingBackgroundColor }}
          >
            <span
              className={_.modeselctor__numbering}
              style={{ color: props.numberingColor }}
            >
              {props.numbering}
            </span>
          </div>
          <div className={_.modeselctor__title}>{props.title}</div>
        </div>
      </div>
    </div>
  );
}
