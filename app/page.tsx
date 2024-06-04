import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mt-[40px] mb-[60px] flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Mark It, Note It, Remember It.
          </p>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
          Mark the <span className="text-blue-600">Documents</span><br></br> That Really Matters.
        </h1>

        <p className="mt-9 mb-[40px] max-w-prose text-lg text-zinc-700 sm:text-2xl">
          Making a mark on essential details, streamlining documentation for engineering teams by focusing on what truly matters.
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={"/dashboard"}
        >
          Try Mark-It
        </Link>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/mainpage1.png"
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>


      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-20 ">
          {/* Intro */}
          <div className="sm:mb-[80px]">
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Kickstart Workflows in seconds with Mark-It
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Centralize all of your scattered docs and diagrams. Build a team knowledge repository with a multiplayer-first tool.
                </p>
              </div>
            </div>
            {/* steps */}

   
            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                    Register for Your Free Account
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span> */}
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                    Set Up Your <span className="text-blue-600">Team</span>  Space
                    {/* &{" "}<span className="text-blue-600">Scenario</span> */}
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                    Create File, Begin Your Work
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                
              </span> */}
                </div>
              </li>
            </ol>
          </div>

          {/* Scenarios */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  <span className="text-blue-600">By</span> developers <span className="text-blue-600">For</span> developers <span className="text-blue-600">To</span> development
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get help to create innovative solutions using our
                  developer-focused platform.
                </p>
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
              <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Diagram as Code</CardTitle>
                  <CardDescription className="mb-3 text-center">
                  Create beautiful diagrams with a straightforward syntax
                  </CardDescription>
                  {/* <Image
                    src="/coffee.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  /> */}
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>File Management</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Convex ensures your files are managed efficiently
                  </CardDescription>
                  {/* <Image
                    src="/coffee.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  /> */}
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Markdown</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Our notes feature checklists, warnings, ect...
                  </CardDescription>
                  {/* <Image
                    src="/taxi.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  /> */}
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Export</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Export your canvas effortlessly with our seamless tools
                  </CardDescription>
                  {/* <Image
                    src="/schedule.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  /> */}
                </Card>
              </div>
            </div>
            <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>


          {/* image for code  */}
          <div className="sm:mt-[-30px]">
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
                />
              </div>

              <div>
                <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                  <div className=" flow-root">
                    <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                      <Image
                        src="/code.png"
                        alt="product preview"
                        width={955}
                        height={808}
                        quality={100}
                        className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
                />
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div className="sm:mt-[80px]">
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Powered By
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  These are the technologies behind the scene that make Mark-It
                  possible
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Convex</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Robust Data Handling
                  </CardDescription>
                  <Image
                    src="/database.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Editor.Js</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Modular Content Editor
                  </CardDescription>
                  <Image
                    src="/form.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>ExcaliDraw</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Interactive Diagramming Tool
                  </CardDescription>
                  <Image
                    src="/drawing.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div>
            {/* <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Feedback
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  What are people saying about Convo
                </p>
              </div>
            </div> */}
            {/* steps */}

            {/* <div>
              <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                <div className="flow-root">
                  <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      width={2556}
                      height={1436}
                      quality={100}
                      src="/tweet_collage.png"
                      alt="Header image"
                      className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
