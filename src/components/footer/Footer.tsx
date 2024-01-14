import { HeaderNav } from '@components/header/HeaderNav';
import { PhoneCallLink } from '@components/PhoneCallLink';

const Footer = () => {
  return (
    <footer className="border-t pt-10 pb-24 md:pb-10">
      <div className="container flex flex-col md:gap-y-12">
        <HeaderNav />
        <div className="flex mt-8 pt-8 border-t gap-y-10 flex-col md:border-t-0 md:pt-0 md:mt-0  md:gap-y-0 md:flex-row md:justify-between md:items-end">
          <div className=" flex flex-col gap-y-6 md:flex-row md:gap-10 lg:items-end">
            <p className="md:max-w-[170px] text-xs text-[#848992] lg:max-w-[250px]">
              © 2023-2024 Интернет-магазин «Techno Shop»
            </p>
            <p className="md:max-w-[170px] text-xs text-[#848992] lg:max-w-[250px]">
              Стоимость товаров на сайте не являеся публичой офертой
            </p>
            <p className="text-xs text-[#848992]">Условия соглашения</p>
          </div>
          <PhoneCallLink className="flex flex-row gap-2 md:flex-col lg:flex-row lg:gap-5" />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
