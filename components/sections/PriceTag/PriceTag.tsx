import { useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { LayoutConsumer } from "~/components/layout/Layout/Layout";
import { Button } from "~/components/shared/Button/Button";
import styles from "./PriceTag.module.css";

export const PriceTag = () => {
  const { scrollYProgress: pageYProgress } = useScroll({
    offset: ["start", "end"],
  });

  const tagBackgroundProgress = useTransform(
    pageYProgress,
    (value) =>
      `linear-gradient(90deg, #0b2c22 ${value * 100}%, #114233 ${value * 100}%)`
  );

  const [background, setBackground] = useState("");
  tagBackgroundProgress.onChange((value) => setBackground(value));

  return (
    <div className={styles.container}>
      <LayoutConsumer>
        {({ showSidebar, singlePrice }) => (
          <Button
            icon="arrow-right"
            variant="dark"
            style={{ background: background }}
            onClick={() => showSidebar(true)}
            label={`${singlePrice}€`}
            loading={singlePrice ? false : true}
          />
        )}
      </LayoutConsumer>
    </div>
  );
};
