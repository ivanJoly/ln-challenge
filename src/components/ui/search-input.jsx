import { Search } from "lucide-react";
import Button from "@/components/ui/button";

export function SearchInput() {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar un comercio..."
          className="bg-transparent lg:min-w-[320px] border border-gray-300 rounded-l-full py-2 pl-4 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Ingresa una ubicación..."
          className="bg-transparent lg:min-w-[320px] border border-gray-300 border-l-0 rounded-r-full py-2 pl-4 focus:outline-none"
        />
      </div>
      <Button className={""} size="icon" variant={"default"}>
        <Search width={18} height={18} />
      </Button>
    </div>
  );
}
