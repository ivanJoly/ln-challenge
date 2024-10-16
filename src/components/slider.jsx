import Image from "next/image";
import hero from "@/public/hero_1.jpg";

export default function Slider() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-full overflow-hidden">
        <Image
          alt="hero"
          src={hero}
          placeholder="blur"
          quality={100}
          layout="responsive"
          objectFit="contain"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
