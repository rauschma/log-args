# log-args

The bin script `log-args` logs to the terminal which arguments a shell script receives that is invoked by an npm package script. It is meant to be used from a `package.json` file like this:

```json
{
  ···
  "scripts": {
    "log-args": "log-args"
  },
  ···
}
```
