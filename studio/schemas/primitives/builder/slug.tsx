import PathInput from "../../components/PathInput";

export const slug = (props: { basePath: string; source?: string }) => ({
  name: "slug",
  title: "Relative address in the site",
  description: "Please avoid special characters, spaces and uppercase letters.",
  type: "slug",
  inputComponent: PathInput,
  options: {
    basePath: props.basePath,
    source: props.source || "name",
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
});
