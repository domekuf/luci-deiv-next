import { getBySlug } from "@/lib/getBySlug";
import { patchByRange } from "@/lib/patchByRange";
import { revalidatePath } from "next/cache";
import { Form } from "./Form";

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const entries = await getBySlug(slug);

  async function patchByRangeAction(formData: FormData) {
    "use server";
    const range = formData.get("range") as string;
    const value = formData.get("value") === "on";
    await patchByRange(range, value);
    revalidatePath(`/` + slug);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Slug: {slug}
        </h1>
        <p>Sheet Data: {JSON.stringify(entries)}</p>
        {entries.map((entry) => (
          <Form key={entry.range} entry={entry} action={patchByRangeAction} />
        ))}
      </main>
    </div>
  );
}
