
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Dialog, DialogTrigger } from "./ui/dialog";
import PricingDialog from "@/app/(routes)/dashboard/_components/PricingDialog";


// type NavbarProps = {
//   isAuthenticated : boolean;
// }

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();
  const isUserSignedIn = false;
  const isAuthenticated = false;
  // const { isAuthenticated } = getKindeServerSession();
  // you cannot use getKindeServerSession in the client side 

  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="w-7 h-7"
            />
            <span className="text-2xl font-semibold">Mark-It</span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">
            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <LogoutLink
                className={buttonVariants({
                  size: "sm",
                })}>
                Logout
              </LogoutLink>
            )}

            <div className="hidden items-center space-x-4 sm:flex">
              {!isAuthenticated ? (
                <>
                  <Dialog>
                    <DialogTrigger className="mr-[-16px] hover:bg-accent hover:text-accent-foreground bg-transparent text-black h-9 rounded-md px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      Pricing
                    </DialogTrigger>
                    <PricingDialog />
                  </Dialog>

                  {/* <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Pricing
                  </Link> */}
                  <LoginLink
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}>
                    Sign in
                  </LoginLink>


                  <RegisterLink className={buttonVariants({
                    size: "sm",
                  })}>
                    Register
                  </RegisterLink>
                </>
              ) : (
                <>
                  <LogoutLink
                    className={buttonVariants({
                      size: "sm",
                    })}>
                    Logout
                  </LogoutLink>
                </>
              )}
            </div>

            {/* User profile mockup below, e.g using Clerk: <UserButton afterSignOutUrl="/" /> */}
            {/* {isUserSignedIn && (
              <div className="bg-emerald-600 border-2 border-black shadow-lg rounded-full w-10 h-10"></div>
            )} */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
