import Button from '@/components/ui/Button';
import { ARTBOARD_SIZE } from '@/constants/Artboard';
import useElements from '@/store';
import { useShallow } from 'zustand/react/shallow';
import PropTile from '../PropTile';

const AlignmentProps = () => {
  const { selectedElementId, setElementPosition, elements } = useElements(
    useShallow((state) => ({
      selectedElementId: state.selectedElementId,
      elements: state.elements,
      setElementPosition: state.setElementPosition,
    })),
  );

  const selectedElement = elements.find((element) => element.id === selectedElementId);

  const onAlignLeft = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: 0 + selectedElement.width / 2,
      positionY: selectedElement.positionY,
    });
  };

  const onAlignRight = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: ARTBOARD_SIZE - selectedElement.width / 2,
      positionY: selectedElement.positionY,
    });
  };

  const onAlignTop = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: selectedElement.positionX,
      positionY: 0 - selectedElement.height / 2,
    });
  };

  const onAlignBottom = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: selectedElement.positionX,
      positionY: -ARTBOARD_SIZE + selectedElement.height / 2,
    });
  };

  const onAlignHorizontalCenter = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: ARTBOARD_SIZE / 2,
      positionY: selectedElement.positionY,
    });
  };

  const onAlignVerticalCenter = () => {
    if (!selectedElementId || !selectedElement) return;

    setElementPosition({
      elementId: selectedElementId,
      positionX: selectedElement.positionX,
      positionY: -ARTBOARD_SIZE / 2,
    });
  };

  return (
    <PropTile label="Align">
      <div className="mt-4">
        <div className="mb-2">
          <Button onClick={onAlignLeft}>Align left</Button>
        </div>
        <div className="mb-2">
          <Button onClick={onAlignHorizontalCenter}>Align horizontal centers</Button>
        </div>
        <div className="mb-2">
          <Button onClick={onAlignRight}>Align right</Button>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-2">
          <Button onClick={onAlignTop}>Align top</Button>
        </div>
        <div className="mb-2">
          <Button onClick={onAlignVerticalCenter}>Align vertical centers</Button>
        </div>
        <div className="mb-2">
          <Button onClick={onAlignBottom}>Align bottom</Button>
        </div>
      </div>
    </PropTile>
  );
};

export default AlignmentProps;
