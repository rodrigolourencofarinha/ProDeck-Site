# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Instructions to Deploy

This uses the `docs` folder method to avoid problems with large file names.

1. **Build the website**
2. **Remove the old `docs` folder** (except `CNAME`)
3. **Move the new `dist` into `docs`**
4. **Commit and push changes**
5. **Verify** in GitHub → Settings → Pages: Source is `main` / `docs`, HTTPS enabled.

### Code

```PowerShell
npm run build
```

> [!Note]- If possible, delete `docs` folder first (but keep `CNAME`)
>
> ```PowerShell
> Get-ChildItem -Path .\docs\ -Recurse | Where-Object { $_.Name -ne "CNAME" } | Remove-Item -Force -Recurse
> ```

```PowerShell
Copy-Item .\dist\* .\docs\ -Recurse -Force
```

```PowerShell
git add docs
```

```PowerShell
git commit -m "fix: correctly bundle images"
```

```PowerShell
git push origin main
```


✅ No `gh-pages` branch or `homepage` field needed.

✅ Current Vite `base: "./"` works fine with the custom domain.

### To Test

Run `npm run dev` and open `http://localhost:5173/` to verify everything works locally. Stop cloud sync to avoid possible file locks.

