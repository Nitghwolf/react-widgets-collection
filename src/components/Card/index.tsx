import { FC } from "react";
import { ICards } from "../../types/types";
import "./style.css";

interface IProbs {
  card: ICards;
}

const Card: FC<IProbs> = ({ card }) => {
  return (
    <div className="card">
      <a href={card.url} className="card_link">
        <div className="card_item_bg"></div>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </a>
    </div>
  );
};

export default Card;
