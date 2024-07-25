'use client';

import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { ARTBOARD_SIZE } from '@/constants/Artboard';
import useElements from '@/store';
import Background from './Background';
import AlignmentLines from './AlignmentLines';
import Element from './Element';

const Artboard = () => {
  const elements = useElements((state) => state.elements);

  return (
    <div className="flex w-3/4 items-center justify-center bg-secondary">
      <div className="h-[500px] w-[500px] bg-white">
        <Canvas
          gl={{
            toneMapping: 1,
          }}
        >
          <OrthographicCamera
            makeDefault
            top={ARTBOARD_SIZE / 2}
            bottom={-ARTBOARD_SIZE / 2}
            left={-ARTBOARD_SIZE / 2}
            right={ARTBOARD_SIZE / 2}
            near={1}
            far={100}
            position={[ARTBOARD_SIZE / 2, -ARTBOARD_SIZE / 2, 1]}
          />
          <Background />
          {elements.map((element) => (
            <Element key={element.id} element={element} />
          ))}
          <AlignmentLines />
        </Canvas>
      </div>
    </div>
  );
};

export default Artboard;
