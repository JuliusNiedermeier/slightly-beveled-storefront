import {
  GlobeEuropeAfricaIcon,
  ShoppingBagIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Container } from "~/components/layout/Container/Container";
import { Logo } from "~/components/shared/Logo/Logo";
import { Typography } from "~/components/shared/Typography/Typography";
import { LayoutConsumer } from "../Layout/Layout";
import styles from "./Header.module.css";

export const Header = () => {
  const { locale, replace } = useRouter();

  const handleLocaleToggle = () => {
    if (locale === "en") replace("", "", { locale: "de" });
    else if (locale === "de") replace("", "", { locale: "en" });
  };

  return (
    <div className={styles.container}>
      <Container>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <LayoutConsumer>
            {({ showSidebar, cartQuantity }) => (
              <div className={styles.cart} onClick={() => showSidebar(true)}>
                <Typography type="generic-bold">{cartQuantity}</Typography>
                <ShoppingBagIcon width="1.5rem" />
              </div>
            )}
          </LayoutConsumer>

          <div className={styles.language} onClick={handleLocaleToggle}>
            {locale === "en" ? (
              <GlobeAmericasIcon width="1.5rem" />
            ) : (
              <GlobeEuropeAfricaIcon width="1.5rem" />
            )}
            <Typography type="generic">{locale?.toUpperCase()}</Typography>
          </div>
        </header>
      </Container>
    </div>
  );
};
