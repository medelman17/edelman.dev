import { createDataHook } from "next-data-hooks";
import sanity from "../lib/sanity-client";

export const useHowTos = createDataHook("HowTos", async (context) => {
  return await sanity.getAll("howto");
});

export const useHowTo = createDataHook("HowTo", async (context) => {
  const [ht] = await sanity.getAll(
    "howto",
    `slug.current == "${context.params.slug}"`
  );

  let steps = [];

  if (!ht) {
    throw new Error("No How to");
  }

  console.log("HT", ht);

  const author = await sanity.expand(ht.author);

  for (const step of ht.step) {
    console.log("STEP", step);
    // const res = await sanity.expand(step);
    // if (res) {
    //   steps.push(res);
    // }
    steps.push(step);
  }

  return {
    howto: ht,
    author,
    steps,
  };
});
