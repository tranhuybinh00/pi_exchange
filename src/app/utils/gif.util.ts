import { COLORS } from "@constant";

export function getRandomColor(): string {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}