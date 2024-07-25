import { ARTBOARD_SIZE } from '@/constants/Artboard';
import useElements from '@/store';

type LineName = 'left' | 'right' | 'top' | 'bottom' | 'centerX' | 'centerY';

export type LineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  name: LineName;
};

const useAlignmentLines = () => {
  const { elements, selectedElementId } = useElements((state) => ({
    elements: state.elements,
    selectedElementId: state.selectedElementId,
  }));

  const elementsWithAlignmentLines = elements.filter((element) => element.id !== selectedElementId);

  // Get points for left, right, top, bottom, center x, center y of each element

  const alignmentLines = elementsWithAlignmentLines.reduce((acc, element) => {
    const { positionX, positionY, width, height } = element;

    const left = Math.round(positionX - width / 2);
    const right = Math.round(positionX + width / 2);
    const top = Math.round(positionY + height / 2);
    const bottom = Math.round(positionY - height / 2);

    const centerX = Math.round(positionX);
    const centerY = Math.round(positionY);

    const leftSideLine: LineProps = { x1: left, y1: 0, x2: left, y2: -ARTBOARD_SIZE, name: 'left' };
    const rightSideLine: LineProps = {
      x1: right,
      y1: 0,
      x2: right,
      y2: -ARTBOARD_SIZE,
      name: 'right',
    };
    const topSideLine: LineProps = { x1: 0, y1: top, x2: ARTBOARD_SIZE, y2: top, name: 'top' };
    const bottomSideLine: LineProps = {
      x1: 0,
      y1: bottom,
      x2: ARTBOARD_SIZE,
      y2: bottom,
      name: 'bottom',
    };
    const centerXLine: LineProps = {
      x1: centerX,
      y1: 0,
      x2: centerX,
      y2: -ARTBOARD_SIZE,
      name: 'centerX',
    };
    const centerYLine: LineProps = {
      x1: 0,
      y1: centerY,
      x2: ARTBOARD_SIZE,
      y2: centerY,
      name: 'centerY',
    };

    return [
      ...acc,
      leftSideLine,
      rightSideLine,
      topSideLine,
      bottomSideLine,
      centerXLine,
      centerYLine,
    ];
  }, [] as LineProps[]);

  return { alignmentLines };
};

export default useAlignmentLines;
