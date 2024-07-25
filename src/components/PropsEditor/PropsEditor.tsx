'use client';

import Button from '@/components/ui/Button';
import useElements from '@/store';
import { useShallow } from 'zustand/react/shallow';
import PositionProps from './PositionProps';
import AlignmentProps from './AlignmentProps';
import SizeProps from './SizeProps';

function PropsEditor() {
  const { removeElement, selectedElementId } = useElements(
    useShallow((state) => ({
      removeElement: state.removeElement,
      selectedElementId: state.selectedElementId,
    })),
  );

  const onAssetDelete = () => {
    if (!selectedElementId) return;

    removeElement(selectedElementId);
  };

  return (
    <div className="w-1/5 bg-secondary px-2 py-2">
      <div className="h-full rounded-md bg-primary">
        <p className="border-b border-secondary px-3 py-2 text-sm font-bold text-white">
          Properties
        </p>
        {selectedElementId && (
          <>
            <div className="flex flex-col">
              <AlignmentProps />
              <PositionProps />
              <SizeProps />
            </div>
            <div className="mt-4 px-2">
              <Button onClick={onAssetDelete}>Delete asset</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PropsEditor;
