import React from "react";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";

import styles from "./Collection.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import { ItemsContext } from "../../App";

export const SearchContext = React.createContext();

function Collection({ collections }) {
  const { items, collectionName } = React.useContext(ItemsContext);
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue, setSearchValue);

  return (
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    <div className={styles.collection}>
      <Header
        className={styles.header}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className={styles.collection__name}>
        <h1>{collectionName.title}</h1>
        <p>{collectionName.desc}</p>
      </div>
      <div className={styles.items}>
        <div className={styles.items__top}>
          <Categories
            collectionName={collectionName}
            collections={collections}
          />
        </div>
        <div className={styles.items__content}>
          {items &&
            items
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((obj) => (
                <ItemCard
                  key={obj.id}
                  title={obj.title}
                  price={obj.price}
                  img={obj.img}
                />
              ))}
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
    // </SearchContext.Provider>
  );
}

export default Collection;
