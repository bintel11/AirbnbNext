import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy: string;
  locationType: string;
  photos: JsonValue;
  placeSpace: JsonValue;
  title: string;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
