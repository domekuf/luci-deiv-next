import { Entry } from "./Entry";
import { getRows } from "./getRows";

export async function getBySlug(slug: string) {
  const filtered: Entry[] = [];

  const rows = await getRows();
  if (!rows) {
    return [];
  }
  for (let i = 0; i < rows?.length; ++i) {
    const row = rows[i];
    if (row[0] === slug) {
      filtered.push({
        slug,
        name: row[1],
        range: `D${i + 1}`,
        line: `${i + 1}`,
        checked: row[3] == 1,
        under5: row[5] == 1,
        bet5and10: row[6] == 1,
        gluten: row[7] == 1,
        lactose: row[8] == 1,
        notes: row[9],
      });
    }
  }
  return filtered;
}
