import SearchIcon from '@assets/icons/search.svg?react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';

const HeaderSearch = () => {
  return (
    <form className="flex-1 mr-[15px] relative">
      <Input className="flex-auto h-[50px]" />
      <Button variant="search" type="submit" className="absolute top-2 right-1">
        <SearchIcon fill="#FE9015" />
      </Button>
    </form>
  );
};

export { HeaderSearch };
