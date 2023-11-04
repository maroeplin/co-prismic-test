import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentBlockMittel1A`.
 */
export type ContentBlockMittel1AProps =
  SliceComponentProps<Content.ContentBlockMittel1ASlice>;

/**
 * Component for "ContentBlockMittel1A" Slices.
 */
const ContentBlockMittel1A = ({
  slice,
}: ContentBlockMittel1AProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_block_mittel1_a (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ContentBlockMittel1A;
