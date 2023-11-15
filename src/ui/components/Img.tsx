import { ImgHTMLAttributes, useEffect, useState } from "react";
import { Placeholder } from "./Placeholder";
import styled from "styled-components";

export interface ImgProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  placeholderWidth: number;
  height: number;
  src: string | null;
}

const ImgWrapper = styled.div`
  position: relative;
`;

const PlaceholderWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const Img = ({ placeholderWidth, src, ...props }: ImgProps) => {
  const [resolvedSrc, setSrc] = useState<string | undefined>();

  useEffect(() => {
    if (!src) return;

    const image = new Image();
    image.src = src;

    const loadImage = () => setSrc(src);

    image.addEventListener("load", loadImage);

    return () => {
      image.removeEventListener("load", loadImage);
    };
  }, [src]);

  if (!resolvedSrc) {
    return <Placeholder width={placeholderWidth} height={props.height} />;
  }

  return (
    <ImgWrapper>
      {!resolvedSrc && (
        <PlaceholderWrapper>
          <Placeholder width={placeholderWidth} height={props.height} />
        </PlaceholderWrapper>
      )}

      <img {...props} src={resolvedSrc} />
    </ImgWrapper>
  );
};
