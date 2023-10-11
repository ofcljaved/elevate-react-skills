# React + TypeScript | Password Generator

This project leverages a variety of React hooks and TypeScript knowledge to create a password generator. The password generator function executes whenever there is a change in the required password length, the inclusion of numbers, or the inclusion of special characters. To optimize this process, the `useCallback` hook is used to memoize the function.

```ts
const generatePassword = useCallback(() => {
  let pass = "";
  let str = ALPHABETS;
  if (numAllowed) str += NUMBERS;
  if (charAllowed) str += SPECIAL_CHAR;

  for (let i = 0; i < passLength; i++) {
    const idx = Math.floor(Math.random() * str.length);
    pass += str[idx];
  }

  setPassword(pass);
}, [passLength, numAllowed, charAllowed, setPassword]);
```

Additionally, this project offers a copy button to enable users to copy the generated password. To achieve this functionality, the `useRef` hook is used. In TypeScript, the initial value of the reference will be `null`. This reference is employed to access and manipulate the input field, allowing the use of the `.select()` and `.setSelectionRange()` functions on the input field.

```ts
const passwordRef = useRef<HTMLInputElement>(null);

const handleCopyBtnClick = () => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, passLength);
  navigator.clipboard.writeText(password);
};
```
