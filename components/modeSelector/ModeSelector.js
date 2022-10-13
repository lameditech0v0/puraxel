import _ from "./modeSelector.module.css";

export default function ModeSelector(props) {
  return (
    <div className={_.modeselctor__wrap} dataName={props.dataname} {...props}>
      <div
        className={`${_.modeselctor__background}`}
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
    </div>
  );
}
