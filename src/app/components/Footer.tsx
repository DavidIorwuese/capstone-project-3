import Link from "next/link";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer items-center p-4 mt-10 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src="/logo.png" className="w-10 h-10" alt="logo" />
        <p>Copyright © 2024 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        
        <Link href="https://github.com/DavidIorwuese">
          <AiOutlineGithub className="w-7 h-7 hover:text-slate-400" />
        </Link>
        <Link href="https://x.com/DavidIorwu73016">
          <AiOutlineTwitter className="w-7 h-7 hover:text-blue-400" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
