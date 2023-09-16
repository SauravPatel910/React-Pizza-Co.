import pizzaData from "./data";
import Pizza from "./Pizza";

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : null}

      {/* <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        price={pizzaData[0].price}
        photoName={pizzaData[0].photoName}
        soldOut={pizzaData[0].soldOut}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
        photoName={pizzaData[1].photoName}
        soldOut={pizzaData[1].soldOut}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        price={pizzaData[2].price}
        photoName={pizzaData[2].photoName}
        soldOut={pizzaData[2].soldOut}
      />
      <Pizza
        name={pizzaData[3].name}
        ingredients={pizzaData[3].ingredients}
        price={pizzaData[3].price}
        photoName={pizzaData[3].photoName}
        soldOut={pizzaData[3].soldOut}
      />
      <Pizza
        name={pizzaData[4].name}
        ingredients={pizzaData[4].ingredients}
        price={pizzaData[4].price}
        photoName={pizzaData[4].photoName}
        soldOut={pizzaData[4].soldOut}
      />
      <Pizza
        name={pizzaData[5].name}
        ingredients={pizzaData[5].ingredients}
        price={pizzaData[5].price}
        photoName={pizzaData[5].photoName}
        soldOut={pizzaData[5].soldOut}
      /> */}
    </main>
  );
}

export default Menu;
