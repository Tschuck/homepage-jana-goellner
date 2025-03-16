# Homepage - Jana Goellner

Homepage for a midwife and Alternative practitioner from germany, thuringia. Visit the deployed homepage here:

- [https://hebamme-jana-goellner.de](https://hebamme-jana-goellner.de/)

## React + TypeScript + Vite

This project was bootstrapped with [Vite](https://vitejs.dev/).

## How to start

1. Clone the project

   ```bash
   git clone git@github.com:Tschuck/homepage-jana-goellner.git
   ```

2. Bootstrap the project

   ```bash
   cd ./homepage-jana-goellner.git
   pnpm install
   ```

   This will install dev dependencies.

3. Start the application

   ```bash
   pnpm run dev
   ```

4. Build the application

   ```bash
   pnpm run build
   ```

## How to adjust

This page is powered by a specific json definition generated from this [Website Editor](https://github.com/Tschuck/website-editor).

Start the project and import the json found here [./src/definition/Jana Goellner.json](https://github.com/Tschuck/homepage-jana-goellner/blob/feature/main/src/definition/Jana%20Goellner.json).

After all the changes are done, export the json and replace the json file mentioned above. When images have changed, execute the following script to download all new images correctly:

```
pnpm run download-definition-images
```
