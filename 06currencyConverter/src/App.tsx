import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
import { Coffee } from "lucide-react";

const App = () => {
  const [amount, setAmount] = useState<number | "">(0);
  const [from, setFrom] = useState<string>("inr");
  const [to, setTo] = useState<string>("usd");
  const [convertedAmount, setConvertedAmount] = useState<number | "">(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setAmount(Number(convertedAmount));
    setConvertedAmount(Number(amount));
    setFrom(to);
    setTo(from);
  };

  const amountConversion = () => {
    setConvertedAmount(Number((+amount * currencyInfo[to]).toFixed(3)));
  };

  const changeCurrency = (label: string, currency: string): void => {
    if (label === "From") {
      setFrom(currency);
    } else {
      setTo(currency);
      setConvertedAmount(0);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-right-bottom relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5912574/pexels-photo-5912574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}>
      <img
        src="https://images.pexels.com/photos/18681383/pexels-photo-18681383/free-photo-of-programming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-[60%] md:h-full w-full md:w-[70%] absolute left-0 bottom-0 object-cover clip-path"
      />
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              amountConversion();
            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  changeCurrency("From", currency)
                }
                selectCurrency={from}
                onAmountChange={(amnt) => setAmount(amnt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-500 focus-visible:bg-blue-500 active:bg-blue-800 text-white px-2 py-0.5">
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => changeCurrency("To", currency)}
                selectCurrency={to}
                onAmountChange={(amnt) => setConvertedAmount(amnt)}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 focus-visible:bg-blue-500 active:bg-blue-800 text-white px-4 py-3 rounded-lg flex gap-2 justify-center">
              <Coffee color="white" />
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 py-2 px-4 m-1 rounded-md text-white grid justify-items-end backdrop-blur-sm bg-black/20 border border-gray-400">
        <p>
          Mentor <b>Hitesh Choudhary</b>
        </p>
        <p>
          Watch here:{" "}
          <a
            href="https://youtu.be/AFDYnd-XPa8?si=_erlhlDFAMSlikgj"
            className="underline">
            Video link
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
