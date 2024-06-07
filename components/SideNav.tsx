"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Dialog, DialogTrigger } from "./ui/dialog";
import PricingDialog from "@/app/(routes)/dashboard/_components/PricingDialog";


export const SideNav = () => {
  const router = useRouter();
  const routes = [
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/sign-in",
      label: "Sign In",
    },
    {
      href: "/sign-up",
      label: "Sign Up",
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
            
                  <Dialog>
                    <DialogTrigger className="hover:bg-accent hover:text-accent-foreground bg-transparent text-black h-9 rounded-md px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      Pricing
                    </DialogTrigger>
                    <PricingDialog />
                  </Dialog>

            <div
              className={cn(
                "border border-input text-foreground text-center text-base group flex p-2 w-full justify-start font-normal cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  "bg-primary/80 text-slate-100 hover:bg-primary hover:text-slate-100"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <LoginLink>
                Sign in
                </LoginLink>
              </div>
            </div>
            <div
              className={cn(
                "border border-input text-foreground text-center text-base group flex p-2 w-full justify-start font-normal cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  "bg-primary/80 text-slate-100 hover:bg-primary hover:text-slate-100"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <RegisterLink>
                Register
                </RegisterLink>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
