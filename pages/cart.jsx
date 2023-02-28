import EmptyCart from "@/components/EmptyCart";
import FullCart from "@/components/FullCart";
import LowerNav from "@/components/LowerNav";
import NavBar from "@/components/NavBar";
<<<<<<< HEAD
import SubTotal from "@/components/SubTotal";
=======
>>>>>>> f1f46b20d0e685505a640cae9ac53bfd283ea36f
import { useSession } from "next-auth/react";
import React from "react";

const cart = () => {
<<<<<<< HEAD
  const { data: session } = useSession();
=======
  const {data:session}  = useSession()
>>>>>>> f1f46b20d0e685505a640cae9ac53bfd283ea36f

  return (
    <>
      <NavBar />
      <LowerNav />
<<<<<<< HEAD
      <div className="bg-[rgb(234,237,237)] flex">
        <div className="w-[1227px] p-8 bg-white h-full">
          {!session?.user ? <EmptyCart /> : <FullCart />}
        </div>
        <div className="w-[300px] h-40 text-center bg-white ml-16">
          {!session ? 'Login in To add product' : <SubTotal />}
        </div>
      </div>
=======
      <div className="bg-[rgb(234,237,237)]">

      {!session?.user ? <EmptyCart /> :<FullCart />}
      </div>
    
   
>>>>>>> f1f46b20d0e685505a640cae9ac53bfd283ea36f
    </>
  );
};

export default cart;
