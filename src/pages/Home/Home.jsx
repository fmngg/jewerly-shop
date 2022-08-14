import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import styles from "./Home.module.scss";
import UpperButton from "../../components/UpperButton/UpperButton";

function Home({ collections }) {
  return (
    <div className={styles.home}>
      <Header />
      <UpperButton />
      <div className={styles.image}>
        <div
          onClick={() =>
            window.scrollTo({
              top: 1010,
              behavior: "smooth",
            })
          }
          className={styles.image__button}
        >
          EXPLORE COLLECTIONS
        </div>
        <span className={styles.image__bottomText}>
          <p>Simple. Timeless.</p>
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.content__title}>
          <h1>Collections</h1>
          <p>
            Each collection is inspired by something special. If you are close
            to one item, you should definitely see the entire collection.
          </p>
        </div>
        {collections.map((obj) => {
          return (
            <Card
              items={obj.items}
              key={obj.id}
              id={obj.id}
              title={obj.title}
              desc={obj.desc}
              img={obj.img}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
