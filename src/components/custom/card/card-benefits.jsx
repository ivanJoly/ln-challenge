import { Card, CardTitle } from "@/components/ui/card";
import { calculateLocationDistance } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardBenefits({ card }) {
  return (
    <Card className="">
      <Link href={`https://club.lanacion.com.ar/${card.crmid}`} target="_blank">
        <Image
          className="w-full h-40 object-cover"
          width={300}
          height={300}
          quality={100}
          src={card.images[0].url}
          alt={card.name}
        />
      </Link>
      <div className="p-4 flex grow shrink flex-col justify-between min-h-32">
        <Link
          href={`https://club.lanacion.com.ar/${card.crmid}`}
          target="_blank"
        >
          <CardTitle className="">{card.name}</CardTitle>
        </Link>
        <div className="flex flex-col gap-2">
          <MaxDiscounts discounts={card.maxDiscounts} />
          <div className="flex flex-row gap-1 items-center">
            <MapPin width={20} height={20} />
            <LocationDistance location={card.branches[0].location} />
          </div>
        </div>
      </div>
    </Card>
  );
}

function MaxDiscounts({ discounts }) {
  const { black, premium, classic } = discounts;

  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        {black > 0 && (
          <>
            <div className="flex flex-col items-center justify-center">
              <span className="text-black font-bold">{black}%</span>
            </div>
            <div className="h-5 border-l border-gray-200" />
          </>
        )}
        {premium > 0 && (
          <>
            <div className="flex flex-col items-center">
              <span className="text-blue-800 font-bold">{premium}%</span>
            </div>
            <div className="h-5 border-l border-gray-200" />
          </>
        )}
        {classic > 0 && (
          <div className="flex flex-col items-center">
            <span className="text-blue-300 font-bold">{classic}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

function LocationDistance({ location }) {
  return (
    <div className="text-xs font-light text-gray-800 mt-[1px]">
      <span className="text-xs">A</span>
      <span className="text-xs font-semibold text-gray-500">
        {calculateLocationDistance(location)}
      </span>
    </div>
  );
}
