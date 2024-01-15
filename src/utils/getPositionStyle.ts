import { PositionType } from '~/components/common/Tooltip';

const getPositionStyle = (
  position: PositionType,
  width: number,
  height: number
) => {
  if (position === 'top') {
    return {
      top: `-${height + 10}px`,
      bottom: undefined,
      left: '50%',
      right: undefined,
      transform: 'translate(-50%, 0)',
    };
  } else if (position === 'bottom') {
    return {
      top: undefined,
      bottom: `-${height + 10}px`,
      left: '50%',
      right: undefined,
      transform: 'translate(-50%, 0)',
    };
  } else if (position === 'left') {
    return {
      top: '50%',
      bottom: undefined,
      left: `-${width + 10}px`,
      right: undefined,
      transform: 'translate(0, -50%)',
    };
  } else if (position === 'right') {
    return {
      top: '50%',
      bottom: undefined,
      left: undefined,
      right: `-${width + 10}px`,
      transform: 'translate(0, -50%)',
    };
  }
};

export default getPositionStyle;
