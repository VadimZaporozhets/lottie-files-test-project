import useElements from '@/store';
import { Line } from '@react-three/drei';
import { ELEMENT_CONTROLS_COLOR } from '@/constants/Artboard';
import useAlignmentLines from '@/hooks/Artboard/useAlignmentLines';
import { useShallow } from 'zustand/react/shallow';
import shouldShowAlignmentLine from '@/components/utils/Artboard/shouldShowAlignmentLine';

const AlignmentLines = () => {
  const { elements, selectedElementId } = useElements(
    useShallow((state) => ({
      elements: state.elements,
      selectedElementId: state.selectedElementId,
    })),
  );

  const selectedElement = elements.find((element) => element.id === selectedElementId);

  const { alignmentLines } = useAlignmentLines();

  if (!selectedElement) return null;

  return (
    <>
      {alignmentLines.map((line, index) => {
        const shouldShowLine = shouldShowAlignmentLine(selectedElement, line);

        if (!shouldShowLine) return null;

        return (
          <Line
            key={index} // eslint-disable-line react/no-array-index-key
            points={[line.x1, line.y1, 0, line.x2, line.y2, 0]}
            color={ELEMENT_CONTROLS_COLOR}
            lineWidth={1}
          />
        );
      })}
    </>
  );
};

export default AlignmentLines;
