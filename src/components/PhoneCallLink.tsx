import PhoneIcon from '@assets/icons/phone.svg?react';

const PhoneCallLink = ({ className }: { className: string }) => {
  return (
    <ul className={className}>
      <li>
        <a className="group transition-transform flex items-center gap-2 text-sm" href="tel:+73534553322">
          <PhoneIcon className="group-hover:scale-[1.1] duration-300" />
          +7 (3534) 55-33-22
        </a>
      </li>
      <li>
        <a className="text-sm text-accent-base" href="tel:+73534553322">
          Заказать звонок
        </a>
      </li>
    </ul>
  );
};

export { PhoneCallLink };
