import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./IntroSection.module.css";
import { FullscreenImage } from "../FullscreenImage/FullscreenImage";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CubeTransparentIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { ArrowDownTrayIcon, CubeIcon } from "@heroicons/react/24/outline";

export const ScrollGallery = () => {
  const t = useTranslations("IntroSection");

  return (
    <div className={styles.container}>
      <Container>
        <Typography type="heading-sm">{t("heading")}</Typography>
        <div className={styles.specs}>
          <span className={styles.spec}>
            <ArrowDownTrayIcon width="1rem" />
            <Typography type="generic">{t("weight")}</Typography>
          </span>
          <span className={styles.spec}>
            <ArrowRightIcon width="1rem" />
            <Typography type="generic">{t("width")}</Typography>
          </span>
          <span className={styles.spec}>
            <ArrowUpIcon width="1rem" />
            <Typography type="generic">{t("height")}</Typography>
          </span>
          <span className={styles.spec}>
            <ArrowUpRightIcon width="1rem" />
            <Typography type="generic">{t("depth")}</Typography>
          </span>
          <span className={styles.spec}>
            <CubeIcon width="1rem" />
            <Typography type="generic">{t("material")}</Typography>
          </span>
        </div>
      </Container>

      <FullscreenImage url={"/tisch-09.jpg"} />
    </div>
  );
};
