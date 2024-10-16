import { getAccountsListByTags } from "@/app/api/services/accounts";
import { getParam } from "@/app/api/accounts/utils";
import { getTagsParam } from "@/app/api/accounts/tags/utils";

const orderField = "name";

export async function GET(request) {
  const { searchParams } = new URL(request.nextUrl);

  const tags = getTagsParam(searchParams.get("tags"));
  const page = getParam("page", searchParams.get("page"));
  const order = getParam("order", searchParams.get("order"));

  const accounts = await getAccountsListByTags(tags, order, page);

  return new Response(JSON.stringify(accounts), {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}
