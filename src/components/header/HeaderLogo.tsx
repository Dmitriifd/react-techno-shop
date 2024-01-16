import { Link } from 'react-router-dom';

import Logo from '@assets/icons/logo.png';

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center font-bold mr-[30px]">
      <img src={Logo} alt="logo" />
      <p className="text-lg leading-4 max-w-[84px] uppercase text-indigo-700">Techno shop</p>
    </Link>
  );
};

export { HeaderLogo };
