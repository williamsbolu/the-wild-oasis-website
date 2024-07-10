import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "@/app/_components/ReservationContext";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    default: "Welcome / The Wild Oasis",
    template: "%s / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Josefin.className} relative antialiased bg-primary-950 flex flex-col text-primary-100 min-h-screen`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

// subsets: ["latin"] latin is selected if youre using a language like english (remember layout needs to be a server component)
// And you'll have to specify the font weight if the font is not a variable font (ie a font with variable weight, Josefin_Sans is a variable font)

// IF you want to use other font like on headings, you only need to add that classname "font.className" on those heading elements
