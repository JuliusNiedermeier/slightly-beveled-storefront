import classNames from "classnames";
import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from "react";
import { Typography } from "~/components/shared/Typography/Typography";
import { Order } from "~/components/sections/Order/Order";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import styles from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useTranslations } from "next-intl";

type Consent = "pending" | "accepted" | "decliend";

const LayoutContext = createContext({
  sidebar: false,
  showSidebar: (state: boolean) =>
    console.warn("Cart context not initialized yet"),
  cartQuantity: 2,
  updateCartQuantity: (qty: number) =>
    console.warn("Cart context not initialized yet"),
  cookieConsent: "pending" as Consent,
  updateCookieConsent: (consent: Consent) =>
    console.warn("Cart context not initialized yet"),
  singlePrice: "",
  cartPrice: "",
  getPrice: async (quantity: number) => {
    console.warn("Cart context not initialized yet");
    return "";
  },
  cartPriceLoading: true,
});

export const useLayout = () => useContext(LayoutContext);

export const LayoutConsumer = LayoutContext.Consumer;

export const Layout = ({ children }: PropsWithChildren) => {
  const t = useTranslations("Cart");

  const [sidebar, setSidebar] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(2);
  const [cookieConsent, setCookieConsent] = useState<Consent>("pending");
  const [singlePrice, setSinglePrice] = useState("");
  const [cartPrice, setCartPrice] = useState("");
  const [cartPriceLoading, setCartPriceLoading] = useState(true);

  const [pageYOffset, setPageYOffset] = useState(0);

  const showSidebar = (state: boolean) => {
    if (state) {
      // setPageYOffset(document.documentElement.scrollTop);
      setSidebar(true);
    } else {
      setSidebar(false);
      // document.documentElement.style.scrollBehavior = "auto";
      // requestAnimationFrame(() => {
      // document.documentElement.scrollTop = pageYOffset;
      // setPageYOffset(0);
      // });
    }
  };

  const containerClassNames = classNames(styles.container, {
    [styles["sidebar-visible"]]: sidebar,
  });

  const updateCartQuantity = (qty: number) => {
    localStorage.setItem(
      "cart_quantity",
      Math.min(5, Math.max(1, qty)).toString()
    );
    setCartQuantity(Math.min(5, Math.max(1, qty)));
  };

  const updateCookieConsent = (consent: Consent) => {
    localStorage.setItem("cookie_consent", consent);
    setCookieConsent(consent);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getPrice = async (quantity: number) => {
    const res = await fetch(`/api/price?quantity=${quantity}`);
    const price = await res.text();
    return formatPrice(parseInt(price) / 100);
  };

  useEffect(() => {
    const qty = parseInt(localStorage.getItem("cart_quantity") || "");
    setCartQuantity(isNaN(qty) ? 2 : qty);

    const consent = localStorage.getItem("cookie_consent") as Consent | null;
    updateCookieConsent(consent || "pending");

    getPrice(1).then(setSinglePrice);
  });

  useEffect(() => {
    setCartPriceLoading(true);
    getPrice(cartQuantity).then((price) => {
      setCartPrice(price);
      setCartPriceLoading(false);
    });
  }, [cartQuantity]);

  return (
    <LayoutContext.Provider
      value={{
        sidebar,
        showSidebar,
        updateCartQuantity,
        cartQuantity,
        updateCookieConsent,
        cookieConsent,
        singlePrice,
        cartPrice,
        getPrice,
        cartPriceLoading,
      }}
    >
      <div className={containerClassNames}>
        <div
          className={styles.main}
          // style={{ transform: `translateY(-${pageYOffset}px)` }}
        >
          <Header />
          {children}
          <Footer />
        </div>

        <div className={styles.backdrop} onClick={() => showSidebar(false)} />

        <div className={styles.sidebar}>
          <div
            style={{
              background: "white",
              position: "sticky",
              top: 0,
              zIndex: 1,
              borderBottom: "1px solid #ededed",
            }}
          >
            <div
              style={{
                padding: "1rem 2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => showSidebar(false)}
                style={{ cursor: "pointer" }}
              >
                <ChevronLeftIcon width={"1.5rem"} />
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <Typography type="generic-bold">{t("heading")}</Typography>
              </div>
            </div>
          </div>
          <Order />
        </div>
      </div>
    </LayoutContext.Provider>
  );
};
