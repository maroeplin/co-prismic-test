import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineH2`.
 */
export type HeadlineH2Props = SliceComponentProps<Content.HeadlineH2Slice>;

/**
 * Component for "HeadlineH2" Slices.
 */
const HeadlineH2 = ({ slice }: HeadlineH2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_h2 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeadlineH2;
