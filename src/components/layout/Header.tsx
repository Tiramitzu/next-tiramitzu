import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="bg-neutral-900 shadow">
        <div className="w-screen px-8 flex items-center h-16">
          <Link href="/">
            <a className="flex space-x-4">
              <Image
                className="rounded-full"
                src="/static/favicon.ico"
                alt="Tiramitzu"
                width="43"
                height="43"
              />
              <span className="text-white text-lg font-semibold ml-3 self-center whitespace-nowrap">Tiramitzu</span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
