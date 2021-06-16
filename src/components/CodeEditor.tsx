import { FC } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import { ThemeType } from '../App';

interface ICodeEditorProps {
  id: string;
  mode: string;
  onChange: (newValue: string) => void;
  theme: ThemeType;
}

const CodeEditor: FC<ICodeEditorProps> = ({ mode = 'html', id, onChange, theme }) => {
  return (
    <AceEditor
      height="94%"
      mode={mode}
      width="100%"
      theme={theme === 'dark' ? 'monokai' : 'github'}
      onChange={onChange}
      name={id}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        enableLiveAutocompletion: true,
      }}
    />
  );
};

export default CodeEditor;
