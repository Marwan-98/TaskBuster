import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectFilter } from "../../store/filter/filterSlice";
import { selectSort } from "../../store/sort/sortSlice";

const ListControl = (): ReactElement => {
  const sort = useAppSelector(state => state.sort.value);
  const filter = useAppSelector(state => state.filter.value);
  const dispatch = useAppDispatch();

  const handleChange = ({target: { value, id }}: React.ChangeEvent<HTMLSelectElement>) => {
    id === "sort-dropdown" ? dispatch(selectSort(value)) : dispatch(selectFilter(value));
  };

  return (
    <div className="List-Control">
      <div className="List-Control-Sort">
        <label htmlFor="sort-dropdown">Sort: </label>
        <select id="sort-dropdown" value={sort} onChange={handleChange}>
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