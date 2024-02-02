import { StaticImageData } from "next/image";
import image1 from "../../public/forest_ground.webp";
import image2 from "../../public/cleaning_bucket.webp";
import image3 from "../../public/meta_spray_into_camera.webp";

export const images: StaticImageData[] = [image1, image2, image3];

const imageByIndex = (index: number): StaticImageData =>
  images[index % images.toString().length];

export default imageByIndex;
