/// <reference types="vite/client" />
interface currencyDataType {
  [key: string]: number;
}

interface InputBoxProps {
  label: string;
  className?: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
}
