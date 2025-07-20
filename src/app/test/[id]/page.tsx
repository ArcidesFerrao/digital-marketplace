// app/test/[id]/page.tsx
export default async function TestPage({ params }: { params: { id: string } }) {
  const paramsId = await params;
  // console.log(id);
  return <main>ID: {paramsId.id}</main>;
}
