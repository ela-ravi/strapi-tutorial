
import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { getStrapiURL } from "@/lib/utils";
import { TStrapiComponent } from "@/types";

interface ImageProps {
    id: string;
    url: string;
    alternativeText: string;
}
interface LinkProps {
    id: string;
    url: string;
    text: string;
    isExternal: boolean;
}

export interface IHeroSectionProps extends TStrapiComponent {
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
}

const styles = {
  header: "relative h-[600px] overflow-hidden",
  backgroundImage: "absolute inset-0 object-cover w-full h-full",
  overlay:
    "relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50",
  heading: "text-4xl font-bold md:text-5xl lg:text-6xl",
  subheading: "mt-4 text-lg md:text-xl lg:text-2xl",
  button:
    "mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 transition-colors",
};

export function HeroSection({ data }: {data: Readonly<IHeroSectionProps>}) {
  if (!data) return null;

  const { heading, subHeading, image, link } = data;

  const imageSrc = getStrapiURL() + image.url;

  console.dir(data, { depth: null });
  return (
    <div className={styles.header}>
        <StrapiImage
            src={imageSrc}
            alt={image.alternativeText}
            width={1920}
            height={1080}
            className={styles.backgroundImage}
            style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
            loading="eager"
        />
      <div className={styles.overlay}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subHeading}</p>
        <Link className={styles.button} href={link.url}>
          {link.text}
        </Link>
      </div>
    </div>
  );
}