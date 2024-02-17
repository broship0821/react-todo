export default function InputRadio({ htmlId, display, onChange }) {
  return (
    <>
      <input
        type="radio"
        name="header"
        id={htmlId}
        value={htmlId}
        onChange={onChange}
        checked={display === htmlId}
      />
      <label htmlFor={htmlId}>{htmlId}</label>
    </>
  );
}
