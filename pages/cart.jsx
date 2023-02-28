import EmptyCart from "@/components/EmptyCart";
import FullCart from "@/components/FullCart";
import LowerNav from "@/components/LowerNav";
import NavBar from "@/components/NavBar";
import SubTotal from "@/components/SubTotal";
import { useSession } from "next-auth/react";
import React from "react";

const cart = () => {
  const { data: session } = useSession();

  return (
    <>
      <NavBar />
      <LowerNav />
      <div className="bg-[rgb(234,237,237)] flex">
        <div className="w-[1227px] p-8 bg-white h-full">
          {!session?.user ? <EmptyCart /> : <FullCart />}
        </div>
        <div className="w-[300px] h-40 text-center bg-white ml-16">
          {!session ? 'Login in To add product' : <SubTotal />}
        </div>
      </div>
    </>
  );
};

export default cart;
