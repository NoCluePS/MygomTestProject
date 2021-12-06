import { IItem } from "~/services/getUserItems";

export const filterByDays = (item: IItem) => {
  const pastTime = new Date(item.createdAt);
  const now = new Date();

  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

  const timeDiffInMs = now.getTime() - pastTime.getTime();

  return timeDiffInMs >= thirtyDaysInMs ? true : false;
};
