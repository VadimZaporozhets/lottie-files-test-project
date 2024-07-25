import { create } from 'zustand';
import { ElementType } from '@/types/Element';

type ElementsState = {
  elements: ElementType[];
  selectedElementId: string | null;
  addElement: (element: ElementType) => void;
  removeElement: (elementId: string) => void;
  setSelectedElementId: (id: string | null) => void;
  setElementPosition: ({
    elementId,
    positionX,
    positionY,
  }: {
    elementId: string;
    positionX: number;
    positionY: number;
  }) => void;
  setElementSize: ({
    elementId,
    width,
    height,
  }: {
    elementId: string;
    width: number;
    height: number;
  }) => void;
};

const useElements = create<ElementsState>((set) => ({
  elements: [],
  selectedElementId: null,
  addElement: (element) => set((state) => ({ elements: [...state.elements, element] })),
  removeElement: (elementId) =>
    set((state) => ({ elements: state.elements.filter((el) => el.id !== elementId) })),
  setSelectedElementId: (id) => set({ selectedElementId: id }),
  setElementPosition: ({ elementId, positionX, positionY }) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === elementId ? { ...el, positionX, positionY } : el,
      ),
    })),
  setElementSize: ({ elementId, width, height }) =>
    set((state) => ({
      elements: state.elements.map((el) => (el.id === elementId ? { ...el, width, height } : el)),
    })),
}));

export default useElements;
