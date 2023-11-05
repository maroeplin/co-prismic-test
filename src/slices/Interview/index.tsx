import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Interview`.
 */
export type InterviewProps = SliceComponentProps<Content.InterviewSlice>;

/**
 * Component for "Interview" Slices.
 */
const Interview = ({ slice }: InterviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for interview (variation: {slice.variation}) Slices
    </section>
  );
};

export default Interview;
