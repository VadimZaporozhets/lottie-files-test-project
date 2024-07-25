
## LottieFiles test project

This is a simple web editor that allow user to add primitive shapes like Square, Circle and Rectangle to the canvas. You can move around selected shapes, update their properties like width, height and position and remove selected elements from the Artboard. Also you can align the shapes to the canvas. Additionally when selected element is moved, there will be show guides to help align elements to each other.

Core technologies used in this project:
next.js, react-three-fiber, drey, tailwindcss, typescript, zustand.



https://github.com/user-attachments/assets/03ead4f7-bdec-49ed-801d-72c14d2aea5c



[Demo](https://lottie-files-test-project.vercel.app/)

### Adding and manipulating shapes

To add shape to the canvas you have to click on the shape button in the SidePanel under "Insert asset" title.

To make any manipulations with shapes you have to select them first. You can select shapes by clicking on them. When shape is selected it will be highlighted with a bounding box and element controls. Also you can deselect shapes by clicking on empty space of the canvas.

Element controls are not implemented. They are just for demonstration purposes. Hovering over element controls will change cursor of the mouse.

### Aligning shapes

To align shapes you have to select them first. Then you can click on the align button in the SidePanel under "Align" title. You can align shapes to the canvas.

There are AlingnmentLines on the canvas that will help you to align shapes to each other. They appear when at least two elements are on the canvas and selected element is dragged. There is no snapping implemented. Only guides are shown. Guides appear when element is dragged and its sides points or center points are aligned with other elements sides or center horizontally or vertically.

### Folder structure

I implemented components nesting by a rule that if component is related to the parent component only, it should be placed in the same folder. Also there is a UI folder with general Button and Input components that are used in the project.

I have a simple store object here which is located under src/store folder. It is used to store the state of the application. I used zustand library to create a simple store object.

Also there are utils, hooks and constants folders in the src folder. They contain helper functions, custom hooks and constants that are related to specific components.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# P.S.

I spent most of the time to try to implement shapes manipulation with DragControls however I didn't manage to make it work with updating value back to store correctly. I decided to implement it with @use-gesture library. Also shapes are positioned on Y axis with negative values but displayed in PropsEditor with reversed values. I hope it is not a problem.
There are things that I planned to implement but didn't have time to do it like snapping to the alignment lines, polishing state updates and implementing scale and rotation controls for shapes.
