import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  refreshToken?: OrderCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
