# 🚀 CARA DEPLOY KE VERCEL - SOLUSI MUDAH

## ⚠️ PENTING: Gunakan Tombol Deploy di Figma Make

Project ini dibuat di **Figma Make** yang memiliki sistem deployment sendiri.

### ✅ CARA TERMUDAH (RECOMMENDED):

**Gunakan tombol "Deploy" atau "Publish" di Figma Make interface:**
- Klik tombol **Deploy/Publish** di kanan atas Figma Make
- Figma Make akan otomatis deploy project Anda
- Anda akan mendapat URL yang bisa langsung diakses

---

## 🔧 Jika Tetap Ingin Deploy Manual ke Vercel

Karena Figma Make tidak memiliki `package.json` dan build configuration, Anda perlu setup manual. Ikuti langkah ini:

### Setup Project untuk Vercel:

**1. Buat file `package.json` di root folder:**

```json
{
  "name": "portfolio-pikrew",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "motion": "^11.15.0",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.468.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.7.2",
    "vite": "^6.0.3",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

**2. Buat file `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist'
  }
});
```

**3. Buat file `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["."]
}
```

**4. Buat file `index.html` di root folder:**

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pikrew Portfolio - Minecraft Plugin Developer</title>
    <meta name="description" content="Portfolio website untuk pikrew - Custom Minecraft Plugin Developer" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

**5. Buat file `main.tsx` di root folder:**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**6. Install dependencies:**

```bash
npm install
```

**7. Test build locally:**

```bash
npm run build
```

Jika berhasil, akan ada folder `dist` yang terbuat.

**8. Deploy ke Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

**ATAU push ke GitHub dan import di vercel.com**

---

## 📝 Catatan Penting

- Setelah setup ini, project akan berfungsi seperti project React/Vite biasa
- Folder `dist` akan dibuat setelah `npm run build`
- Vercel akan otomatis detect konfigurasi Vite
- Pastikan semua imports dan paths sudah benar

---

## ❓ Masih Error?

Jika masih error setelah setup di atas:
1. Pastikan file `package.json`, `vite.config.ts`, dan `tsconfig.json` sudah dibuat
2. Jalankan `npm install` dulu
3. Test dengan `npm run build` - harus sukses tanpa error
4. Baru deploy ke Vercel

---

**Rekomendasi**: Gunakan fitur Deploy bawaan Figma Make untuk hasil tercepat! ✨
