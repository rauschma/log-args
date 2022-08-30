#!/usr/bin/env node

for (const [key,value] of Object.entries(process.env)) {
  if (key.startsWith('npm_config_arg')) {
    console.log(`${key}=${JSON.stringify(value)}`);
  }
}
console.log(process.argv.slice(2));
