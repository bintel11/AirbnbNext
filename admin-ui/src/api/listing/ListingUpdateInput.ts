import { InputJsonValue } from "../../types";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: string;
  locationType?: string;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  title?: string;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
