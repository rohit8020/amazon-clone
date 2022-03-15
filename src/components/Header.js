import React from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
    
  return (
    <header>
    <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
      {/* this is upper nav */}
      <div className="mt-2 flex flex-grow items-center sm:flex-flex-grow-0">
            <Image
                src="https://w7.pngwing.com/pngs/426/70/png-transparent-amazon-com-gift-card-discounts-and-allowances-coupon-credit-card-ebay-text-logo-internet.png"

                width={150}
                height={40}
                objectFit="contain" 
                className="cursor-pointer"
            />
 
            {/* search bar */}
            <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
                <input type="text" className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                <SearchIcon className="h-12 p-4"/>
            </div>

            {/* right part of the nav */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6">
                <div className="cursor-pointer link">
                    SignUp
                </div>
                <div className="cursor-pointer link">
                    <p>Returns</p>
                    <p>& orders</p>
                </div>
                <div className="cursor-pointer link">
                    <ShoppingCartIcon className="h-10" />
                </div>
            </div>
      </div>

      {/* this is lower nav */}
      <div>

      </div>
    </div>
    </header>
  );
}

export default Header;
