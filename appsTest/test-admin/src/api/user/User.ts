import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  refreshToken?: Array<Order>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
