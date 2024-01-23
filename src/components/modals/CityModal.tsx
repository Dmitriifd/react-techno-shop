import { useState } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import GeoIcon from '@assets/icons/geo.svg?react';
import { SearchBar } from '@components/forms/SearchBar';
import { cities } from '@mock/data';

const CityModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Москва');

  const selectCity = (title: string) => {
    setSelectedCity(title);
    setOpen(false);
  };

  const listСities1 = cities.slice(0, 5);
  const listСities2 = cities.slice(5);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center p-1 pr-0 gap-2 sm:ml-auto md:ml-0">
        <GeoIcon />
        <span className="text-sm lg:max-w-[70px]">{selectedCity}</span>
        <ArrowIcon />
      </DialogTrigger>
      <DialogContent className="test p-10  mb-4  md:h-max ">
        <SearchBar />
        <DialogHeader>
          <DialogTitle className="text-center pb-5 pt-3">Выберите ваш город</DialogTitle>
          <div className="flex justify-between">
            <ul className="flex flex-col justify-start text-sm md:text-lg">
              {listСities1.map(({ id, title }) => (
                <li key={id}>
                  <button
                    className="p-2 rounded-sm transition-colors hover:bg-[#ECEFF3]"
                    onClick={() => selectCity(title)}>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col justify-start text-sm md:text-lg">
              {listСities2.map(({ id, title }) => (
                <li key={id}>
                  <button
                    className="p-2 rounded-sm transition-colors hover:bg-[#ECEFF3]"
                    onClick={() => selectCity(title)}>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { CityModal };
