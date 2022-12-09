import { PropsWithChildren } from "react";
import styles from "./Container.module.css";

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
