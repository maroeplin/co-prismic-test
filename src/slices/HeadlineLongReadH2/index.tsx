import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineLongReadH2`.
 */
export type HeadlineLongReadH2Props =
  SliceComponentProps<Content.HeadlineLongReadH2Slice>;

/**
 * Component for "HeadlineLongReadH2" Slices.
 */
const HeadlineLongReadH2 = ({
  slice,
}: HeadlineLongReadH2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_long_read_h2 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HeadlineLongReadH2;
