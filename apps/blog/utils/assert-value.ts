export function assertValue<T>(v: T | undefined, err: string): T {
  if (!v) throw new Error(err);
  else return v;
}
