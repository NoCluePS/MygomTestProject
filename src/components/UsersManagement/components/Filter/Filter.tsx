import { FC } from "react";
import { Routes, validateEmail } from "~/constants";
import { IItem } from "~/services/getUserItems";
import { filterByDays } from "~/utils/getOldestItems";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import FilterTab from "./components/FilterTab";

import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const weakItemsCount = items.reduce((count, item) => count + 1, 0);
  const reusedItemsCount = items.filter((item) =>
    itemHasReusedPassword(item, items)
  ).length;
  const oldItemCount = items.filter((item) => filterByDays(item)).length;

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab title="Wrong" count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="old" count={oldItemCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
