
## LottieFiles test project

This simple web editor lets users add primitive shapes like Square, Circle, and Rectangle to the canvas. You can move around selected shapes, update their properties like width, height, and position, and remove selected elements from the Artboard. Also, you can align the shapes with the canvas. Additionally, when the selected element is moved, guidelines will be shown to help align elements to each other.

Core technologies used in this project:
next.js, react-three-fiber, drey, tailwindcss, typescript, zustand.



https://github.com/user-attachments/assets/03ead4f7-bdec-49ed-801d-72c14d2aea5c



[Demo](https://lottie-files-test-project.vercel.app/)

### Adding and manipulating shapes

To add shape to the canvas, click the shape button in the SidePanel under the "Insert asset" title.

To manipulate shapes, you have to select them first. You can select shapes by clicking on them. When a shape is selected, it will be highlighted with a bounding box and element controls. Also, you can deselect shapes by clicking on empty space of the canvas.

Element controls are not implemented. They are just for demonstration purposes. Hovering over element controls will change the mouse cursor.

### Aligning shapes

To align shapes, you have to select them first. Then, you can click the align button in the SidePanel under the "Align" title. You can align shapes to the canvas.

There are AlingnmentLines on the canvas that will help you align shapes with each other. They appear when at least two elements are on the canvas, and the selected element is dragged. There is no snapping implemented. Only guides are shown. Guides appear when an element is dragged, and its sides or center points are aligned with other elements' sides or centers horizontally or vertically.

### Folder structure

I implemented components nesting by a rule that if a component is related to the parent component only, it should be placed in the same folder. Also, there is a UI folder with general Button and Input components used in the project.

I have a simple store object here under `src/store` folder. It is used to store the state of the application. I used Zustand library to create a simple store object.

Also, utils, hooks, and constants folders are in the src folder. They contain helper functions, custom hooks, and constants related to specific components.

### To run project locally:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# P.S.

I spent most of the time trying to implement shape manipulation with DragControls; however, I didn't manage to make it work to update the value back to the store correctly. I decided to implement it with @use-gesture library. Also, shapes are positioned on the Y axis with negative values but displayed in PropsEditor with reversed values. I hope it is not a problem.
There are things that I planned to implement but needed more time to do, like snapping to the alignment lines, polishing state updates, and implementing scale and rotation controls for shapes.
