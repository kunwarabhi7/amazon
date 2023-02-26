import EmptyCart from "@/components/EmptyCart";
import FullCart from "@/components/FullCart";
import LowerNav from "@/components/LowerNav";
import NavBar from "@/components/NavBar";
import { useSession } from "next-auth/react";
import React from "react";

const cart = () => {
  const {data:session}  = useSession()

  return (
    <>
      <NavBar />
      <LowerNav />
      {!session?.user ? <EmptyCart /> :<FullCart />}
    
   
    </>
  );
};

export default cart;
