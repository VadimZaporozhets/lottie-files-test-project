import { FC, useEffect, useState, useRef } from 'react';
import { ElementShape, ElementType } from '@/types/Element';
import { ThreeEvent } from '@react-three/fiber';
import useElements from '@/store';
import { useGesture } from '@use-gesture/react';
import ElementControls from './ElementControls';

type ElementProps = {
  element: ElementType;
};

const getElementGeometry = ({
  shape,
  width,
  height,
}: {
  shape: ElementShape;
  width: number;
  height: number;
}) => {
  return shape === 'circle' ? (
    <circleGeometry args={[width / 2, 164]} />
  ) : (
    <planeGeometry args={[width, height]} />
  );
};

const Element: FC<ElementProps> = ({ element }) => {
  const { selectedElementId, setElementPosition, setSelectedElementId } = useElements((state) => ({
    setSelectedElementId: state.setSelectedElementId,
    selectedElementId: state.selectedElementId,
    setElementPosition: state.setElementPosition,
  }));

  const isSelected = selectedElementId === element.id;

  const initialPositionRef = useRef({
    x: element.positionX,
    y: element.positionY,
  });

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    initialPositionRef.current = { x: element.positionX, y: element.positionY };
  }, [element.positionX, element.positionY, isDragging]);

  const bind = useGesture({
    onDrag: ({ movement: [dx, dy] }) => {
      setIsDragging(true);

      if (!isSelected || !initialPositionRef.current) return;

      setElementPosition({
        elementId: element.id,
        positionX: dx + initialPositionRef.current.x,
        positionY: -dy + initialPositionRef.current.y,
      });
    },
    onDragEnd: () => {
      setIsDragging(false);
      initialPositionRef.current = { x: element.positionX, y: element.positionY };
    },
  });

  const selectElement = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setSelectedElementId(element.id);
  };

  return (
    // @ts-ignore-next-line
    <group {...bind()} position={[element.positionX, element.positionY, 0]}>
      <mesh onClick={selectElement}>
        {getElementGeometry({
          shape: element.shape,
          width: element.width,
          height: element.height,
        })}
        <meshBasicMaterial color={element.color} />
      </mesh>
      {isSelected && <ElementControls element={element} isSelected />}
    </group>
  );
};

export default Element;
