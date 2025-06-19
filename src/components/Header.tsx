import React from 'react';
import { PiBasketDuotone } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-700 w-full py-3">
      <div className="container mx-auto px-3.5 w-full">
        <div className="flex justify-between items-center">
          <Link href="/">Logo</Link>
          <input type="search" placeholder="Search" />
          <div className="flex gap-1.5">
            <Link href="/">
              <PiBasketDuotone />
            </Link>
            <Link href="/">
              <VscAccount />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
