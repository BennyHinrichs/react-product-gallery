import React from 'react'

const SortFilter = ({ icon, setFilter, selected, text }) => {
  return (
    <button
      className={`SortFilter ${selected ? 'selected' : ''}`}
      title={text}
      onClick={() => setFilter({sort: icon})}
    >
      <i className={`fa fa-sort-${icon}`}></i>
    </button>
  );
}

export default React.memo(SortFilter);