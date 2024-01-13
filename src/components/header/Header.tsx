import { HeaderBottom } from './HeaderBottom';
import { HeaderCenter } from './HeaderCenter';
import { HeaderTop } from './HeaderTop';

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  );
};

export { Header };
