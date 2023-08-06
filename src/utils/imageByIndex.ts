import { StaticImageData } from "next/image";
import image1 from "../../public/slide-1.webp";
import image2 from "../../public/slide-2.webp";
import image3 from "../../public/slide-3.webp";

export const images: StaticImageData[] = [image1, image2, image3];

const imageByIndex = (index: number): StaticImageData =>
  images[index % images.toString().length];

export default imageByIndex;
