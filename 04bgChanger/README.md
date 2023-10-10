# React + TypeScript | Background Changer

This project showcases a dynamic background color changer functionality implemented using React and TypeScript. Users can alter the background color by clicking on a button, and the chosen color value is managed using state.

The core function responsible for changing the background color is defined as follows:

```typescript
const changeColor = (clr: ColorType["rgb"]): void => {
  setColor(clr);
};
```

To optimize and streamline the code, an array of colors has been created. Each color in the array is represented as an object with a unique identifier generated using the `uuid` library, a user-friendly name for display on the button label, and the RGB value of the color to be applied as an inline style:

```typescript
type ColorType = {
  id: string;
  name: string;
  rgb: number[];
};

const colors: ColorType[] = [
  { id: uuidv4(), name: "Olive", rgb: [124, 106, 10] },
  // ...more colors
];
```

The rendering of color buttons is handled by mapping over this array, and each button component receives the color name and RGB value as props, along with a click handling function:

```typescript
interface ColorButtonProps {
  name: string;
  color: number[];
  handleClick: () => void;
}

const ColorButton = ({ name, color, handleClick }: ColorButtonProps) => {
  // ...code
};
```

This approach allows for the seamless addition of new colors, automating the process of generating color buttons and making the code highly maintainable and extensible.

By implementing this pattern, the project demonstrates the power of React and TypeScript in creating efficient and flexible user interfaces.
