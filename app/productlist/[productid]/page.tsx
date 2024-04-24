export default function ProductDetails({
  params,
}: {
  params: { prodcutid: string };
}) {
  return <h1>Product Details {params.prodcutid}</h1>;
}
