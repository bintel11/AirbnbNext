import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: StringFilter;
  locationType?: StringFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  title?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
