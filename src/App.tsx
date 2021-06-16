import { useState } from 'react';
import Container from './components/Container';
import CodeEditorContainer from './components/CodeEditorContainer';
import IFrame from './components/IFrame';

export type ThemeType = 'dark' | 'light';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [theme, setTheme] = useState<ThemeType>('dark');

  const onHtmlChange = (newValue: string) => {
    setHtml(newValue);
  };

  const onCssChange = (newValue: string) => {
    setCss(newValue);
  };

  const onJavascriptChange = (newValue: string) => {
    setJavascript(newValue);
  };

  return (
    <Container>
      <CodeEditorContainer theme={theme} onHtmlChange={onHtmlChange} onCssChange={onCssChange} onJavascriptChange={onJavascriptChange} />
      <IFrame html={html} css={css} javascript={javascript} theme={theme} setTheme={setTheme} />
    </Container>
  );
}

export default App;
