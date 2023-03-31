import { useParams } from "react-router-dom";
import styles from "./thanks.module.scss";
import Layout from "../Layout/Layout";
import { ReactComponent as ThankYou } from "../../assets/thankYou.svg";

const Thanks = () => {
  const { rate } = useParams();
  return (
    <Layout>
      <div className={styles.thanks}>
        <ThankYou />
        <p className={styles.selectedRating}>You selected {rate} out of 5</p>
        <h2 className={styles.thankYou}>Thank you!</h2>
        <p className={styles.greetings}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Layout>
  );
};

export default Thanks;
