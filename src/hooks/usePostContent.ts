import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import sanitizeHtml from 'sanitize-html';
import { postModalState } from '~/atoms/postModalState';

const usePostContent = () => {
  const setPostModal = useSetRecoilState(postModalState);

  const sanitize = useCallback((html: string) => {
    const sanitizeConfig = {
      allowedTags: ['p', 'div'],
      allowedAttributes: { a: ['href'] },
    };

    return sanitizeHtml(html, sanitizeConfig);
  }, []);

  const handleBlur = useCallback(() => {
    setPostModal((prev) => ({ ...prev, content: sanitize(prev.content) }));
  }, [sanitize, setPostModal]);

  const handleInput = useCallback(
    (e: React.FormEvent) => {
      setPostModal((prev) => ({ ...prev, content: e.currentTarget.innerHTML }));
    },
    [setPostModal]
  );

  return { handleBlur, handleInput };
};

export default usePostContent;
