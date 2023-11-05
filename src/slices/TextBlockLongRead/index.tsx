import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlockLongRead`.
 */
export type TextBlockLongReadProps =
  SliceComponentProps<Content.TextBlockLongReadSlice>;

/**
 * Component for "TextBlockLongRead" Slices.
 */
const TextBlockLongRead = ({ slice }: TextBlockLongReadProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_block_long_read (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default TextBlockLongRead;
