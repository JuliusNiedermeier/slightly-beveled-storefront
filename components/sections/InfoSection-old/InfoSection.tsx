import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./InfoSection.module.css";

export const InfoSection = () => {
  const t = useTranslations("InfoSection");

  const sections = [
    {
      id: "design",
      name: t("design.name"),
      color: "#FFF1E4",
      sketch: "/images/bevel.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">{t("design.heading")}</Typography>
          </div>
          <Typography type="generic">{t("design.body")}</Typography>
        </>
      ),
    },
    {
      id: "versatility",
      name: t("versatility.name"),
      color: "#FFF8F2",
      sketch: "/images/wood.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">
              {t("versatility.heading")}
            </Typography>
          </div>
          <Typography type="generic">{t("versatility.body")}</Typography>
        </>
      ),
    },
    {
      id: "simplicity",
      name: t("simplicity.name"),
      color: "#FFF1E4",
      sketch: "/work-min.jpg",
      description: (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Typography type="heading-sm">{t("simplicity.heading")}</Typography>
          </div>
          <Typography type="generic">{t("simplicity.body")}</Typography>
        </>
      ),
    },
    {
      id: "prestige",
      name: t("prestige.name"),
      color: "#FFE6CF",
      sketch: "/sketches/dims.svg",
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
            <Typography type="generic-bold">Höhe: 65cm</Typography>
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
            <Typography type="generic-bold">Breite: 65cm</Typography>
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
            <Typography type="generic-bold">Tiefe: 65cm</Typography>
          </div>
        </>
      ),
    },
  ];

  const container = useRef() as RefObject<HTMLDivElement>;
  const [currentSection, setCurrentSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const navOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

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

    const yOffset = useTransform(
      useTransform(scrollYProgress, [0, 1], [-25, 25]),
      (value) => `${value}vw`
    );

    const scale = useTransform(
      scrollYProgress,
      [0, 0.33, 0.66, 1],
      [0.7, 1, 1, 0.7]
    );

    const opacity = useTransform(
      scrollYProgress,
      [0, 0.33, 0.66, 1],
      [0, 1, 1, 0]
    );

    return { yOffset, scale, opacity };
  });

  const sectionOffsets = sections.map((section, index) =>
    useTransform(
      useTransform(
        useScroll({
          target: sectionRefs[index],
          offset: ["start end", "end start"],
        }).scrollYProgress,
        [0, 1],
        [-25, 25]
      ),
      (value) => `${value}vw`
    )
  );

  return (
    <div
      style={{
        backgroundColor: sections[currentSection].color,
        transition: "background-color 250ms ease",
      }}
    >
      <Container>
        <div className={styles.container} ref={container}>
          <motion.div
            className={styles["container__navigation-column"]}
            // style={{ translateY: navOffset }}
          >
            <nav className={styles["container__navigation-column__navigation"]}>
              {sections.map((section, index) => (
                <div
                  onClick={() =>
                    sectionRefs[index].current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${
                    styles["container__navigation-column__navigation__item"]
                  } ${
                    index === currentSection &&
                    styles[
                      "container__navigation-column__navigation__item--current"
                    ]
                  }`}
                  key={index}
                >
                  <div
                    className={
                      styles[
                        "container__navigation-column__navigation__item__line"
                      ]
                    }
                  />
                  <Typography type="generic-bold">{section.name}</Typography>
                </div>
              ))}
            </nav>
          </motion.div>

          <div className={styles["container__scroll-column"]}>
            {sections.map((section, index) => (
              <div
                ref={sectionRefs[index]}
                id={section.id}
                className={styles["container__scroll-column__section"]}
                key={index}
              >
                <motion.div
                  style={{
                    translateY: sectionMotionValues[index].yOffset,
                    // scale: sectionMotionValues[index].scale,
                    opacity: sectionMotionValues[index].opacity,
                    mixBlendMode: "multiply",
                  }}
                  className={
                    styles["container__scroll-column__section__sketch"]
                  }
                >
                  <Image
                    src={section.sketch}
                    alt="Sketch"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
                <div
                  className={
                    styles["container__scroll-column__section__description"]
                  }
                >
                  {section.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
