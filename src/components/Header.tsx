'use client';

import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { PiBasketDuotone } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';

import Link from 'next/link';

import Logo from '@/components/ui/Logo';
import Search from '@/components/ui/Search';
import { SearchContext } from '@/contexts/SearchContext';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { search, setSearch } = useContext(SearchContext);

  useLayoutEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        setHeight(entry.contentRect.height);
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <>
      <header ref={ref} className="fixed top-0 left-0 right-0 bg-amber-700 w-full py-3">
        <div className="container mx-auto px-3.5 w-full">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>
            <Search search={search} setSearch={setSearch} />
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
      <div style={{ height }} />
    </>
  );
};

export default Header;
