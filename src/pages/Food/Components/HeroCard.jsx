"use client";;
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";

export function HeroCard({image , productName , price}) {
  
  return (
    (<div className="md:h-[30rem] justify-between p-2">
      <DirectionAwareHover imageUrl= {image}>
        <p className="font-bold text-xl md:text-4xl">{productName}</p>
        <p className="font-normal text-md md:text-xl">{price}</p>
      </DirectionAwareHover>
    </div>)
  );
}
