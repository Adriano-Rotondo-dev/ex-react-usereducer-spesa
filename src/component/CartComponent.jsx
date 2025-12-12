import { useState } from "react";

export default function Cart() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts((curr) =>
      curr.map((product) => {
        if (product.name === name) {
          return { ...product, quantity };
        }
        return product;
      })
    );
  };

  const addToCart = (product) => {
    const addedProduct = addedProducts.find((p) => p.name === product.name);
    if (addedProduct) {
      updateProductQuantity(addedProduct.name, addedProduct.quantity + 1);
      return;
    }
    setAddedProducts((curr) => [
      ...curr,
      {
        ...product,
        quantity: 1,
      },
    ]);
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
          <li key={i} className="product">{`${p.name} - € ${p.price.toFixed(
            2
          )} - ${p.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}
