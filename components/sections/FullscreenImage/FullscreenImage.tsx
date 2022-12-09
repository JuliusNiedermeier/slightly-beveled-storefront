import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RefObject, useRef } from "react";
import styles from "./FullscreenImage.module.css";

export const FullscreenImage = (props: { url: string }) => {
  const container = useRef() as RefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div className={styles.container} ref={container}>
      <motion.div className={styles.image} style={{ scale }}>
        <Image src={props.url} alt="" fill style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
};
