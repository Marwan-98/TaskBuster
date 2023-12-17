import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useLocation } from "react-router-dom";
import { updateViewOptions } from "../../store/list/listSlice";
import { setLocalViewOptions } from "../../util/LocalStorage/localStorage";
import { getCurrentDirectory } from "../../util/Url/url";

const ListControl = (): ReactElement => {
  const currentPage = getCurrentDirectory(useLocation());

  const {
    viewOptions,
    viewOptions: {
      [currentPage]: {
        sort = 'title',
        filter = 'all'
      } = {}
    }
  } = useAppSelector(state => state.list);


  const dispatch = useAppDispatch();

  const handleChange = ({target: { value, id: option }}: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateViewOptions({ currentPage, option, value }));
  };

  useEffect(() => {
    setLocalViewOptions(viewOptions);
  });

  return (
    <div className="List-Control">
      <div className="List-Control-Sort">
        <label htmlFor="sort">Sort: </label>
        <select id="sort" value={ sort } onChange={handleChange}>
          <option value="title">Title</option>
          <option value="dueDate">Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="List-Control-Filter">
        <label htmlFor="filter">Show: </label>
        <select id="filter" value={ filter } onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  )
}

export default ListControl