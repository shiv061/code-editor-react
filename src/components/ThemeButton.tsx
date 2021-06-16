import { FC } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ThemeType } from '../App';

interface IThemeButtonProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const ThemeButton: FC<IThemeButtonProps> = ({ theme, setTheme }) => {
  const handleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="cursor-pointer px-2 py-1 bg-blue-900 text-white font-bold text-center hover:opacity-90 w-full" onClick={handleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </div>
  );
};

export default ThemeButton;
