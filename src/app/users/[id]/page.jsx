import getData from "./../../../utilities/getData";
const UserDetailsPage = async ({params}) => {
  const {
    name,
    email,
    username,
    address: {
      street,
      suite,
      city,
      geo: { lat, lng },
    },
    phone,
    website,
  } = await getData(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return (
    <section className={`container mx-auto px-4 flex justify-center items-center min-h-[80vh]`}>
      <div className="rounded p-8 ">
        <h2 className="text-xl font-semibold">Name: {name}</h2>
        <h3 className="text-md font-semibold">UserName: {username}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </section>
  );
};

export default UserDetailsPage;
