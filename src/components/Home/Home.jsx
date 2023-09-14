import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Home = () => {
  const [allActors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectedActors.find((index) => index.id == actor.id);

    let count = actor.salary;

    if (isExist) {
      return Swal.fire("Already Added this Actor", "", "warning");
    } else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });
      const totalRemaining = 35000 - count;
      if (count > 35000) {
        return Swal.fire({
          title: "You hove not enough balance",
          text: "",
          icon: "question",
          confirmButtonText: "Cool",
        });
      } else {
        setTotalCost(count);
        setRemaining(totalRemaining);
        setSelectedActors([...selectedActors, actor]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Actor Added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="home-cotainer">
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem, in..
                </small>
              </p>
              <div className="info">
                <p>salary: {actor.salary}</p>
                <p>{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
