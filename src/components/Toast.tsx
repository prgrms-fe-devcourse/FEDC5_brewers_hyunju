import styled, { keyframes } from 'styled-components';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import ColorType from '~/types/design/color';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import { Property } from 'csstype';

interface ToastPropsType {
  text: string;
  size?: FontSizeType;
  weight?: FontWeightType;
  color?: ColorType;
  borderColor?: ColorType;
  progressBarColor?: ColorType;
  progressBarHeight?: number;
  position?: 'top' | 'bottom' | 'center';
  time?: number;
}

interface SpacerPropsType {
  padding: Property.Padding;
}

const Toast = ({
  text,
  size = 'md' as FontSizeType,
  weight = 400,
  color = '--primaryColor' as ColorType,
  borderColor = '--primaryColor' as ColorType,
  progressBarColor = '--primaryColor' as ColorType,
  progressBarHeight = 1,
  // position = 'top', //TODO
  time = 3000,
}: ToastPropsType) => {
  const Spacer = styled.div<SpacerPropsType>`
    padding: ${(props) => `${props.padding}`};
  `;

  const ProgressBarContainer = styled.div`
    width: 100%;
    height: ${progressBarHeight}rem;

    background-color: var(--adaptive50);
  `;

  const progress = keyframes`
  from{
    width: 100%;
  }

  to{
    width: 0%
  }
  `;

  const ProgressBar = styled.div`
    width: 100%;
    height: 1rem;

    background-color: var(${progressBarColor});

    animation: ${progress} ${time}ms ease-in;

    animation-fill-mode: forwards;
  `;

  const CloseButton = styled.button`
    width: 1rem;
    height: 1rem;
  `;

  const Container = styled.div`
    width: 25rem;
    border: 0.075rem solid var(${borderColor});
  `;

  return (
    <Container>
      <Flex direction='column'>
        <Spacer padding={'0.75rem 0.75rem 1.25rem 0.75rem'}>
          <Flex direction='column'>
            <Flex justifyContent='flex-end'>
              <CloseButton>x</CloseButton>
            </Flex>
            <Text
              color={color}
              weight={weight}
              size={size}
            >
              {text}
            </Text>
          </Flex>
        </Spacer>
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
      </Flex>
    </Container>
  );
};

export default Toast;
