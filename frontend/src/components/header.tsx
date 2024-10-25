"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "./shared/user-button";

const navItems: { name: string; href: string }[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={"/"} className="mr-6 flex items-center space-x-2">
            LOGO
          </Link>
          <nav className="flex items-center space-x-7 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `transition-colors hover:text-foreground/80`,
                  pathname === item.href
                    ? "text-foreground/80"
                    : "text-foreground/40"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
