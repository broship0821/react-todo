import InputRadio from "./InputRadio";

export default function TodoHeader({ display, setDisplay }) {
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
    </div>
  );
}
