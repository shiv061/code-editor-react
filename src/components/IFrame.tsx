import { Dispatch, SetStateAction, useMemo } from 'react';
import { useState } from 'react';
import { FC } from 'react';
import { ThemeType } from '../App';
import Button from './Button';
import SaveButton from './SaveButton';
import ThemeButton from './ThemeButton';

interface IIFrameProps {
  html: string;
  css: string;
  javascript: string;
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export interface IStateProps {
  html: string;
  css: string;
  javascript: string;
}

const IFrame: FC<IIFrameProps> = ({ html, css, javascript, theme, setTheme }) => {
  const [state, setState] = useState<IStateProps>({
    html: '',
    css: '',
    javascript: '',
  });

  const Code = useMemo(() => {
    return `
        ${state.html}
    <style>
        ${state.css}
    </style>
    <script>
        ${state.javascript}
    </script>
    `;
  }, [state]);

  return (
    <div>
      <div className="flex w-full">
        <Button setState={setState} html={html} css={css} javascript={javascript} />
        <ThemeButton theme={theme} setTheme={setTheme} />
        <SaveButton html={state.html} css={state.css} javascript={state.javascript} />
      </div>
      <iframe className="w-full h-full overflow-auto" style={{ maxHeight: 'calc(100% - 40px)' }} title="code-editor" srcDoc={Code} sandbox="allow-scripts" />
    </div>
  );
};

export default IFrame;
