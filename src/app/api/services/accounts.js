import path from "path";
import { promises as fs } from "fs";

import {
  calculateMaxDiscounts,
  filterAccounts,
  filterAccountsByTags,
  paginateAccounts,
  sortAccounts,
  sortAccountsByBranchesLocation,
} from "../accounts/utils";

export async function getAccountsList(
  filters = {},
  orderField = "",
  order = "asc",
  page = 1
) {
  const accounts = await getAccounts();

  const filteredAccounts = filterAccounts(accounts, filters);
  const sortedAccounts = sortAccounts(filteredAccounts, orderField, order);
  const paginatedAccounts = paginateAccounts(sortedAccounts, page);

  return paginatedAccounts;
}

export async function getAccountsListByTags(
  tags = [],
  order = "asc",
  page = 1
) {
  const accounts = await getAccounts();

  const filteredAccountsByTags = filterAccountsByTags(accounts, tags);
  const sortedAccountsByBranchLocation = sortAccountsByBranchesLocation(
    filteredAccountsByTags
  );

  const accountWithMaxDiscount = calculateMaxDiscounts(
    sortedAccountsByBranchLocation
  );

  const paginatedAccounts = paginateAccounts(accountWithMaxDiscount, page);

  return paginatedAccounts;
}
export async function getAccounts() {
  const fileContent = await fs.readFile(
    path.join(process.cwd(), "src/data/accounts.json"),
    "utf8"
  );

  const { accounts } = JSON.parse(fileContent);

  return accounts;
}
