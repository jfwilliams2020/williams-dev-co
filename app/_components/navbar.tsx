import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex space-x-4 text-blue-500">
      <Link 
        href="/portfolio/sunnyside"
        target="_blank"
      >
        Sunnyside
      </Link>
      <Link
        href="https://worksafetyindex.com/"
        target="_blank"
      >
        Work Safety Index
      </Link>
    </div>
  )
}
