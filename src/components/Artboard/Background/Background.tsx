import { FC } from 'react';
import { ARTBOARD_SIZE } from '@/constants/Artboard';
import useElements from '@/store';

type BackgroundProps = {
  color?: string;
};

const Background: FC<BackgroundProps> = ({ color = '#FFFFFF' }) => {
  const setSelectedElementId = useElements((state) => state.setSelectedElementId);

  const deselectElements = () => {
    setSelectedElementId(null);
  };

  return (
    <mesh onClick={deselectElements} position={[ARTBOARD_SIZE / 2, -ARTBOARD_SIZE / 2, -1]}>
      <planeGeometry args={[ARTBOARD_SIZE, ARTBOARD_SIZE]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Background;
