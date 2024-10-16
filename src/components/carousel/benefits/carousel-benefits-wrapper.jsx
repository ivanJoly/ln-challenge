import CarouselBenefits from "./carousel-benefits";
import api from "@/app/api";

export default async function CarouselBenefitsWrapper() {
  const items = await api.getAccountsByTags(
    "Turismo en Buenos Aires",
    "desc",
    1
  );

  return <CarouselBenefits items={items} />;
}
