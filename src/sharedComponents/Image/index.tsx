// noinspection TypeScriptValidateTypes

import React, {FC, useEffect, useState} from "react";



const card = require("../../assets/images/card.svg") as string;

interface IImage{
  src: string,
  alt: string
}

const Image:FC<IImage> = ({src, alt, ...arg}) => {
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    fetch(src).then(response => {
      if (response.ok) {
        setLink(src);
      } else {
        setLink(card);
      }
    }).catch(() => {
      setLink(card);
    });
  }, []);

  return (
    <img src={link} alt={alt} {...arg} />
  );
};
export default Image;