import { useEffect, useState } from "react";

type FormItemPRops = {
  label: string;
  defaultValue: string;
  updateState: (text: string) => void
};

export default function FormItem({ label, defaultValue, updateState}: FormItemPRops) {
  const [inputState, setInputState] = useState(defaultValue)
  
  useEffect(() => {
    setInputState(defaultValue)
  },[defaultValue])

  return (
    <div className="form-group mt-2">
      <label className="form-group__label">
        {label}
      </label>
      <input
        onInput={(event) => updateState(event.currentTarget.value)}
        value={inputState}
        type="text"
        className="form-control"
      />
    </div>
  );
}
