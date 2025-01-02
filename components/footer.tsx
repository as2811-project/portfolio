import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer className="flex flex-col p-5 justify-center h-auto border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-10 text-center">
        <div className="flex flex-col items-center">
          <span className="">Anandh's Personal Website</span>
          <span className="text-sm text-gray-500">
            Built with Next.js and Supabase
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="">Links</h3>
          <ul className="text-sm text-gray-500">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/photography">Photography</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="">Connect with me</h3>
          <ul className="text-sm text-gray-500">
            <li>
              <a
                href="mailto:sanandh1234@gmail.com"
                className="hover:underline"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anandh-sellamuthu-as/"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-8 text-center">
        &copy; Anandh Sellamuthu | {new Date().getFullYear()}
      </div>
    </footer>
  );
}
