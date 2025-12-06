export default function Cart() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];
  return (
    <div className="cart">
      <h3>Carrello dei Prodotti</h3>
      <ul className="cartList">
        {products.map((p, i) => (
          <li key={i} className="product">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
