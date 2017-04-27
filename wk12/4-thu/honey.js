var openJars = Array(100).fill().map((s, i) => i + 1).filter(i => !(Math.sqrt(i) % 1));

console.log(`Open: ${openJars}`);
