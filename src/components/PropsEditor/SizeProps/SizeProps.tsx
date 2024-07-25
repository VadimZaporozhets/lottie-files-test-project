import { useShallow } from 'zustand/react/shallow';
import useElements from '@/store';
import LabeledInput from '@/components/ui/LabeledInput';
import PropTile from '../PropTile';

const SizeProps = () => {
  const { selectedElementId, setElementSize, elements } = useElements(
    useShallow((state) => ({
      selectedElementId: state.selectedElementId,
      elements: state.elements,
      setElementSize: state.setElementSize,
    })),
  );

  const selectedElement = elements.find((element) => element.id === selectedElementId);

  const onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(e.target.value, 10);

    if (!selectedElementId || !selectedElement || Number.isNaN(width)) return;

    setElementSize({
      elementId: selectedElementId,
      width,
      height: selectedElement.height,
    });
  };

  const onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(e.target.value, 10);

    if (!selectedElementId || !selectedElement || Number.isNaN(height)) return;

    setElementSize({
      elementId: selectedElementId,
      width: selectedElement.width,
      height,
    });
  };

  return (
    <PropTile label="Attributes">
      <LabeledInput
        label="Width"
        type="number"
        onChange={onWidthChange}
        defaultValue={selectedElement?.width || 0}
      />
      <LabeledInput
        label="Height"
        type="number"
        onChange={onHeightChange}
        defaultValue={selectedElement?.height || 0}
      />
    </PropTile>
  );
};

export default SizeProps;
