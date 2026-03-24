import Image from "next/image";
import { HERO_PORTRAIT_SRC } from "@/components/hero-constants";

export function HeroPortrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--elevated)]">
      <Image
        src={HERO_PORTRAIT_SRC}
        alt="Portrait"
        fill
        className="object-cover object-[center_20%]"
        sizes="(max-width: 768px) 60vw, (max-width: 1280px) 334px, 360px"
        priority
      />
    </div>
  );
}
