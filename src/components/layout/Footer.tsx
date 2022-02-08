import Link from "next/link";

function Footer() {
  return (
    <footer className="flex fixed bottom-0 left-0 justify-center items-center py-2 w-screen h-16 bg-neutral-900">
      <p className="flex justify-center items-center py-1 text-sm text-white lg:text-lg">
        © Copyright {new Date().getFullYear()}{" "}
        <Link href="https://github.com/Tiramitzu">
          <a className="font-semibold hover:text-violet-500">&nbsp;Tiramitzu</a>
        </Link>
        . all rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
