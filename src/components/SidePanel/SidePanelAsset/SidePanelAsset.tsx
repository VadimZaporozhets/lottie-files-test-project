'use client';

import { FC } from 'react';
import { uid } from 'uid';
import { INITIAL_ELEMENT_POSITION, DEFAULT_ELEMENT_COLOR } from '@/constants/Artboard';
import { ElementShape } from '@/types/Element';
import useElements from '@/store';

type SidePanelAssetProps = {
  shape: ElementShape;
};

const SidePanelAsset: FC<SidePanelAssetProps> = ({ shape }) => {
  const addElement = useElements((state) => state.addElement);

  const onAssetClick = () => {
    const newElId = uid();
    let width = 100;
    const height = 100;
    let color = DEFAULT_ELEMENT_COLOR;

    switch (shape) {
      case 'square':
        break;
      case 'rectangle':
        width *= 2;
        color = '#002efd';
        break;
      case 'circle':
        color = '#F728E3';
        break;
      default:
        break;
    }

    addElement({
      id: newElId,
      shape,
      width,
      height,
      positionX: INITIAL_ELEMENT_POSITION,
      positionY: -INITIAL_ELEMENT_POSITION,
      color,
    });
  };

  return (
    <button
      type="button"
      onClick={onAssetClick}
      className="flex aspect-square w-1/3 items-center justify-center rounded-md bg-neutral-900 hover:cursor-pointer"
    >
      {shape === 'square' && <div className="h-1/2 w-1/2 bg-white" />}
      {shape === 'circle' && <div className="h-1/2 w-1/2 rounded-full bg-white" />}
      {shape === 'rectangle' && <div className="h-1/2 w-3/4 bg-white" />}
    </button>
  );
};

export default SidePanelAsset;
