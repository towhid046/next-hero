export async function GET() {
  return Response.json(users);
}
export const POST = async (req) => {
  const newUser = await req?.json();
  users.push({
    id: users.length + 1,
    ...newUser
  });
  return Response.json(users);
};

const users = [
  { id: 1, name: "Towhid", phone: "01928182891" },
  { id: 2, name: "Rasel", phone: "01928182892" },
  { id: 3, name: "Sohel", phone: "01928182893" },
];