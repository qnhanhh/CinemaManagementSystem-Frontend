import { ArrowDownToLine, ArrowRightToLine, ArrowUpToLine } from "lucide-react";

export const tasks = [
  {
    id: "1",
    title: "The Amazing Spiderman",
    genres: "action",
    views: "2.3M",
    compareStatus: "increase",
  },
  {
    id: "2",
    title: "The Amazing Spiderman 2",
    genres: "romantic",
    views: "2.1M",
    compareStatus: "decrease",
  },
  {
    id: "3",
    title: "Create a new task",
    genres: "documentation",
    views: "1.5M",
    compareStatus: "same",
  },
];

export const compareStatus = [
  {
    value: "increase",
    label: "Increase",
    icon: ArrowUpToLine,
  },
  {
    value: "decrease",
    label: "Decrease",
    icon: ArrowDownToLine,
  },
  {
    value: "same",
    label: "Same",
    icon: ArrowRightToLine,
  },
];
