function Pizza(prop) {
  return (
    <li className={`pizza ${prop.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={prop.pizzaObj.photoName} alt={prop.pizzaObj.name} />
      <div>
        <h3>{prop.pizzaObj.name}</h3>
        <p>{prop.pizzaObj.ingredients}</p>
        <span>{prop.pizzaObj.soldOut ? "SOLD OUT" : prop.pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
