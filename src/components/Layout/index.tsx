import { PropsWithChildren } from "react";
import Navbar from "@components/Layout/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
