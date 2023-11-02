import "./Filter.css";
import {ValueMouseEvent} from "@/features/shared/models";
import {ChangeEventHandler} from "react";

interface FilterProps
{
    clearFilter: () => void;
    handleFilterChange: (value: ValueMouseEvent) => void;
}

const Filter = (props: FilterProps) =>
{
    return (
        <div>
            <div className={'container_filter'}>
                <div className={`container_btn_filter`}>
                <button onClick={props.clearFilter}>Reset Filters</button>
                    <select
                        defaultValue={"allGender"}
                        onChange={props.handleFilterChange as unknown as ChangeEventHandler<HTMLSelectElement>}
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
