function sum(terms: number[]) {
  return terms.reduce((a, b) => a + b)
}

export default function meanAngle(angles: number[]) {
  const nInverse = 1 / angles.length;

  return Math.atan2(
    nInverse * sum(angles.map(Math.sin)),
    nInverse * sum(angles.map(Math.cos))
  );
}