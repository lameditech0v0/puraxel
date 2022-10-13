import { useState } from "react";
import _ from "./modeSelector.module.css";

export default function ModeSelector(props) {
  const [currentSelect, setCurrentSelect] = useState(undefined);

  // const temp = () => {
  //   currentSelect==="1"?_
  // }

  return (
    <article
      className={_.modeselctor__wrap}
      {...props}
      onClick={() => {
        setCurrentSelect(props.numbering);
        console.log(currentSelect);
      }}
    >
      <div
        className={`${_.modeselctor__background} ${props.backgroundClass}`}
        style={{
          backgroundImage: props.image,
          backgroundColor: props.backgroundColor,
        }}
      >
        <div className={_.modeselctor__text__container}>
          <div
            className={_.modeselctor__numbering__container}
            style={{ backgroundColor: props.numberingBackgroundColor }}
          >
            <span className={_.modeselctor__numbering}>{props.numbering}</span>
          </div>
          <div className={_.modeselctor__title}>{props.title}</div>
        </div>
      </div>
    </article>
  );
}
