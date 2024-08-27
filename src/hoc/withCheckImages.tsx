import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

export interface IWithCheckImages {
  isErrorImg: boolean;
}

export function withCheckImages<P>(Component: FC<P & IWithCheckImages>) {
  const WithCheckImages: FC<Omit<P, keyof IWithCheckImages>> = (props) => {
    const [isErrorImg, setIsErrorImg] = useState(false);

    useEffect(() => {
      axios.get((props as any).imgURL).catch((_) => setIsErrorImg(true));
    }, []);

    return <Component {...(props as P)} isErrorImg={isErrorImg} />;
  };

  return WithCheckImages;
}
