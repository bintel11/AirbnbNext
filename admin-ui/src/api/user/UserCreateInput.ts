import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
