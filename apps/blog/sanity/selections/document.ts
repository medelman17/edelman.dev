import { q, type Selection } from "groqd";

export const document = {
  _type: q.string(),
  _key: q.string(),
  _id: q.string(),
  _createdAt: q.date(),
  _updatedAt: q.date(),
} satisfies Selection;
