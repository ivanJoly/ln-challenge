import { Bell, CircleUser, Heart, Menu, Search } from "lucide-react";
import Button from "@/components/ui/button";
import Logo from "@/components/logo";
import { SearchInput } from "./ui/search-input";

export default function Header() {
  return (
    <header className="top-0 inset-x-0 w-full bg-black bg-opacity-90 p-2 md:p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Button className={""} size="icon" variant={"link"}>
            <Menu width={20} height={20} />
          </Button>
          <Logo />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <SearchInput />
        </div>
        <div className="flex-1 flex justify-end gap-2">
          <Button className={""} size="icon" variant={"link"}>
            <Bell width={20} height={20} />
          </Button>
          <Button className={""} size="icon" variant={"link"}>
            <Heart width={20} height={20} />
          </Button>
          <Button className={""} size="icon" variant={"link"}>
            <CircleUser width={20} height={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
