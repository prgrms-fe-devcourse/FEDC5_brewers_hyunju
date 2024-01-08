import { useState, useCallback } from 'react';
import sanitizeHtml from 'sanitize-html';

const usePostContent = () => {
  const [content, setContent] = useState('');

  const sanitize = useCallback((html: string) => {
    const sanitizeConfig = {
      allowedTags: ['p', 'div'],
      allowedAttributes: { a: ['href'] },
    };

    return sanitizeHtml(html, sanitizeConfig);
  }, []);

  const handleBlur = useCallback(() => {
    setContent((prev) => sanitize(prev));
  }, [sanitize]);

  const handleInput = useCallback((e: React.FormEvent) => {
    setContent(e.currentTarget.innerHTML);
  }, []);

  return { content, handleBlur, handleInput };
};

export default usePostContent;
