import React from 'react'

const EmptyCart = () => {
  return (
    <div className="bg-[rgb(234,237,237)]  " >
      <div className=" flex justify-center h-[290px] w-[1180px] mt-4 bg-white rounded-md items-center">
        <div className="h-[254px] w-[1187px] ml-40">
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            className="m-8 mt-16 h-[217px] w-[379]"
          />
        </div>
        <div className="w-[782px] h-[113px] mr-[280px]">
          <div>
            <h1 className="font-bold text-2xl">Your Amazon Cart is empty</h1>
            <h1 className="text-[#0071A5] text-xs mt-1 mb-3">Shop today's deals</h1>
          </div>
          <div className="flex justify-evenly">
            <button className="bg-[#FBCF13] rounded-lg px-2 py-1">
              Sign in your account
            </button>
            <button className="border-2 bg-white p-2 rounded-lg ">
              Sign up now
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EmptyCart
