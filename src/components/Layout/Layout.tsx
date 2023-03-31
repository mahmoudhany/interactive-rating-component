import React from "react";
import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
