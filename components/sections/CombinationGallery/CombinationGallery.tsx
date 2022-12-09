import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./CombinationGallery.module.css";

const sections = [
  "/sketches/single.png",
  "/sketches/ensemble-compact.png",
  "/sketches/ensemble-eat.png",
  "/sketches/ensemble-high.png",
  "/sketches/ensemble-high-180.png",
  "/sketches/ensemble-low.png",
  "/sketches/three-high.png",
  "/sketches/four.png",
];

export const CombinationGallery = () => {
  const t = useTranslations("CombinationGallery");

  const container = useRef() as RefObject<HTMLDivElement>;
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({ target: container });

  scrollYProgress.onChange((value) =>
    setCurrent(
      Math.min(Math.floor(value * sections.length), sections.length - 1)
    )
  );

  return (
    <div
      ref={container}
      className={styles.container}
      style={{ height: `${sections.length * 100}vh` }}
    >
      <Container className={styles.sticky}>
        <div className={styles.images}>
          {sections.map((section, index) => (
            <Image
              key={index}
              src={section}
              alt=""
              fill
              className={`${styles.image} ${
                index === current && styles["image--current"]
              }`}
            />
          ))}
        </div>
        <div className={styles.indicators}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                index === current && styles["indicator--active"]
              }`}
            />
          ))}
        </div>
        <motion.div className={styles.description}>
          <Typography type="heading-sm">{t("heading")}</Typography>
          <Typography type="generic">{t("content")}</Typography>
        </motion.div>
      </Container>
    </div>
  );
};
