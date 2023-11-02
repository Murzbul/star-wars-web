import "./Filter.css";

const Filter = (props) =>
{
  return (
    <div>
      <div className={'container_filter'}>
        <div className={`container_btn_filter`}>
          <button onClick={props.clearFilter}>Reset Filters</button>
          <select
            defaultValue={"allGender"}
            onChange={props.handleFilterChange}
            name="gender"
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
