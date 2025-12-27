import { BotanicalDivider } from "@/components/BotanicalDivider";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { getBySlug } from "@/lib/getBySlug";
import { patchByRange } from "@/lib/patchByRange";
import { revalidatePath } from "next/cache";
import { ReactNode } from "react";
import { Form } from "./Form";

export default async function SlugLayout({
  children,
  params,
}: {
  children: ReactNode;
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
    <Section>
      <Heading>Lucia e Davide</Heading>

      <Text>Sono felici di annunciare il loro matrimonio</Text>

      <Text variant="script">Venerdì 11 Settembre 2026</Text>
      <Text>La cerimonia avrà luogo alle 15:30 presso</Text>

      <Text variant="script">
        Santuario
        <br />
        Santa Maria delle Grazie
        <br />
        Rimini
      </Text>
      <Text>Via delle Grazie, 10, Rimini RN</Text>
      <BotanicalDivider />
      <Text>A seguire il ricevimento sarà presso</Text>
      <Text variant="script">La Fragola de Bosch</Text>
      <Text>Via Sottorigossa, 1321, Gambettola RN</Text>
      <BotanicalDivider />
      <div className="flex flex-col justify-center items-center">
        {entries.map((entry) => (
          <Form key={entry.range} entry={entry} action={patchByRangeAction} />
        ))}
      </div>
      {children}
    </Section>
  );
}
