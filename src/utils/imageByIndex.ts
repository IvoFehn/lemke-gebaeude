import { StaticImageData } from "next/image";
import image1 from "../../public/forest_ground.webp";
import image2 from "../../public/cleaning_bucket.webp";
import image3 from "../../public/meta_spray_into_camera.webp";

export const images: StaticImageData[] = [image1, image2, image3];
export const imageAltTexts: string[] = [
  "Moosbedeckter Waldboden im Sonnenlicht",
  "Eimer mit Reinigungsmitteln",
  "Person sprüht Reinigungsspray in Kamera",
];

export const imageByIndex = (index: number): StaticImageData =>
  images[index % images.length];

export const altTextByIndex = (index: number): string =>
  imageAltTexts[index % imageAltTexts.length];

export default imageByIndex;
