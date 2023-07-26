import Link from "next/link";

function Footer() {
  return (
    <footer className="flex fixed bottom-0 left-0 justify-center items-center py-2 w-screen h-16 md:h-10 bg-secondary">
      <p className="flex justify-center items-center py-1 text-sm text-tertiary md:text-base">
        © Copyright {new Date().getFullYear()}{" "}
        <Link href="https://github.com/Tiramitzu" className="font-semibold hover:text-violet-500">
          &nbsp;Tiramitzu
        </Link>
        . all rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
