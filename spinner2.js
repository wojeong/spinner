//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spin = ['\r|','\r/','\r-','\r\\','\r|'];
for(let i = 0; i < 10; i++){
  setTimeout(() => {
    process.stdout.write(spin[i % 4]);
  }, i * 100);
}

