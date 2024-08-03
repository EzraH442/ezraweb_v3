import { Comfortaa, Open_Sans, Roboto_Slab } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

export { comfortaa, openSans, robotoSlab };
