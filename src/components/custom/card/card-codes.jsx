import Button from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CardCodes({ card }) {
  return (
    <Card className={"bg-blue-600 border-blue-600"}>
      <div>
        <Image
          className="w-full h-40 object-cover"
          width={300}
          height={300}
          src={card.images[0].url}
          alt={card.name}
        />
      </div>
      <div className="p-4 flex grow shrink flex-col justify-between min-h-32 gap-2">
        <CardTitle className="text-white">{card.name}</CardTitle>
        <Link
          href={`https://club.lanacion.com.ar/${card.crmid}`}
          target="_blank"
        >
          <Button
            size={"sm"}
            className={"text-xs text-white border-white w-fit"}
            variant={"outline"}
          >
            QUIERO MI CÓDIGO
          </Button>
        </Link>
      </div>
    </Card>
  );
}
