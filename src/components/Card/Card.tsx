import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import Layout from "../Layout/Layout";
import { ReactComponent as Star } from "../../assets/star.svg";
import styles from "./card.module.scss";

const Card = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleSelection = (selectedRating: number) => {
    setSelected(selectedRating);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected) {
      navigate("thanks/" + selected);
    }
  };
  return (
    <Layout>
      <div className={styles.card}>
        <div className={styles.star}>
          <Star />
        </div>
        <h2 className={styles.title}>How did we do?</h2>
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <Ratings maxRating={5} onRatingSelect={handleSelection} />
        <form onSubmit={handleSubmit}>
          <button className={styles.submitBtn} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Card;
