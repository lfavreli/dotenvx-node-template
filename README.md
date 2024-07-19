# dotenvx in a Node.js environment

Welcome to the Railway `dotenvx` Node.js template!

This example provides a minimal setup for managing environment variables using the [dotenvx](https://dotenvx.com/) library in a Node.js environment (_e.g. http or express server_) deployed on Railway's platform-as-a-service (PaaS).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/zXEiVF?referralCode=lfavreli)

## ⚠️ Disclaimer

This is a demonstration template. <br />
The `.env.keys` file should not be commited in a real project.

(_cf. [Development and production use](#-development-and-production-use)_)

## ✨ Overview

`dotenvx` is described as a better dotenv–from the creator of `dotenv` :

* run anywhere (cross-platform)
* multi-environment
* encrypted envs

## 🚀 Use as it stands

1. Click the 'Deploy on Railway' button 👆

2. Deploy with the pre-configured environment variables values (_production_):

```text
DOTENV_PRIVATE_KEY_PRODUCTION=706afc89eaa09ea9441d0f18f7c2fbbb6c77a201abf47aaa3a607e499a52c51d
```

3. Click on the "public domain" link provided by Railway to observe the variables being loaded from the server.

```js
`Hello ${process.env.NAME ?? 'world'} from ${process.env.ENVIRONMENT ?? 'space'}!`;
```

There you go! 💪

Please, note that there may be a delay of 2-3 minutes for the DNS to become aware of this new address. If this doesn't work after a few minutes, in the settings, delete the public address (_Public Networking_) and regenerate one.

4. (Bonus) To use development environment variables, change the name and value of the private key:

```text
DOTENV_PRIVATE_KEY=78ef7c8b904d674d8a2e468714e4b770a3c7c76b3c09cdfa1bc80bcd862f0036
```

## 💻 Development and production use

1. Installing `dotenvx` globally:

```bash
npm install @dotenvx/dotenvx -g
```

> Install globally as a cli to unlock dotenv for ANY language, framework, or platform. 💥
> I am using (and recommending) this approach going forward. – [motdotla](https://github.com/motdotla)

2. Add (or uncomment) the `.env.keys` file in the `.gitignore` to prevent it from being tracked:

```text
.env.keys
```

Then, at the root of the project, make sure you no longer track this file:

```bash
git rm -r --cached .
```

If there are, you can add and commit these changes.

3. Encrypt your secrets and generate your own private keys file (`.env.key`):

    3.1. Remove existing `.env.keys` file:

    ```bash
    rm .env.keys
    ```

    3.2 Setting up your custom `.env` and `.env.production` files:

    ```text
    NAME=YOUR_NAME
    ENVIRONMENT=YOUR_ENV
    YOUR_CUSTOM_KEY=YOUR_CUSTOM_VALUE
    ```

    Make sure you don't have a `DOTENV_PUBLIC_KEY` variable in your environment files to generate new keys.

    3.3. Encrypt created environment files:

    ```bash
    dotenvx encrypt -f .env
    dotenvx encrypt -f .env.production
    ```

4. Finally, in Railway, update the variable with the value of the newly generated key: either `DOTENV_PRIVATE_KEY` or `DOTENV_PRIVATE_KEY_PRODUCTION`, depending on the variables you wish to load.

---

And that's it! You've just regenerated the encrypted file and decryption keys. Each time you add, delete, or modify environment variables in your `.env` files, check that the values are encrypted before deploying the file on your server. It's that simple!

## ⚒️ Useful commands

* Retrieve initial value(s) from and encrypted `.env` file:

```bash
dotenvx get {KEY} [-f,--env-file]                   # Return a single value
dotenvx get [-f,--env-file] [-pp,--pretty-print]    # Return all values
```

* Set a new encrypted key/value:

```bash
dotenvx set {KEY} {VALUE} [-f,--env-file]
```

* Decrypt an encrypted environment file:

```bash
dotenvx decrypt [-f,--env-file] [--stdout]
```

* More information and details about the CLI:

```bash
dotenvx --help
```

## 📄 Learn more

`dotenvx`:
- [Documentation](https://dotenvx.com/docs)
- [Railway _Express.js_ deployment tutorial](https://dotenvx.com/docs/platforms/railway)
- [Github Repository](https://github.com/dotenvx/dotenvx)

`dotenvx-node-template`:
- [README with instructions](https://github.com/lfavreli/dotenvx-node-template/blob/master/README.md)
- [Github Repository](https://github.com/lfavreli/dotenvx-node-template)
- [Open an issue](https://github.com/lfavreli/dotenvx-node-template/issues)

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This template is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.