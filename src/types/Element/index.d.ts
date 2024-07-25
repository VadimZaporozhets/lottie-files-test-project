export type Square = 'square';
export type Circle = 'circle';
export type Rectangle = 'rectangle';

export type ElementShape = Square | Circle | Rectangle;

export type ElementType = {
  id: string;
  shape: ElementShape;
  color: string;
  width: number;
  height: number;
  positionX: number;
  positionY: number;
};
