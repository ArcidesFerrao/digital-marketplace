// app/test/[id]/page.tsx
type Params = Promise<{ id: string }>;
export default async function TestPage({ params }: { params: Params }) {
  const paramsId = await params;
  // console.log(id);
  return <main>ID: {paramsId.id}</main>;
}
