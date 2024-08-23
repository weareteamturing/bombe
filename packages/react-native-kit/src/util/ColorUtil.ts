export function applyOpacity(color: string, opacity: number): string {
  if (color.length !== 7) {
    return color;
  }

  if (opacity < 0) {
    opacity = 0;
  } else if (opacity > 100) {
    opacity = 100;
  }

  opacity = Math.round(opacity * 2.55);

  return color + opacity.toString(16).toUpperCase().padStart(2, '0');
}
