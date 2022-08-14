import React from "react";
import { SearchContext } from "../../pages/Collection/Collection";

import styles from "./Search.module.scss";

function Search({ searchValue, setSearchValue }) {
  const searchRef = React.useRef();
  //   const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      window.scrollTo({
        top: 750,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.search}>
      <input
        onKeyDown={onKeyDown}
        ref={searchRef}
        placeholder="Search to..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <svg
        onClick={() => {
          searchRef.current.focus();
        }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6665 16.6667L21.3332 21.3334"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.6665 10.6667C2.6665 15.085 6.24822 18.6667 10.6665 18.6667C12.8794 18.6667 14.8826 17.7682 16.3309 16.3161C17.7742 14.869 18.6665 12.8721 18.6665 10.6667C18.6665 6.24847 15.0848 2.66675 10.6665 2.66675C6.24822 2.66675 2.6665 6.24847 2.6665 10.6667Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Search;
