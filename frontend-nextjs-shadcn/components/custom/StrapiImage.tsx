import { fallbackImageUrl, getStrapiImageURL } from "@/lib/utils";
import Image from "next/image";

type StrapiImageAttriutes = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    loading?: "eager" | "lazy";
}

export function StrapiImage<T extends StrapiImageAttriutes>(props: Readonly<T>) {
    const {src, alt, width, height, className, style, loading} = props
    const imageUrl = getStrapiImageURL(src)
    return (
        <Image
            src={imageUrl ?? fallbackImageUrl}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={style}
            loading={loading}
        />
    )
}