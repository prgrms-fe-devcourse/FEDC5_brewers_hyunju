import styled from '@emotion/styled';
import {
  IconCheck,
  IconDeviceDesktop,
  IconMoon,
  IconSun,
} from '@tabler/icons-react';
import Modal from '../Modal';
import Box from '../Box';
import StyledText from '../Text';
import { MouseEventHandler } from 'react';
import { getItem, setItem } from '~/utils/localStorage';

export interface ThemeSelectModalPropsType {
  visible: boolean;
  handleClose: () => void;
}

const ThemeSelectModal = (props: ThemeSelectModalPropsType) => {
  const currentTheme = getItem('BREWERS_THEME', '');

  const themes = [
    {
      value: 'light',
      icon: <IconSun />,
      name: '라이트',
      description: '항상 라이트 모드를 사용합니다.',
    },
    {
      value: 'dark',
      icon: <IconMoon />,
      name: '다크',
      description: '항상 다크 모드를 사용합니다.',
    },
    {
      value: '',
      icon: <IconDeviceDesktop />,
      name: '시스템',
      description: '시스템 설정을 따릅니다.',
    },
  ];

  const handleClickItem: MouseEventHandler<HTMLLIElement> = (e) => {
    const theme = e.currentTarget.dataset.value ?? '';

    setItem('BREWERS_THEME', theme);

    if (theme !== '') {
      document.documentElement.className = theme;
    } else {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.className = mql.matches ? 'dark' : 'light';
    }

    props.handleClose();
  };

  return (
    <Modal
      visible={props.visible}
      handleClose={props.handleClose}
    >
      <Modal.Header handleClose={props.handleClose}>
        <Text
          size='lg'
          weight={800}
        >
          테마 선택
        </Text>
      </Modal.Header>
      <Modal.Body>
        <ThemeList>
          {themes.map((theme) => (
            <ThemeItem
              key={theme.name}
              data-value={theme.value}
              onClick={handleClickItem}
              {...(theme.value === currentTheme && { 'data-selected': true })}
            >
              {theme.icon}
              <Box>
                <Text mb={0.25}>{theme.name}</Text>
                <Text size='sm'>{theme.description}</Text>
              </Box>
              {theme.value === currentTheme && <IconCheck size={18} />}
            </ThemeItem>
          ))}
        </ThemeList>
      </Modal.Body>
    </Modal>
  );
};

export default ThemeSelectModal;

const ThemeList = styled.ul`
  display: flex;
  flex-direction: column;

  /* max-width: 20rem; */
  margin: 0 auto;

  gap: 0.5rem;
`;

const ThemeItem = styled.li`
  display: flex;
  align-items: center;

  padding: var(--padding-sm);

  color: var(--adaptive500);

  gap: 1rem;

  &:hover {
    background-color: var(--adaptive200);
    color: var(--adaptive900);
  }

  &[data-selected='true'] {
    color: var(--adaptive900);
  }
`;

const Text = styled(StyledText)`
  color: inherit;
`;
