import React, { useEffect } from "react";
import classNames from "classnames";

import styles from "./UpperButton.module.scss";

function UpperButton() {
  const buttonRef = React.useRef();
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      ref={buttonRef}
      className={classNames({
        [styles.button]: visible === true,
        [styles.button__invisible]: visible === false,
      })}
    >
      UP!
    </div>
  );
}

export default UpperButton;
