import React from "react";
import "./Cart.css";

const Cart = ({ selectedActors, remaining, totalCost }) => {
  return (
    <div>
      <h2>
        Total Actors: <span className="totalActor"> {selectedActors.length}</span>
      </h2>
      <h5>
        Remaining: <span className="money">{remaining}</span>
      </h5>
      <h5>
        Total Cost: <span className="money">{totalCost}</span>
      </h5>

      <ul className="uldata">
        {selectedActors.map((actor) => (
          <li key={actor.id} className="licenter">
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
