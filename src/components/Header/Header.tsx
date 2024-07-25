import Image from 'next/image';

function Header() {
  return (
    <header className="w-full flex-shrink-0 border-secondary bg-secondary px-2 pt-2">
      <div className="flex w-full items-center gap-2 rounded-md bg-primary px-3 py-2">
        <div>
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        </div>
        <p className="text-xs text-white">x Vadim Zaporozhets</p>
      </div>
    </header>
  );
}

export default Header;
