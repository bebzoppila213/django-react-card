import React, { useEffect, useState } from "react";

type CustopSelectOption = {
  value: string;
  text: string;
};

type CustopSelectProps = {
  options: CustopSelectOption[];
  defaultSelect: string;
  label: string;
  updateSelect: (text: string) => void;
};

export default function CustopSelect({
  options,
  defaultSelect,
  label,
  updateSelect,
}: CustopSelectProps) {
  const [selectState, setSelectState] = useState(defaultSelect)

  const updateSelectUptions = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(event.currentTarget.value)
    updateSelect(event.currentTarget.value);
  };

  useEffect(() => {
    setSelectState(defaultSelect)
  }, [defaultSelect]);

  return (
    <div className="form-group mt-2">
      <label className="form-group__label" htmlFor="exampleInputEmail1">
        {label}
      </label>
      <select
        value={selectState}
        onChange={updateSelectUptions}
        className="form-select"
        aria-label="Default select example"
      >
        {options.map((opt) => (
          <option  key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}
