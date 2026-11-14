export interface Position {
  id: number;
  pair: string;
  direction: "long" | "short";
  lotSize: number;
  leverage: number;
}
