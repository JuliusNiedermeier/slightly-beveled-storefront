import { Button } from "~/components/shared/Button/Button";
import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./Pricing.module.css";
import { useLayout } from "~/components/layout/Layout/Layout";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Pricing = () => {
  const t = useTranslations("Pricing");

  const [ensemblePrice, setEnsemblePrice] = useState("");
  const [quatPrice, setQuatPrice] = useState("");

  const { showSidebar, updateCartQuantity, getPrice, singlePrice } =
    useLayout();

  useEffect(() => {
    getPrice(2).then(setEnsemblePrice);
    getPrice(4).then(setQuatPrice);
  }, []);

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <div className={styles.image}>
              <Image
                src="/sketches/single.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.heading}>
              <Typography type="heading-sm">{t("one.heading")}</Typography>
            </div>

            <div className={styles.description}>
              <Typography type="generic" tag="p">
                {t("one.body")}
              </Typography>
            </div>
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                updateCartQuantity(1);
                showSidebar(true);
              }}
              label={`${singlePrice}€`}
              variant="light"
              loading={singlePrice ? false : true}
            />
          </div>
          <div className={styles.plan}>
            <div className={styles.image}>
              <Image
                src="/sketches/ensemble-compact.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.heading}>
              <Typography type="heading-sm">{t("two.heading")}</Typography>
            </div>
            <div className={styles.description}>
              <Typography type="generic" tag="p">
                {t("two.body")}
              </Typography>
            </div>
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                updateCartQuantity(2);
                showSidebar(true);
              }}
              label={`${ensemblePrice}€`}
              sublabel={t("two.discount")}
              variant="dark"
              loading={ensemblePrice ? false : true}
            />
          </div>
          <div className={styles.plan}>
            <div className={styles.image}>
              <Image
                src="/sketches/four.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.heading}>
              <Typography type="heading-sm">{t("four.heading")}</Typography>
            </div>
            <div className={styles.description}>
              <Typography type="generic" tag="p">
                {t("four.body")}
              </Typography>
            </div>
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                updateCartQuantity(4);
                showSidebar(true);
              }}
              label={`${quatPrice}€`}
              sublabel={t("four.discount")}
              variant="light"
              loading={quatPrice ? false : true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
