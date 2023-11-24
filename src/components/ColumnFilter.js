function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search: {""}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
        placeholder="Search..."
      />
    </span>
  );
}

export default ColumnFilter;
