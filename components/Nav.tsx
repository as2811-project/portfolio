import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Photography", href: "/photography" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 font-medium">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm transition-colors hover:text-blue-500",
            pathname === item.href
              ? "bg-secondary/80 px-3 py-1.5 rounded-full hover:text-white"
              : "text-muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
