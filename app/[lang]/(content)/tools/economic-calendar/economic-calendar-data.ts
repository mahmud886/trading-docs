export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  importance: "high" | "medium" | "low";
  country: string;
}
