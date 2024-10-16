import { getAccountsList } from "../services/accounts";
import { getParam } from "./utils";

const orderField = "name";

export async function GET(request) {
  const { searchParams } = new URL(request.nextUrl);

  const page = getParam("page", searchParams.get("page"));
  const order = getParam("order", searchParams.get("order"));
  const filters = getParam("filters", searchParams.get("filters"));

  const accounts = await getAccountsList(filters, orderField, order, page);

  return new Response(JSON.stringify(accounts), {
    status: 200,
  });
}
