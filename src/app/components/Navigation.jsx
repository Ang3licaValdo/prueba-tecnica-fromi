import Link from 'next/link';

function Navigation() {
  return (
    <>
    <div className="bg-blue-950">POPIS</div>
      <ul >
        <li>
          <Link href="/about">
            About me
          </Link>
        </li>
      </ul>
      </>
  );
}

export default Navigation;