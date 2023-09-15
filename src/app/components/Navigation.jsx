import Link from 'next/link';

function Navigation() {
  return (
    
    <div className="text-3xl flex font-bold p-5 justify-evenly space-x-4 bg-blue-fromi text-white">
      <div>Prueba Técnica</div>
      <ul className="">
        <li>
          <Link href="/about">
            About me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;