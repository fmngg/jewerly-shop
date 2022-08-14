import React from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../../App';

import styles from './Card.module.scss';

function Card({ title, desc, img, items, id }) {
  const { setItems, setCollectionName } = React.useContext(ItemsContext);

  const onClickCollection = () => {
    setCollectionName({ id: id, title: title, desc: desc });
    setItems(items);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.content__collection}>
      <div className={styles.img}>
        <img src={img} alt="card" />
      </div>
      <div className={styles.design}>
        <h1>{title}</h1>
        <Link to="/collection">
          <div onClick={onClickCollection} className={styles.collectionButton}>
            SEE COLLECTION
          </div>
        </Link>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
