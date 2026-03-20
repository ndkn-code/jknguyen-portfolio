import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="w-full py-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
          <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Jack Nguyen. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="https://www.linkedin.com/in/ndkn10292002/"
              target="_blank"
              className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-primary dark:hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/ndkn-code"
              target="_blank"
              className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-primary dark:hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
