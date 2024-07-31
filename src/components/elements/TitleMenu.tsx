import React, { FC } from 'react';

interface TitleMenuProps {
  title: string;
}

const TitleMenu: FC<TitleMenuProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-[2rem] font-bold">{title}</h1>
    </div>
  );
};

export default TitleMenu;
