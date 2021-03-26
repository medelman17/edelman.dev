import { Topic } from "../lib/schema";

export type PageSections = Topic["content"];

export type PageSection = PageSections[number];
