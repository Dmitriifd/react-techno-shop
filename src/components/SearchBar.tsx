import SearchIcon from '@assets/icons/search.svg?react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';

const SearchBar = () => {
  return (
    <form className="relative">
      <Input className="h-[50px] pr-14" placeholder="Поиск" />
      <Button variant="search" type="submit" className="absolute top-2 right-1">
        <SearchIcon fill="#FE9015" />
      </Button>
    </form>
  );
};

export { SearchBar };
