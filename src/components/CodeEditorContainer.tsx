import { FC } from 'react';
import { ThemeType } from '../App';
import CodeEditor from './CodeEditor';

interface ICodeEditorContainerProps {
  onHtmlChange: (newValue: string) => void;
  onCssChange: (newValue: string) => void;
  onJavascriptChange: (newValue: string) => void;
  theme: ThemeType;
}

const CodeEditorContainer: FC<ICodeEditorContainerProps> = ({ onHtmlChange, onCssChange, onJavascriptChange, theme }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-3 overflow-auto">
      <div className="col-span-1">
        <div className="bg-gray-800 text-white font-bold text-center">HTML</div>
        <CodeEditor id="div_id_1" theme={theme} mode="html" onChange={onHtmlChange} />
      </div>
      <div className="col-span-1 h-full">
        <div className="bg-gray-800 text-white font-bold text-center">CSS</div>
        <CodeEditor id="div_id_2" theme={theme} mode="css" onChange={onCssChange} />
      </div>
      <div className="col-span-1 h-full">
        <div className="bg-gray-800 text-white font-bold text-center">Javascript</div>
        <CodeEditor id="div_id_3" theme={theme} mode="javascript" onChange={onJavascriptChange} />
      </div>
    </div>
  );
};

export default CodeEditorContainer;
