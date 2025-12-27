"use client";
import { Text } from "@/components/Text";

import { Entry } from "@/lib/Entry";

export const Form = ({
  entry,
  action,
}: {
  entry: Entry;
  action: (formData: FormData) => void;
}) => (
  <form key={entry.range} action={action} className="flex flex-col gap-4">
    <input type="hidden" name="range" value={entry.range} />
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="value"
        defaultChecked={entry.checked}
        onChange={(e) => {
          e.currentTarget.form?.requestSubmit();
        }}
      />

      <Text variant="script">{entry.name}</Text>
    </label>
  </form>
);
