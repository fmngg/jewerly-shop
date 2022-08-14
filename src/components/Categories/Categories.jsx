import React from "react";
import classNames from "classnames";

import styles from "./Categories.module.scss";

import { ItemsContext } from "../../App";

function Categories({ collectionName, collections }) {
  const [activeCategory, setActiveCategory] = React.useState(
    !!!collectionName.id ? 0 : collectionName.id
  );
  const { setItems, setCollectionName } = React.useContext(ItemsContext);

  const onClickCollection = (obj) => {
    setCollectionName({ id: obj.id, title: obj.title, desc: obj.desc });
    setItems(obj.items);
    setActiveCategory(obj.id);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    !!!collectionName.id
      ? onClickCollection(collections[0])
      : onClickCollection(collections[collectionName.id]);
  }, []);

  return (
    <div className={styles.categories}>
      <ul>
        {collections.map((obj) => (
          <li
            className={classNames({
              [styles.active]: activeCategory === obj.id,
            })}
            onClick={() => onClickCollection(obj)}
            key={obj.id}
          >
            {obj.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
