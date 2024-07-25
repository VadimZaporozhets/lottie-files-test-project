import { FC } from 'react';
import { Vector3 } from 'three';
import { ELEMENT_CONTROLS_COLOR } from '@/constants/Artboard';

export type ScaleControlName =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'middleLeft'
  | 'middleRight'
  | 'middleTop'
  | 'middleBottom';

const CURSOR_BY_NAME: Record<ScaleControlName, string> = {
  topLeft: 'nwse-resize',
  topRight: 'nesw-resize',
  bottomLeft: 'nesw-resize',
  bottomRight: 'nwse-resize',
  middleLeft: 'ew-resize',
  middleRight: 'ew-resize',
  middleTop: 'ns-resize',
  middleBottom: 'ns-resize',
};

const MIDDLE_CONTROLS_NAMES: ScaleControlName[] = [
  'middleLeft',
  'middleRight',
  'middleTop',
  'middleBottom',
];

const VERTICAL_CONTROLS_NAMES: ScaleControlName[] = ['middleLeft', 'middleRight'];

type ScaleControlProps = {
  position: Vector3;
  name: ScaleControlName;
};

const ScaleControl: FC<ScaleControlProps> = ({ position, name }) => {
  const GRIPPIE_SIZE = 7;

  const isMiddleControl = MIDDLE_CONTROLS_NAMES.includes(name);
  const isVerticalControl = VERTICAL_CONTROLS_NAMES.includes(name);

  let grippieArgs: [width: number, height: number] = [GRIPPIE_SIZE, GRIPPIE_SIZE];

  if (isMiddleControl) {
    grippieArgs = isVerticalControl
      ? [GRIPPIE_SIZE / 2, GRIPPIE_SIZE * 2]
      : [GRIPPIE_SIZE * 2, GRIPPIE_SIZE / 2];
  }

  const onPointerOver = () => {
    document.body.style.cursor = CURSOR_BY_NAME[name];
  };

  const onPointerLeave = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <mesh position={position} onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
      <planeGeometry attach="geometry" args={grippieArgs} />
      <meshBasicMaterial attach="material" color={ELEMENT_CONTROLS_COLOR} />
    </mesh>
  );
};

export default ScaleControl;
