import React, {FC, useEffect, useRef, useState} from "react";

import "./index.scss";
import Tooltip from "../Tooltip";
import Image from "../Image";

interface IUserCard{
  email: string,
  name: string,
  phone: string,
  photo: string,
  position: string
}

const UserCard:FC<IUserCard> = ({email, name, phone, photo, position}) => {
  const [validEmail, setValidEmail] = useState<string>(email);
  const [validName, setValidName] = useState<string>(name);
  const [validPhone, setValidPhone] = useState<string>(phone);
  const [validPosition, setValidPosition] = useState<string>(position);
  const about = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  function replaceString(el:any, setter: (s: string)=>void) {
    const string = el.cloneNode(true);
    string.style.position = "absolute";
    string.style.opacity = "0";
    document.body.appendChild(string);
    if(null !== container.current){
      while (string.offsetWidth > container.current?.offsetWidth) {
        string.textContent = `${string.textContent.slice(0, -4)}...`;
      }
    }
    setter(string.textContent);
    document.body.removeChild(string);
  }


  useEffect(() => {
    interface IReplacer {
      setter: (s: string)=> void,
      el: any
    }
    if (container && container.current !== null && about.current !== null) {
      const replacer: IReplacer[] = [
        {setter:setValidName,el: container.current.children[1],},
        {setter:setValidPosition,el: about.current.children[0],},
        {setter:setValidEmail,el: about.current.children[1],},
        {setter:setValidPhone,el: about.current.children[2],},
      ];
      replacer.forEach(({el,setter})=>{
        if(el !== null && container.current !== null){
          if (el.offsetWidth > container.current.offsetWidth)replaceString(el,setter);
        }
      });
    }
  }, [container]);


  return (
    <article className="user-card">
      <div ref={container} className="user-card__container">
        <div className="user-card__img">
          <Image src={photo} alt="user"/>
        </div>
        {validName !== name
          ? <Tooltip content={name}>
            <div className="user-card__name">
              {validName}
            </div>
          </Tooltip>
          : <div className="user-card__name">
            {validName}
          </div>
        }
        <div className="user-card__description" ref={about}>

          {validPosition !== position
            ? <Tooltip content={position}>
              <div className="user-card__description-position">
                {validPosition}
              </div>
            </Tooltip>
            : <div className="user-card__description-position">
              {validPosition}
            </div>
          }

          {validEmail !== email
            ? <Tooltip content={email}>
              <div className="user-card__description-email">
                {validEmail}
              </div>
            </Tooltip>
            : <div className="user-card__description-email">
              {validEmail}
            </div>
          }

          {validPhone !== phone
            ? <Tooltip content={phone}>
              <div className="user-card__description-number">
                {validPhone}
              </div>
            </Tooltip>
            :<div className="user-card__description-number">
              {validPhone}
            </div>
          }
        </div>
      </div>
    </article>
  );
};

export default UserCard;