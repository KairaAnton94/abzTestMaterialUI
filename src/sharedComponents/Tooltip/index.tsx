import React, {FC, useState} from "react";
import "./index.scss";

interface ITooltip{
  content: string,
  children?: React.ReactChild | React.ReactNode
}

const Tooltip:FC<ITooltip> = ({children, content}) => {

  const [showContent, setShowContent] = useState<boolean>(false);

  const move = (e:any) => {
    const el = e.target.querySelector(".tooltip__content");
    if (el) {
      el.style.top = `${e.clientY}px`;
      el.style.left = `${e.clientX}px`;
      el.style.display="block";
      el.style.animation = "enter 400ms forwards 100ms";
      if (el.getBoundingClientRect().right > window.innerWidth) {
        el.style.left = `${e.clientX - (el.getBoundingClientRect().right - window.innerWidth + 10)}px`;
      }
    }
  };
  const mouseenter = async (e:any) => {
    await setShowContent(true);
    move(e);
  };
  const mouseleave = (e:any) => {
    const el = e.target.querySelector(".tooltip__content");
    if (el) el.style.animation = "exit 400ms forwards ";
  };
  const transitionend = () => {
    setShowContent(false);
  };

  return (
    <div className="tooltip"
      onMouseEnter={mouseenter}
      onMouseLeave={mouseleave}
      onMouseMove={move}
    >
      {showContent
            && <div
              className="tooltip__content"
              onTransitionEnd={transitionend}
            ><span>{content}</span></div>}
      <div className="tooltip__target">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;