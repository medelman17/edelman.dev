import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t">
      <p className="text-gray-500 dark:text-gray-400">
        © 2024 Michael Edelman. All rights reserved.
      </p>
      <div className="space-x-4">
        {/* <Link
          className="text-gray-500 hover:underline dark:text-gray-400"
          href="#"
        >
          Privacy Policy
        </Link>
        <Link
          className="text-gray-500 hover:underline dark:text-gray-400"
          href="#"
        >
          Terms of Service
        </Link> */}
      </div>
    </div>
  );
}
