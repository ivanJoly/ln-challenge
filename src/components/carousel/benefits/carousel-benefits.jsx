"use client";

import Carousel from "../carousel";
import CardBenefits from "@/components/custom/card/card-benefits";
import Button from "@/components/ui/button";

export default function CarouselBenefits({ items }) {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <h3 className="text-3xl font-bold text-black">
            Turismo en Buenos Aires
          </h3>
          <Button size={"default"} variant={"outline"} className="w-fit">
            TODOS LOS BENEFICIOS
          </Button>
        </div>
        <Carousel items={items} CardComponent={CardBenefits} />
      </div>
    </section>
  );
}
