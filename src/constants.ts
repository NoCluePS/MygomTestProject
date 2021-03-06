export const validateEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export enum Routes {
  Login = "/login",
  Users = "/items",
  Weak = "/items/weak",
  Reused = "/items/reused",
  Old = "/items/old",
  Root = "/",
}

export enum API {
  Login = "api/login",
  Logout = "api/logout",
  Items = "api/items",
  User = "api/user",
}
