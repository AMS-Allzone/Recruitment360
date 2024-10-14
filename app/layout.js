import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./Components/Layouts/Sidebar";
import ThemeProvider from "./Components/Context/ThemeContext";
import Header from "./Components/Layouts/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="w-full h-full">
        <ThemeProvider>
          <div className="container-fluid h-screen dark:bg-gray-900 dark:text-white transition-colors duration-200 flex">
            {/* Sidebar */}
            <div className="hidden md:block md:w-1/6 mt-4 mx-2 relative z-50 h-[96vh] fixed left-0 top-0 shadow-3xl rounded-3xl">
              <Sidebar />
            </div>

            {/* Main content area including Header */}
            <div className="flex-1 flex flex-col pt-20 md:pt-18 mb-4  scroll-container pr-2"  > {/* Sidebar width is 1/6 */}
              {/* Header */}
              <Header className="md:w-full w-5/6 " />

              {/* Content */}
              <div className="flex-grow w-full pt-6 dark:bg-gray-900 md:w-full p-2 px-0  overflow-auto ">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
