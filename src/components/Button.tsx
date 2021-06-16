import { Dispatch, FC, SetStateAction } from 'react';
import { IStateProps } from './IFrame';

interface IButtonProps {
  html: string;
  css: string;
  javascript: string;
  setState: Dispatch<SetStateAction<IStateProps>>;
}

const Button: FC<IButtonProps> = ({ html, css, javascript, setState }) => {
  return (
    <div
      className="cursor-pointer px-2 py-1 bg-gray-700 text-white font-bold text-center hover:opacity-90 w-full"
      onClick={() => {
        setState({
          html,
          css,
          javascript,
        });
      }}
    >
      Run Code
    </div>
  );
};

export default Button;
