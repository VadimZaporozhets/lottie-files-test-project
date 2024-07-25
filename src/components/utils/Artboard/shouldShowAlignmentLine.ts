import { LineProps } from '@/hooks/Artboard/useAlignmentLines';
import { ElementType } from '@/types/Element';

const shouldShowAlignmentLine = (selectedElement: ElementType, line: LineProps) => {
  const selectedElementCenterX = Math.round(selectedElement.positionX);
  const selectedElementCenterY = Math.round(selectedElement.positionY);
  const selectedElementLeftX = Math.round(selectedElement.positionX - selectedElement.width / 2);
  const selectedElementRightX = Math.round(selectedElement.positionX + selectedElement.width / 2);
  const selectedElementTopY = Math.round(selectedElement.positionY + selectedElement.height / 2);
  const selectedElementBottomY = Math.round(selectedElement.positionY - selectedElement.height / 2);

  let shouldShowLine = false;

  switch (line.name) {
    case 'left':
      if (
        selectedElementLeftX === line.x1 ||
        selectedElementCenterX === line.x1 ||
        selectedElementRightX === line.x1
      ) {
        shouldShowLine = true;
      }
      break;
    case 'right':
      if (
        selectedElementLeftX === line.x1 ||
        selectedElementCenterX === line.x1 ||
        selectedElementRightX === line.x1
      ) {
        shouldShowLine = true;
      }
      break;
    case 'top':
      if (
        selectedElementTopY === line.y1 ||
        selectedElementCenterY === line.y1 ||
        selectedElementBottomY === line.y1
      ) {
        shouldShowLine = true;
      }
      break;
    case 'bottom':
      if (
        selectedElementTopY === line.y1 ||
        selectedElementCenterY === line.y1 ||
        selectedElementBottomY === line.y1
      ) {
        shouldShowLine = true;
      }
      break;
    case 'centerX':
      if (
        selectedElementCenterX === line.x1 ||
        selectedElementLeftX === line.x1 ||
        selectedElementRightX === line.x1
      ) {
        shouldShowLine = true;
      }
      break;
    case 'centerY':
      if (
        selectedElementCenterY === line.y1 ||
        selectedElementTopY === line.y1 ||
        selectedElementBottomY === line.y1
      ) {
        shouldShowLine = true;
      }
      break;
    default:
      shouldShowLine = false;
  }

  return shouldShowLine;
};

export default shouldShowAlignmentLine;
