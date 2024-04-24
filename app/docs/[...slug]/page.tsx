export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Docs Home Page {params.slug[0]} and concept of {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>View docs for feature {params.slug}</h1>;
  }
  return <h1>Docs home page</h1>;
}
