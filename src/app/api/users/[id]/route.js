export async function GET(request, { params }) {
  const id = params?.id;
  const user = users.find((user) => user.id === Number(id));
  return Response.json(user);
}

export async function PATCH(request, { params }) {
  const id = params?.id;
  const updateUser = await request?.json();
  const userIndex = users.findIndex((user) => user.id === Number(id));
  const user = users[userIndex];

  users[userIndex] = { ...user, ...updateUser };
  return Response.json(users);
}

const users = [
  { id: 1, name: "Towhid", phone: "01928182891" },
  { id: 2, name: "Rasel", phone: "01928182892" },
  { id: 3, name: "Sohel", phone: "01928182893" },
];
