import classNames from "classnames";
import { ComponentProps, PropsWithChildren } from "react";
import styles from "./Typography.module.css";

const tagFromType = (type: ComponentProps<typeof Typography>["type"]) => {
  switch (type) {
    case "heading-lg":
      return "h2";
      break;
    case "heading-md":
      return "h2";
      break;
    case "heading-sm":
      return "h3";
      break;
    case "generic":
      return "span";
      break;
    case "generic-bold":
      return "span";
      break;
    default:
      return "span";
      break;
  }
};

export const Typography = ({
  children,
  type,
  tag,
  contrast,
}: PropsWithChildren<{
  type: "heading-lg" | "heading-md" | "heading-sm" | "generic" | "generic-bold";
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  contrast?: boolean;
}>) => {
  let Tag: ComponentProps<typeof Typography>["tag"];

  if (tag) Tag = tag;
  else Tag = tagFromType(type);

  const bold = ["heading-lg", "heading-md", "heading-sm"].includes(type);

  const classes = classNames([styles.typography], {
    [styles.bold]: bold,
    [styles["heading--lg"]]: type === "heading-lg",
    [styles["heading--md"]]: type === "heading-md",
    [styles["heading--sm"]]: type === "heading-sm",
    [styles["generic"]]: type === "generic",
    [styles["generic--bold"]]: type === "generic-bold",
    [styles.contrast]: contrast,
  });

  return <Tag className={classes}>{children}</Tag>;
};
