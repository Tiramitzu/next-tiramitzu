import Link from "next/link";

function Footer() {
  return (
    <footer className="fixed bg-neutral-900 w-screen py-2 bottom-0 left-0 h-16 flex justify-center items-center">
      <p className="py-1 text-lg text-white flex justify-center items-center">
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
