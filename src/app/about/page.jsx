import Link from "next/link";
const AboutPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-5">AboutPage</h2>
      <ul className="list-disk space-y-2">
        <li>
          <Link href="/about/mission">Mission</Link>
        </li>
        <li>
          <Link href="/about/history">History</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
