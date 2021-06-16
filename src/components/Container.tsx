import { FC } from 'react';

const Container: FC = ({ children }) => {
  return <div className="h-screen w-screen grid grid-rows-2">{children}</div>;
};

export default Container;
