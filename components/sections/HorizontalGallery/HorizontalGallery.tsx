import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./HorizontalGallery.module.css";
import { ArrowRight } from "~/components/shared/ArrowRight/ArrowRight";
import { LayoutConsumer } from "~/components/layout/Layout/Layout";

export const HorizontalGallery = () => {
  const container = useRef() as RefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const galleryTransform = useTransform(
    scrollYProgress,
    (value) => `calc(${-value} * (100% - 100vw))`
  );

  const tagBackgroundProgress = useTransform(
    scrollYProgress,
    (value) =>
      `linear-gradient(90deg, white ${value * 100}%, black ${value * 100}%)`
  );

  const [background, setBackground] = useState("");
  tagBackgroundProgress.onChange((value) => setBackground(value));

  return (
    <div className={styles.section} ref={container}>
      <motion.div
        style={{ translateX: galleryTransform }}
        className={styles.track}
      >
        <Image
          src="/images/01.jpg"
          alt="Tisch"
          height={450}
          width={500}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/02.jpg"
          alt="Tisch"
          height={450}
          width={350}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/03.jpg"
          alt="Tisch"
          height={450}
          width={750}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/04.jpg"
          alt="Tisch"
          height={450}
          width={600}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/05.jpg"
          alt="Tisch"
          height={450}
          width={500}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/06.jpg"
          alt="Tisch"
          height={450}
          width={350}
          priority
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/07.jpg"
          alt="Tisch"
          height={450}
          width={750}
          priority
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};
