import { useCurrentUser } from "@/hooks/use-currentuser";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";
function googleSignIn(): Promise<void> {
  return new Promise((resolve) => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    resolve();
  });
}

export function UserButton() {
  const router = useRouter();
  const { user } = useCurrentUser();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="size-8 rounded-full">
              <Avatar>
                <AvatarImage
                  src={user?.profilePicture || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {user?.displayName?.charAt(0) || ""}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="cursor-pointer">
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/dashboard">dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          {" "}
          <div className="w-full flex-1 md:w-auto md:flex-none space-x-2 hidden md:flex">
            <Button onClick={googleSignIn}>Get started</Button>
          </div>
        </>
      )}
    </div>
  );
}
