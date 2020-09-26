import { useState, useEffect } from "react";

import { getLangs, setLangs } from '../../../api';

export const useLangs = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    if (!from && !to) {
      getLangs().then(({from, to}) => {
        setFrom(from);
        setTo(to);
      });
    } else {
      setLangs(from, to);
    }
  }, [from, to]);

  return {
    from, to,
    setFrom, setTo,
  };
};