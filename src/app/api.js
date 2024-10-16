const publicApi = process.env.NEXT_PUBLIC_API_URL;
const resource = "/api/accounts";

const api = {
  async getAccounts(filters = "", order = "asc", page = "1") {
    const url = new URL(`${publicApi}${resource}`);

    url.searchParams.append("filters", JSON.stringify(filters));
    url.searchParams.append("page", page);
    url.searchParams.append("order", order);

    const response = await fetch(url.href, {
      method: "GET",
      cache: "no-store",
    });

    const items = await response.json();

    return items;
  },
  async getAccountsByTags(tags = "", order = "asc", page = "1") {
    const url = new URL(`${publicApi}${resource}/tags`);

    url.searchParams.append("tags", tags);
    url.searchParams.append("page", page);
    url.searchParams.append("order", order);

    const response = await fetch(url.href, {
      method: "GET",
      cache: "no-store",
    });

    const items = await response.json();

    return items;
  },
};

export default api;
