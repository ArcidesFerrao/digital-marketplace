// app/test/[id]/page.tsx
export default function TestPage({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>;
}
