const ListControl = ({ sortBy, setSortBy, filter, setFilter }: { sortBy: string, setSortBy: (value: string) => void, filter: string, setFilter: (value: string) => void }) => {

  const handleChange = ({target: { value, id }}: React.ChangeEvent<HTMLSelectElement>) => {
    id === "sort-dropdown" ? setSortBy(value) : setFilter(value);
  };

  return (
    <div className="List-Control">
      <div className="List-Control-Sort">
        <label htmlFor="sort-dropdown">Sort: </label>
        <select id="sort-dropdown" value={sortBy} onChange={handleChange}>
          <option value="title">Title</option>
          <option value="dueDate">Date</option>
        </select>
      </div>

      <div className="List-Control-Filter">
        <label htmlFor="filter-dropdown">Show: </label>
        <select id="filter-dropdown" value={filter} onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  )
}

export default ListControl