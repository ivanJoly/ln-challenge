"use client";

import Carousel from "../carousel";
import CardCodes from "@/components/custom/card/card-codes";
import Button from "@/components/ui/button";

export default function CarouselCodes({ items }) {
  return (
    <section className="py-20 bg-gray-100 px-6">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-black">
              Codigo de descuentos
            </h3>
            <p className="text-gray-600 text-sm">
              ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
              beneficios exclusivos en tus marcas favoritas
            </p>
          </div>
          <div>
            <Button size={"default"} variant={"outline"} className="w-fit">
              TODOS LOS CODIGOS
            </Button>
          </div>
        </div>
        <Carousel items={items} CardComponent={CardCodes} />
      </div>
    </section>
  );
}
