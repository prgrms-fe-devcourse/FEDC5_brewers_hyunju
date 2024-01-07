import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import { Property } from 'csstype';
import styled from 'styled-components';

interface DMItemPropsType {
  userName: string;
  userNameSize?: FontSizeType;
  userNameWeight?: FontWeightType;
  userNameColor?: ColorType;
  message: string;
  messageSize?: FontSizeType;
  messageWeight?: FontWeightType;
  messageColor?: ColorType;
  borderColor?: ColorType;
  color?: ColorType;
  alertCount?: number;
  alertColor?: ColorType;
  avatar?: string;
}

interface SpacerPropsType {
  padding: Property.Padding;
}

interface TextPropsType {
  size?: string;
  weight?: number;
  color?: string;
}

interface AvatarPropsType {
  avatar?: string;
}

const DMItem = ({
  userName,
  userNameSize = 'md',
  userNameWeight = 600,
  userNameColor = '--adaptive900',
  message = '',
  messageSize = 'md',
  messageWeight = 400,
  messageColor = '--adaptive900',
  borderColor = '--primaryColor',
  alertColor = '--adaptive50',
  alertCount = 0,
  avatar = '',
}: DMItemPropsType) => {
  const newAlertCount = alertCount > 99 ? '99+' : alertCount;

  const TextStyle = styled.p<TextPropsType>`
    display: -webkit-box;
    overflow: hidden;

    width: 100%;

    line-height: 1.2;
    text-align: left;

    -webkit-box-orient: vertical;

    -webkit-line-clamp: 2;

    text-overflow: ellipsis;
    word-wrap: break-word;
  `;

  const Border = styled.div`
    width: fit-content;
    height: fit-content;
    border-bottom: 0.0625rem solid var(${borderColor});
  `;

  const TextContainer = styled.div`
    overflow: hidden;

    width: 12.5rem;
    height: fit-content;
  `;

  const Spacer = styled.div<SpacerPropsType>`
    padding: ${(props) => `${props.padding}`};
  `;

  const AvatarContainer = styled.div`
    overflow: hidden;

    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
  `;

  const Avatar = styled.img<AvatarPropsType>`
    width: 3.5rem;
    height: 3.5rem;

    background-color: var(--adaptive300);

    alt: 'avatar';

    src: ${(props) => props.avatar};
  `;

  const AvatarDefault = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;

    background-color: var(--adaptive300);
  `;

  const Badge = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;

    background-color: var(${alertColor});

    vertical-align: middle;
  `;

  const BadgeText = styled.span`
    display: inline-block;

    color: var(--adaptive50);
    line-height: 1.6rem;
  `;

  return (
    <Flex>
      <Border>
        <Spacer padding={'0.75rem'}>
          <Flex
            direction='row'
            alignItems='center'
            gap={0.75}
          >
            {avatar ? (
              <AvatarContainer>
                <Avatar avatar={avatar} />
              </AvatarContainer>
            ) : (
              <AvatarDefault />
            )}
            <TextContainer>
              <Flex
                direction='column'
                alignItems='flex-start'
              >
                <Text
                  size={userNameSize}
                  weight={userNameWeight}
                  color={userNameColor}
                >
                  {userName}
                </Text>
                <Text
                  size={messageSize}
                  weight={messageWeight}
                  color={messageColor}
                >
                  <TextStyle>{message}</TextStyle>
                </Text>
              </Flex>
            </TextContainer>
            {alertCount ? (
              <Badge>
                <Text
                  color={alertColor}
                  size='sm'
                  weight={400}
                  style={{ textAlign: 'center' }}
                >
                  <BadgeText>{newAlertCount}</BadgeText>
                </Text>
              </Badge>
            ) : (
              <Spacer padding='0.875rem' />
            )}
          </Flex>
        </Spacer>
      </Border>
    </Flex>
  );
};

export default DMItem;
