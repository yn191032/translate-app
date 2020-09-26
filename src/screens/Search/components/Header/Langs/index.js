import React from 'react';

import SelectLang from './SelectLang';
import QuickLangs from './QuickLangs';
import SwitchLangs from './SwitchLangs';

const Langs = ({ from, to, setFrom, setTo, options }) => {
  console.log('<Langs />', from, to);

  if (!from && !to) return null;

  const onSwitch = () => {
    setFrom(to);
    setTo(from);
  };
  
  return (
    <>
      <div className='lang-switch'>
        <SelectLang value={from} onChange={setFrom} options={options} />
        <SwitchLangs onClick={onSwitch}/>
        <SelectLang value={to} onChange={setTo} options={options} />
      </div>

      <QuickLangs onChangeFrom={setFrom} onChangeTo={setTo} />
    </>
  );
};

export default Langs;