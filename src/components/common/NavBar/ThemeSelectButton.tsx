import styled from '@emotion/styled';
import Button from '../Button';
import { IconMoon, IconSun } from '@tabler/icons-react';

const ThemeSelectButton = (props: { onClick: () => void }) => {
  return (
    <Button
      variant='text'
      size='md'
      color='--adaptive500'
      onClick={props.onClick}
    >
      <LightIcon>
        <IconMoon />
      </LightIcon>
      <DarkIcon>
        <IconSun />
      </DarkIcon>
    </Button>
  );
};

export default ThemeSelectButton;

const LightIcon = styled.div`
  html.dark & {
    display: none;
  }
`;

const DarkIcon = styled.div`
  html.light & {
    display: none;
  }
`;
