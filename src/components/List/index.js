import React from 'react';

const List = ({ list, component: Component, ...props }) => {
  return list ? (
    <ul className='list'>
      {list.map((item, index) => 
        <li key={index} className='list-item'>
          <Component item={item} {...props} />
        </li>
      )}
    </ul>
  ) : null;
}

export default List;