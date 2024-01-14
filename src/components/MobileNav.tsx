import { mobileNavLink } from '@mock/data';

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-99 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.14)] block md:hidden h-[60px] px-4">
      <ul className="flex items-center justify-between">
        {mobileNavLink.map(({ id, title, ulr, icon }) => (
          <li key={id}>
            <a href={ulr} className="p-2 flex flex-col gap-1 items-center justify-center text-[#B5BBC4] text-xs">
              {icon}
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { MobileNav };
