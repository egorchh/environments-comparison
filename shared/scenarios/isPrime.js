export function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  const s = Math.floor(Math.sqrt(num));
  for (let i = 5; i <= s; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
