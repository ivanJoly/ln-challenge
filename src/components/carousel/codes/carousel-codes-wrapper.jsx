import api from "@/app/api";
import CarouselCodes from "./carousel-codes";

export default async function CarouselCodesWrapper() {
  const items = await api.getAccounts({ haveVoucher: true }, "desc", 1);

  return <CarouselCodes items={items} />;
}
