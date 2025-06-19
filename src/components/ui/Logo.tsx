import React from 'react';

import Image from 'next/image';

import LogoIcon from '@/assets/logo.png';

const Logo = () => {
  return <Image src={LogoIcon} alt="Logo" width={40} height={40} />;
};

export default Logo;
