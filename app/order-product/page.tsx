"use client";
import Link from "next/link";

export default function OrderProdcut() {
  const handleClick = () => {
    console.log("Placing your order");
  };
  return (
    <>
      <h1>Order Prodcut</h1>
      <button onClick={handleClick}>
        <Link href={"/"}>Place Order</Link>
      </button>
    </>
  );
}
