function romanToInt(s) {
  const num = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = num[s[i]];
    const next = num[s[i + 1]];

    // 1st time  I=1, X=10
   console.log(next)

    if (next > current) {
      total += next - current;
      i++
    } else {
      // 1st time  L=50, V=5
      // 2nd time  V=5, I=1
      // 3rd time  I=1, I=1
      // 4th time  I=1, I=1
      // 5th time  I=1, I=1
      total += current; // 50, 55, 56, 57, 58
    }
  }
  return total;
}
console.log(romanToInt("IX"));
