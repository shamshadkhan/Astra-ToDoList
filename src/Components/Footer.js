import React, { useEffect } from 'react';
import classnames from "classnames";

const FILTER_TITLES = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

function Footer (props) {
  const { activeCount} = props;
  const itemWord = activeCount === 1 ? "item" : "items";
  const renderFilterList = () => {
    const { filter: selectedFilter, onShow } = props;
    return ["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map((filter) => (
      <li key={filter}>
      <button className={classnames({ selected: filter === selectedFilter })}
      onClick={() => onShow(filter)} style={{ cursor: "pointer" }}>{FILTER_TITLES[filter]}</button>
      </li>
    ));
  }

  useEffect(() => {
	}, [activeCount]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong>&nbsp;
        {itemWord} left
      </span>
      <ul className="filters">{renderFilterList()}</ul>
    </footer>
  );
}

export default Footer;