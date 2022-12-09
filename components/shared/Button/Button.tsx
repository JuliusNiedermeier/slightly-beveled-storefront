import classNames from "classnames";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./Button.module.css";
import { Properties as CSSProperties } from "csstype";
import { ArrowRight } from "../ArrowRight/ArrowRight";
import { Spinner } from "../Spinner/Spinner";

export const Button = ({
  label,
  icon,
  variant,
  onClick,
  style,
  loading,
  disabled,
  sublabel,
}: {
  label: string;
  sublabel?: string;
  icon?: "arrow-right";
  variant: "dark" | "light" | "text";
  onClick: () => void;
  style?: CSSProperties;
  loading?: boolean;
  disabled?: boolean;
}) => {
  const classes = classNames(styles.button, {
    [styles.loading]: loading,
    [styles["has-icon"]]: icon,
    [styles.dark]: variant === "dark",
    [styles.light]: variant === "light",
    [styles.text]: variant === "text",
    [styles.disabled]: disabled,
  });

  return (
    <button
      disabled={disabled}
      className={classes}
      onClick={onClick}
      style={style}
    >
      <div className={styles.labels}>
        <Typography type="generic-bold" contrast={variant === "dark"}>
          {label}
        </Typography>
        {sublabel && (
          <div className={styles.sublabel}>
            <Typography type="generic" contrast={variant === "dark"}>
              {sublabel}
            </Typography>
          </div>
        )}
      </div>
      {icon === "arrow-right" && <ArrowRight />}
      {loading && <Spinner appearence="light" />}
    </button>
  );
};
