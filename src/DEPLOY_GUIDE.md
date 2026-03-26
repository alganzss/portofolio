# Deploy ke Vercel - Panduan Lengkap

## ⚠️ PENTING untuk Figma Make Projects

Project ini dibuat di **Figma Make** yang memiliki sistem build sendiri. Ada beberapa cara untuk deploy:

---

## 🎯 Cara 1: Export & Deploy (RECOMMENDED)

### Langkah-langkah:

1. **Download Project Files**
   - Di Figma Make, klik menu atau tombol export
   - Download semua files sebagai ZIP
   - Extract ZIP tersebut

2. **Buat Package.json**
   
   Buat file `package.json` di root folder:
   ```json
   {
     "name": "vybe-streetwear",
     "version": "1.0.0",
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "motion": "^11.15.0",
       "lucide-react": "^0.468.0"
     },
     "devDependencies": {
       "@types/react": "^18.3.12",
       "@types/react-dom": "^18.3.1",
       "@vitejs/plugin-react": "^4.3.4",
       "typescript": "^5.7.2",
       "vite": "^6.0.3",
       "tailwindcss": "^4.0.0"
     }
   }
   ```

3. **Buat vite.config.ts**
   
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': '/src'
       }
     }
   });
   ```

4. **Buat tsconfig.json**
   
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
       "noFallthroughCasesInSwitch": true
     },
     "include": ["src"]
   }
   ```

5. **Reorganisasi File Structure**
   
   Pindahkan files ke struktur ini:
   ```
   project/
   ├── src/
   │   ├── App.tsx
   │   ├── components/
   │   ├── styles/
   │   └── main.tsx (buat file ini)
   ├── index.html (buat file ini)
   ├── package.json
   ├── vite.config.ts
   ├── tsconfig.json
   └── vercel.json
   ```

6. **Buat src/main.tsx**
   
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

7. **Buat index.html**
   
   ```html
   <!DOCTYPE html>
   <html lang="id">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" type="image/svg+xml" href="/vite.svg" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>VYBE Streetwear</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/src/main.tsx"></script>
     </body>
   </html>
   ```

8. **Install Dependencies**
   ```bash
   npm install
   ```

9. **Test Local**
   ```bash
   npm run dev
   ```

10. **Deploy ke Vercel**
    ```bash
    npm i -g vercel
    vercel login
    vercel
    ```

---

## 🎯 Cara 2: GitHub + Vercel (Automatic Deploy)

1. Push project yang sudah di-setup (ikuti Cara 1) ke GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Klik "Add New Project"
4. Import repository GitHub Anda
5. Vercel otomatis detect Vite
6. Klik "Deploy"

---

## 🎯 Cara 3: Direct Deploy (Jika Figma Make Support)

Beberapa platform seperti Figma Make mungkin punya integrasi langsung:

1. Cari tombol "Deploy" atau "Publish" di Figma Make
2. Pilih Vercel sebagai platform
3. Authenticate dengan Vercel
4. Deploy otomatis

---

## ❓ Troubleshooting

### Error: "No Output Directory named 'dist'"

**Penyebab**: Project belum punya build configuration

**Solusi**: Ikuti Cara 1 untuk setup project dengan proper configuration

### Error: "Cannot find module"

**Penyebab**: Dependencies belum terinstall

**Solusi**: 
```bash
npm install
```

### Error: Build Failed

**Penyebab**: Ada import/syntax error

**Solusi**: Check console untuk error spesifik dan fix code

---

## 📞 Butuh Bantuan?

Jika masih ada masalah, coba:
1. Pastikan semua file ada di struktur yang benar
2. Check bahwa semua imports menggunakan path yang benar
3. Test build local dulu: `npm run build`
4. Check error messages di Vercel dashboard

---

Made with ❤️ using Figma Make
