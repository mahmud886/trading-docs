export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractToc(rawMdx: string): TocItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const items: TocItem[] = [];
  const idCounts = new Map<string, number>();
  let match;

  while ((match = headingRegex.exec(rawMdx)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    let id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+/, "") // Remove leading dashes
      .replace(/-+$/, "") // Remove trailing dashes
      .replace(/-+/g, "-"); // Replace multiple dashes with single dash

    // Handle empty IDs or ensure uniqueness
    if (!id) {
      id = "heading";
    }

    // Ensure unique IDs by appending counter if duplicate
    const baseId = id;
    const count = idCounts.get(baseId) ?? 0;
    if (count > 0) {
      id = `${baseId}-${count}`;
    }
    idCounts.set(baseId, count + 1);

    items.push({ id, text, level });
  }

  return items;
}

