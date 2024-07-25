import { FC } from 'react';
import { ElementType } from '@/types/Element';
import { Vector3 } from 'three';
import BoundingBox from './BoundingBox';
import ScaleControl from './ScaleControl';
import { ScaleControlName } from './ScaleControl/ScaleControl';

type ElementControlsProps = {
  element: ElementType;
  isSelected?: boolean;
};

const ElementControls: FC<ElementControlsProps> = ({ element, isSelected = false }) => {
  const { width: elementWidth, height: elementHeight } = element;

  // Calculate the corners of the bounding box
  const bottomLeft = new Vector3(-elementWidth / 2, -elementHeight / 2, 0);
  const bottomRight = new Vector3(elementWidth / 2, -elementHeight / 2, 0);
  const topRight = new Vector3(elementWidth / 2, elementHeight / 2, 0);
  const topLeft = new Vector3(-elementWidth / 2, elementHeight / 2, 0);
  const middleLeft = new Vector3(-elementWidth / 2, 0, 0);
  const middleRight = new Vector3(elementWidth / 2, 0, 0);
  const middleTop = new Vector3(0, elementHeight / 2, 0);
  const middleBottom = new Vector3(0, -elementHeight / 2, 0);

  // Points to draw the bounding box
  const boundingBoxPoints = [bottomLeft, bottomRight, topRight, topLeft, bottomLeft];

  const scaleControls: Record<ScaleControlName, Vector3> = {
    bottomLeft,
    bottomRight,
    topRight,
    topLeft,
    middleLeft,
    middleRight,
    middleTop,
    middleBottom,
  };

  return (
    <>
      <BoundingBox points={boundingBoxPoints} />
      {isSelected && (
        <>
          {Object.entries(scaleControls).map(([name, position]) => (
            <ScaleControl key={name} name={name as ScaleControlName} position={position} />
          ))}
        </>
      )}
    </>
  );
};

export default ElementControls;
