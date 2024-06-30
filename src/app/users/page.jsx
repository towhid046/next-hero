
import getData from "./../../utilities/getData";
import Link from 'next/link'
const AllPhotoPage = async () => {

  const users = await getData("https://jsonplaceholder.typicode.com/users"); 

  return (
    <section className='py-12 container mx-auto px-4'>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {users?.map(({ id, name, username, email}) => (
        <li key={id} className="border p-4 space-y-2">
          <h2 className="text-xl font-semibold">Name: {name}</h2>
          <h3 className="text-md font-semibold">UserName: {username}</h3>
          <p>Email: {email}</p>
          <Link href={`/users/${id}`}>
          <button className='py-1.5 px-4 bg-gray-800 text-white'>See More</button>
          </Link>
        </li>
      ))}
    </ul>
    </section>
  );
};



export default AllPhotoPage;