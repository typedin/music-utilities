/**
 * logic has been taken from here:
 * https://www.teoria.com/en/articles/temperaments/02-pythagoras.php
 */

function perfectFifthUp(frequency: number): number {
  return (frequency * 3) / 2;
}

function perfectForthDown(frequency: number): number {
  return (frequency * 3) / 4;
}

export default function Pythagorean(reference: number): {
  M2: { up: number };
  M3: { up: number };
  P4: { up: number };
  P5: { up: number };
  m6: { up: number };
  M7: { up: number };
  P8: { up: number };
} {
  const M2 = {
    up: perfectForthDown(perfectFifthUp(reference)),
  };

  const M3 = {
    up: perfectForthDown(
      perfectFifthUp(perfectForthDown(perfectFifthUp(reference))),
    ),
  };

  const P4 = {
    up: (reference * 4) / 3,
  };

  const P5 = {
    up: perfectFifthUp(reference),
  };

  const m6 = {
    up: perfectFifthUp(perfectForthDown(perfectFifthUp(reference))),
  };

  const M7 = {
    up: perfectFifthUp(
      perfectForthDown(
        perfectFifthUp(perfectForthDown(perfectFifthUp(reference))),
      ),
    ),
  };

  const P8 = {
    up: reference * 2,
  };

  return {
    M2,
    M3,
    P4,
    P5,
    m6,
    M7,
    P8,
  };
}
