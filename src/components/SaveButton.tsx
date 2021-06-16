import FileSaver from 'file-saver';
import { FC } from 'react';

interface ISaveButtonProps {
  html: string;
  css: string;
  javascript: string;
}

const SaveButton: FC<ISaveButtonProps> = ({ html, css, javascript }) => {
  const handleDownloadTextFile = () => {
    const codeText = `
        ${html}
        <style>
            ${css}
        </style>
        <script>
            ${javascript}
        </script>
      `;
    var blob = new Blob([codeText], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'download.txt');
  };

  return (
    <div className="cursor-pointer px-2 py-1 bg-gray-900 text-white font-bold text-center hover:opacity-90 w-full" onClick={handleDownloadTextFile}>
      Save Code
    </div>
  );
};

export default SaveButton;
