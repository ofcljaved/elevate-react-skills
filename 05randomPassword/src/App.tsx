import { useCallback, useEffect, useRef, useState } from "react";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL_CHAR = "!@#$%^&*(){}?/~";
const MAX_PASSWORD_LENGTH = 16;
const MIN_PASSWORD_LENGTH = 5;

const App = () => {
  const [passLength, setPassLength] = useState<number>(8);
  const [numAllowed, setNumAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    generatePassword();
  }, [passLength, numAllowed, charAllowed]);

  const handleCopyBtnClick = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, passLength);
    navigator.clipboard.writeText(password);
  };

  return (
    <main className=" w-full max-w-xl mx-5 sm:mx-auto bg-gray-700 my-10 p-5 rounded-lg text-neutral-200  grid gap-2.5">
      <h1 className="text-4xl text-center my-4 font-semibold">
        Password Generator
      </h1>
      <div className="grid grid-flow-col grid-cols-[auto_max-content] rounded-xl overflow-hidden text-xl">
        <input
          className="bg-gray-200 text-orange-600 grid content-center px-5 font-medium outline-none"
          ref={passwordRef}
          readOnly
          value={password}
        />
        <button
          type="button"
          className=" bg-blue-600 px-5 py-2 text-lg font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={handleCopyBtnClick}>
          Copy
        </button>
      </div>
      <form className="flex gap-4 justify-end accent-blue-500 text-lg flex-col items-end sm:flex-row">
        <div className="flex gap-1 items-center text-orange-500">
          <input
            type="range"
            id="passLen"
            min={MIN_PASSWORD_LENGTH}
            max={MAX_PASSWORD_LENGTH}
            value={passLength}
            onChange={(e) => setPassLength(+e.target.value)}
          />
          <label htmlFor="passLen">Length: {passLength}</label>
        </div>
        <div className="flex gap-1 items-center text-orange-500">
          <input
            type="checkbox"
            id="numAllow"
            checked={numAllowed}
            onChange={(e) => setNumAllowed(e.target.checked)}
          />
          <label htmlFor="numAllow">Numbers</label>
        </div>
        <div className="flex gap-1 items-center text-orange-500">
          <input
            type="checkbox"
            id="charAllow"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
          <label htmlFor="charAllow">Special Characters</label>
        </div>
      </form>
    </main>
  );
};

export default App;
