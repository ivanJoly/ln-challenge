import CarouselBenefitsWrapper from "@/components/carousel/benefits/carousel-benefits-wrapper";
import CarouselCodesWrapper from "@/components/carousel/codes/carousel-codes-wrapper";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <CarouselBenefitsWrapper />
      <CarouselCodesWrapper />
    </main>
  );
}
