import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: string;
  locationType: string;
  photos: InputJsonValue;
  placeSpace: InputJsonValue;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
