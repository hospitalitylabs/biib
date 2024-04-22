import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import CardComponent from 'src/components/CardComponent';  // Adjust path if necessary

import _components from "data/components";
import { Button } from "src/components/Button";
import createHeadingComponent from "src/components/Heading";
import Image from "src/components/Image";

const components = {
  Button,
  CardComponent,

  img: Image,
  h1: createHeadingComponent(1),
  h2: createHeadingComponent(2),
  h3: createHeadingComponent(3),

  ..._components,
};

export default function RendererListings({ children: source }: { children: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />;
}
