import { ChangeEvent, useState } from 'react';

const useFeedContent = () => {
  const [content, setContent] = useState('');

  const handleInput = (e: ChangeEvent<HTMLDivElement>) => {
    setContent(e.target.innerText);
  };

  const removeContent = () => {
    setContent('');
  };

  return { content, removeContent, handleInput };
};

export default useFeedContent;
