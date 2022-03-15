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
                <div className="link">
                    <p className='font-extrabold md:text-sm'>SignUp</p>
                </div>
                <div className="link">
                    <p className='font-extrabold md:text-sm'>Returns</p>
                    <p className='font-extrabold md:text-sm'>& orders</p>
                </div>
                <div className="link relative flex items-center">
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full'>4</span>
                    <ShoppingCartIcon className="h-10" />
                    <p className='hidden md:inline font-extrabold md:text-sm'>Basket</p>
                </div>
            </div>
        </div>
    </div>

    {/* this is lower nav */}
    <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white'>
        <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-1'/>All
        </p>
        <p className='link'>Prime Video</p>
    </div>
    </header>
  );
}

export default Header;
