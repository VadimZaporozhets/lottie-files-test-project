import { FC } from 'react';
import { Line } from '@react-three/drei';
import { ELEMENT_CONTROLS_COLOR } from '@/constants/Artboard';
import { Vector3 } from 'three';

type BoundingBoxProps = {
  points: Vector3[];
};

const BoundingBox: FC<BoundingBoxProps> = ({ points }) => {
  return <Line points={points} color={ELEMENT_CONTROLS_COLOR} lineWidth={1} />;
};

export default BoundingBox;
