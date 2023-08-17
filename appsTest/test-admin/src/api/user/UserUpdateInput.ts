import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  refreshToken?: OrderUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
