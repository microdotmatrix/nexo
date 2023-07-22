"use client"

import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const Pdf = dynamic(() => 
  import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
    ssr: false
  }
)

import { NotionRenderer } from "react-notion-x";

const NotionPage = ({ blockMap }) => {
  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Pdf,
          Modal,
          Tweet
        }}

        // NOTE: custom images will only take effect if previewImages is true and
      />
    </>
  )
}