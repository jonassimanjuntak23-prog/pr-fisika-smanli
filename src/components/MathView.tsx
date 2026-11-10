import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (err) {
      console.warn('KaTeX render error:', err);
      return `<span class="text-rose-600 font-mono">${math}</span>`;
    }
  }, [math, block]);

  return (
    <span
      className={`katex-wrapper ${block ? 'block my-2 overflow-x-auto py-1 text-center' : 'inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
