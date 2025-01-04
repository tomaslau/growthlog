import confetti from 'canvas-confetti';
import { useCallback } from 'react';

type ConfettiColors = {
  primary?: string[];
  secondary?: string[];
};

export function useConfetti() {
  const fireConfetti = useCallback((colors?: ConfettiColors) => {
    const defaults = {
      spread: 70,
      startVelocity: 30,
      elementCount: 70,
      decay: 0.95,
      scalar: 1.2,
      ticks: 60,
      origin: { y: 0.8 },
      colors: colors?.primary || ['#10b981', '#34d399', '#6ee7b7'],
    };

    // Fire from left edge
    confetti({
      ...defaults,
      angle: 60,
      origin: { x: 0, y: 0.8 },
      colors: colors?.primary || defaults.colors,
    });

    // Fire from right edge
    confetti({
      ...defaults,
      angle: 120,
      origin: { x: 1, y: 0.8 },
      colors: colors?.secondary || colors?.primary || defaults.colors,
    });
  }, []);

  return { fireConfetti };
}
