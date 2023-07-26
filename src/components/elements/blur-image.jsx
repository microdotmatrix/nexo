"use client"

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const BlurImage = ({ ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt || "Image Text"}
      className={clsx(
        props.className,
        "duration-700 ease-in-out",
        isLoading
          ? "opacity-0 grayscale-50 blur-md scale-105"
          : "opacity-100 grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;