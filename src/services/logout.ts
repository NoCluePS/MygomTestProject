import { API } from "~/constants";
import getUrl from "../utils/getUrl";

const logout = () => {
  const url = getUrl(API.Logout);
  fetch(url).catch((e) => console.error(e));

  localStorage.removeItem("token");
};

export default logout;
