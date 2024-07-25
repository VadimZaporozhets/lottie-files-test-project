import { FC, ReactNode } from 'react';

type PropTileProps = {
  label: string;
  children: ReactNode;
};

const PropTile: FC<PropTileProps> = ({ children, label }) => (
  <div className="border-b border-secondary px-3 pb-2 pt-4">
    <p className="mb-2 text-sm text-white">{label}</p>
    {children}
  </div>
);

export default PropTile;
