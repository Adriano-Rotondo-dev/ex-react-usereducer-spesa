import { useState } from "react";

export default function Cart() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    //prodotto già presente => return
    if (addedProducts.some((p) => p.name === product.name)) {
      console.log("Prodotto già presente", product.name);
      return;
    }
    //inserisci prodotto con quantità 1
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    console.log("Prodotti aggiunti:", product.name);
  };
  return (
    <div className="cart">
      <h3>Carrello dei Prodotti</h3>
      <ul className="cartList">
        {products.map((p, i) => (
          <li key={i} className="product d-flex">
            <span className="my-3">{p.name}</span>
            <button
              className="mx-5 my-1 btn btn-primary"
              onClick={() => addToCart(p)}
            >
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>
      <ul className="addedList">
        {addedProducts.map((p, i) => (
          <li
            key={i}
            className="product"
          >{`${p.name} - € ${p.price} - ${p.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}
