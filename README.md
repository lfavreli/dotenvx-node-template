# dotenvx in a Node.js environment

Welcome to the Railway `dotenvx` Node.js template!

This example provides a minimal setup for managing environment variables using the [dotenvx](https://dotenvx.com/) library in a Node.js environment (_e.g. http or express server_) deployed on Railway's platform-as-a-service (PaaS).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/zXEiVF?referralCode=lfavreli)

## ⚠️ Disclaimer

This is a demonstration template only. <br />
The `.env`, `.env.production`, and `.env.keys` files should not be commited in a real project.

(_cf. [Development and production use](#-development-and-production-use)_)

## ✨ Overview

`dotenvx` is described as a better dotenv–from the creator of `dotenv` :

* run anywhere (cross-platform)
* multi-environment
* encrypted envs

## 🚀 Use as it stands

1. Click the 'Deploy on Railway' button 👆
2. To load the appropriate environment variables, choose the right decryption key (`DOTENV_KEY`):

- **Production** (default): <br />
    `dotenv://:key_28e238f7048570c43de05869e4e3c36003e4c88fa3b7582a69bbc49dc73321e5@dotenvx.com/vault/.env.vault?environment=production`

- **Development** : <br />
    `dotenv://:key_00a4936b5c6958296d2703713334ffc3b27428d87e80705530cb04617dcdbe23@dotenvx.com/vault/.env.vault?environment=development`

3. Click on the "public domain" link provided by Railway to observe the variables being loaded from the server. Please note that there may be a delay of 2-3 minutes for the DNS to become aware of this new address.

```js
`Hello ${process.env.NAME ?? 'world'} from ${process.env.ENVIRONMENT ?? 'space'}!`;
```

There you go! 💪

## 💻 Development and production use

1. Installing `dotenvx` globally:

```bash
npm install @dotenvx/dotenvx -g
```

> Install globally as a cli to unlock dotenv for ANY language, framework, or platform. 💥
> I am using (and recommending) this approach going forward. – [motdotla](https://github.com/motdotla)

2. Add (or uncomment) `.env*` files in the .gitignore to prevent them from being tracked, with the exception of `.env.vault`:

```text
.env*
!.env.vault
```

Then, at the root of the project, make sure you no longer track these files:

```bash
git rm -r --cached .
```

If there are, you can add and commit these changes.

3. Create your own keys and generated vault file (`.env.key` & `.env.vault`):

```bash
# Remove existing .env.keys .env.vault files
rm .env.keys .env.vault

# Encrypt .env and .env.production files
dotenvx encrypt -f .env
dotenvx encrypt -f .env.production
```

4. Finally, in Railway, update the `DOTENV_KEY` variable with the value of the newly generated key: either `DOTENV_VAULT_DEVELOPMENT` or `DOTENV_VAULT_PRODUCTION`, depending on the variables you wish to load.

---

And that's it! Your environment files are no longer tracked, and you have just regenerated the encrypted file and decryption keys.

Each time you add, delete, or modify environment variables in your `.env` files, re-encrypt the file and deploy the new vault. It's that simple!

## ⚒️ Useful commands

* Encryption of file containing environment variables:

```bash
dotenvx encrypt [-f,--env-file] [directory]
```

* Creation of a pre-commit hook to check that files are not being tracked:

```bash
dotenvx precommit --install
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