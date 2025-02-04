"use client"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen bg-black w-screen">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-5 italic">
              qid
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4  
              md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
              dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              {["App", "QR Check-In", "C-Form Pro", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-400 rounded-sm hover:text-white hover:bg-gray-100 
                    md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 
                    dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-black relative h-screen">
        <div
          className="absolute inset-0 bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/images/fingerprint.svg')`,
            backgroundSize: "50%",

            backgroundPosition: "center",
            transform: "rotate(45deg) scale(3)",
            transformOrigin: "center",
          }}
        />

        <div className="flex h-full justify-center items-center flex-col z-10">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-wrap text-white w-2/3 text-center mb-8">
  Every person deserves to know and be known by their true identity
</div>


          <Button variant="outline" className="rounded-full">
            Download qid
          </Button>
        </div>
      </div>
    </div>
  );
}
