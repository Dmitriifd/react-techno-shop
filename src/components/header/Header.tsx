import { HeaderBottom } from './HeaderBottom';
import { HeaderCenter } from './HeaderCenter';
import { HeaderTop } from './HeaderTop';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
      </div>
    </header>
  );
};

export { Header };
