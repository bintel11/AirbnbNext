import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedBy?: SortOrder;
  locationType?: SortOrder;
  photos?: SortOrder;
  placeSpace?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
