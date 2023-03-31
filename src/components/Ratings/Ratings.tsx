import { useState } from "react";
import styles from "./rating.module.scss";

type Props = {
  maxRating: number;
  onRatingSelect: (rating: number) => void;
};

const Ratings = ({ maxRating, onRatingSelect }: Props) => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    onRatingSelect(rating);
  };

  return (
    <div className={styles.ratings}>
      {[...Array(maxRating)].map((_, index) => (
        <div
          key={index}
          className={`${styles.rating} ${
            index + 1 === selectedRating ? styles.selected : ""
          }`}
          onClick={() => handleRatingSelect(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Ratings;
