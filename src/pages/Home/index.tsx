import { FC } from "react";
import Card from "../../components/Card";
import { CARDS } from "../../consts";
import './style.css';

const Home: FC = () => {
  return (
    <div className="card-conteiner">
      {CARDS.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
};

export default Home;
