import { ARTBOARD_SIZE } from '@/constants/Artboard';
import useElements from '@/store';
import { useShallow } from 'zustand/react/shallow';
import LabeledInput from '@/components/ui/LabeledInput';
import PropTile from '../PropTile';

const PositionProps = () => {
  const { selectedElementId, setElementPosition, elements } = useElements(
    useShallow((state) => ({
      selectedElementId: state.selectedElementId,
      elements: state.elements,
      setElementPosition: state.setElementPosition,
    })),
  );

  const selectedElement = elements.find((element) => element.id === selectedElementId);

  const onXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const x = parseInt(e.target.value, 10);

    if (!selectedElementId || !selectedElement || Number.isNaN(x)) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: x,
      positionY: selectedElement.positionY,
    });
  };

  const onYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const y = parseInt(e.target.value, 10);

    if (!selectedElementId || !selectedElement || Number.isNaN(y)) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: selectedElement.positionX,
      positionY: y,
    });
  };

  const elementX = selectedElement ? Math.round(selectedElement.positionX) : 0;
  const elementY = selectedElement ? Math.round(selectedElement.positionY) * -1 : 0;

  return (
    <PropTile label="Position">
      <LabeledInput
        label="x"
        type="number"
        onChange={onXChange}
        min={0}
        max={ARTBOARD_SIZE}
        value={elementX}
      />
      <LabeledInput
        label="y"
        type="number"
        onChange={onYChange}
        value={elementY}
        min={-ARTBOARD_SIZE}
        max={-0}
      />
    </PropTile>
  );
};

export default PositionProps;
