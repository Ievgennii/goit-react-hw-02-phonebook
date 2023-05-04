import React from 'react';

function Filter({ value, onChange }) {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
