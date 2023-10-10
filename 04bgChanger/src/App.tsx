import { v4 as uuidv4 } from "uuid";
import ColorButton from "./components/ColorButton";
import { useState } from "react";
type ColorType = {
  id: string;
  name: string;
  rgb: number[];
};
const colors: ColorType[] = [
  { id: uuidv4(), name: "Olive", rgb: [124, 106, 10] },
  { id: uuidv4(), name: "Red", rgb: [255, 0, 0] },
  { id: uuidv4(), name: "Blue", rgb: [0, 0, 255] },
  { id: uuidv4(), name: "Green", rgb: [0, 255, 0] },
  { id: uuidv4(), name: "Yellow", rgb: [255, 255, 0] },
  { id: uuidv4(), name: "Purple", rgb: [128, 0, 128] },
  { id: uuidv4(), name: "Orange", rgb: [255, 165, 0] },
  { id: uuidv4(), name: "Pink", rgb: [255, 192, 203] },
  { id: uuidv4(), name: "Brown", rgb: [139, 69, 19] },
  { id: uuidv4(), name: "Cyan", rgb: [0, 255, 255] },
  { id: uuidv4(), name: "Magenta", rgb: [255, 0, 255] },
];

const App = () => {
  const randomNum = Math.floor(Math.random() * 10);
  const [color, setColor] = useState<ColorType["rgb"]>(colors[randomNum].rgb);

  const changeColor = (clr: ColorType["rgb"]): void => {
    setColor(clr);
  };

  return (
    <main
      className="h-screen w-full grid items-center justify-start"
      style={{ backgroundColor: `rgb(${color})` }}>
      <div className="grid gap-4 content-center p-5 mx-5 bg-gray-200 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        {colors.map((clr) => (
          <ColorButton
            key={clr.id}
            name={clr.name}
            color={clr.rgb}
            handleClick={() => changeColor(clr.rgb)}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
