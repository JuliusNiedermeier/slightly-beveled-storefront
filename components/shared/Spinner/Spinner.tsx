import classNames from "classnames";
import styles from "./Spinner.module.css";

export const Spinner = (props: { appearence: "dark" | "light" }) => {
  const classes = classNames(styles.spinner, {
    [styles["spinner--light"]]: props.appearence === "light",
  });

  return <div className={classes} />;
};
