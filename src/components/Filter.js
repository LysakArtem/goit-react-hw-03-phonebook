export default function Filter({ filter, onChange }) {
  return (
    <>
      <h3>Find contact by name</h3>
      <input placeholder="Что ищем?" onChange={onChange} value={filter} />
    </>
  );
}
