"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function OrderProdcut() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    console.log("Placing your order");
    searchParams.get("/");
  };
  return (
    <>
      <h1>Order Prodcut</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
