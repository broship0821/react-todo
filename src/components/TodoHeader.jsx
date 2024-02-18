import { useContext } from "react";
import InputRadio from "./InputRadio";
import { DarkModeContext } from "../context/DarkModeContext";

export default function TodoHeader({ display, setDisplay }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const onChangeRadio = (e) => {
    setDisplay(e.target.value);
  };
  return (
    <div>
      <InputRadio htmlId="all" display={display} onChange={onChangeRadio} />
      <InputRadio htmlId="active" display={display} onChange={onChangeRadio} />
      <InputRadio
        htmlId="completed"
        display={display}
        onChange={onChangeRadio}
      />
      <p>
        DarkMode: <span>{darkMode.toString()}</span>
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
