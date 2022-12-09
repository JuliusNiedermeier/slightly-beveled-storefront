import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./InfoSection.module.css";

export const InfoSection = () => {
  const t = useTranslations("InfoSection");

  const sections = [
    {
      id: "design",
      name: t("aesthetic.name"),
      color: "#FFF1E4",
      sketch: "/tisch-15-min.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">{t("aesthetic.heading")}</Typography>
          </div>
          <Typography type="generic">{t("aesthetic.body")}</Typography>
        </>
      ),
    },
    {
      id: "material",
      name: t("material.name"),
      color: "#FFF8F2",
      sketch: "/material-min.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">{t("material.heading")}</Typography>
          </div>
          <Typography type="generic">{t("material.body")}</Typography>
        </>
      ),
    },
    {
      id: "manufacture",
      name: t("manufacture.name"),
      color: "#FFF1E4",
      sketch: "/work-min.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">
              {t("manufacture.heading")}
            </Typography>
          </div>
          <Typography type="generic">{t("manufacture.body")}</Typography>
        </>
      ),
    },
    {
      id: "dimensions",
      name: t("dimensions.name"),
      color: "#FFE6CF",
      sketch: "/tisch-09-min.jpg",
      description: (
        <>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "1rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <ArrowUpIcon width="1.5rem" />
            <Typography type="generic-bold">
              {`${t("dimensions.height-label")}: ${t("dimensions.height")}`}
            </Typography>
          </div>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "1rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <ArrowRightIcon width="1.5rem" />
            <Typography type="generic-bold">
              {`${t("dimensions.width-label")}: ${t("dimensions.width")}`}
            </Typography>
          </div>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "1rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <ArrowUpRightIcon width="1.5rem" />
            <Typography type="generic-bold">
              {`${t("dimensions.depth-label")}: ${t("dimensions.depth")}`}
            </Typography>
          </div>
        </>
      ),
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const sectionRefs = sections.map(() => useRef() as RefObject<HTMLDivElement>);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (e) => {
        e.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setCurrentSection(index);
        });
      },
      { threshold: 0.66 }
    );

    sectionRefs.forEach(
      (ref) => ref.current && intersectionObserver.observe(ref.current)
    );
  }, []);

  const sectionMotionValues = sections.map((section, index) => {
    const { scrollYProgress } = useScroll({
      target: sectionRefs[index],
      offset: ["start end", "end start"],
    });

    const contentY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

    return { contentY, scale };
  });

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <div
          ref={sectionRefs[index]}
          className={`${styles.section} ${
            index % 2 > 0 && styles["section--reverse"]
          }`}
        >
          <Container className={styles["section__container"]}>
            <div className={styles.image}>
              <div className={styles["image-frame"]}>
                <motion.div
                  className={styles["image-wrapper"]}
                  style={{
                    scale: sectionMotionValues[index].scale,
                  }}
                >
                  <Image
                    src={section.sketch}
                    alt="Sketch"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              className={styles.content}
              style={{ translateY: sectionMotionValues[index].contentY }}
            >
              <div className={styles.label}>
                <Typography contrast type="generic-bold">
                  {section.name}
                </Typography>
              </div>
              {section.description}
            </motion.div>
          </Container>
        </div>
      ))}
    </div>
  );
};
