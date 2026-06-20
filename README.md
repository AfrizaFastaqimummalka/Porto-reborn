# Portofolio — Afriza Fastaqimummalka (Next.js)

Versi animated dari portofolio kamu. Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + komponen ala shadcn/ui (ditulis manual, lihat catatan di
bawah) + Framer Motion.

## Cara jalanin

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build production:

```bash
npm run build
npm run start
```

> Project ini sudah pernah di-`npm run build` & `npm run lint` dan lolos
> bersih sebelum dikirim ke kamu — tinggal `npm install` aja.

## Struktur folder

```
app/
├── layout.tsx        ← font (self-hosted, lihat catatan font di bawah) + metadata
├── page.tsx           ← urutan section di-assemble di sini
├── globals.css        ← design tokens (warna, font, keyframes marquee/pulse)
└── fonts/              ← file font lokal (Space Grotesk, Inter, JetBrains Mono)

components/
├── ui/                 ← Button, Card, Badge, Skeleton (ala shadcn/ui)
├── icons.tsx            ← ikon GitHub & LinkedIn custom (lihat catatan di bawah)
├── navbar.tsx, hero.tsx, about.tsx, tech-stack.tsx,
├── projects.tsx, project-card.tsx, certificates.tsx,
└── contact.tsx, footer.tsx, marquee-banner.tsx

hooks/
├── use-count-up.ts        ← counter 0 → angka pakai requestAnimationFrame
└── use-active-section.ts  ← deteksi section aktif buat indikator navbar

lib/
├── utils.ts    ← helper cn() buat gabungin class Tailwind
└── data.ts     ← SEMUA KONTEN (profil, stats, project, tools, sertifikat)

public/images/
├── profile/                 ← taruh profile.jpg di sini
└── projects/<slug>/         ← taruh 1.jpg (1 foto cover per project)
```

## 1. Edit konten

Hampir semua teks (nama, tagline, project, tools, sertifikat) ada di **satu
file**: `lib/data.ts`. Gak perlu utak-atik komponen buat ganti konten.

## 2. Cara nambah foto

- **Foto profil:** `public/images/profile/profile.jpg`
- **Foto project:** `public/images/projects/<slug>/1.jpg` (1 foto cover per
  card — beda dari versi HTML/CSS/JS sebelumnya yang carousel 3 foto, karena
  section Projects sekarang berupa **grid card**, bukan slider)
- Selama foto belum ada, otomatis muncul placeholder rapi (bukan ikon broken)
  berkat `onError` fallback di tiap `<img>`.

## 3. Cara isi link Demo/GitHub & lengkapi project "Rekon Material"

Buka `lib/data.ts`, cari array `projects`, edit field `repoUrl`, `liveUrl`,
atau lengkapi project dengan `status: "TBD"` (saat ini cuma "Rekon Material").

## 4. Cara nambah sertifikat

Section Certificates sengaja kosong (kamu belum kirim datanya) — sekarang
nampilin empty-state yang rapi. Isi array `certificates` di `lib/data.ts`:

```ts
{ title: "Nama Sertifikat", issuer: "Penerbit", date: "2026",
  url: "https://...", skills: ["React", "Node.js"] }
```

## 5. Catatan teknis penting

- **Font:** brief minta `next/font`, tapi sandbox tempat aku build ini gak
  punya akses ke `fonts.googleapis.com`. Jadi aku pakai **`next/font/local`**
  dengan file font yang sudah di-self-host di `app/fonts/` (Space Grotesk,
  Inter, JetBrains Mono — sumbernya dari paket `@fontsource`, lisensi
  open source/SIL OFL). Hasilnya sama persis (next/font, self-hosted, no
  layout shift), cuma sumber filenya lokal, bukan fetch ke Google tiap build.
  Kalau kamu punya akses internet normal dan tetap mau pakai
  `next/font/google`, tinggal swap import-nya di `app/layout.tsx`.
- **Ikon GitHub/LinkedIn:** versi `lucide-react` yang ke-install
  (v1.21.0) udah gak punya ikon brand (`Github`, `Linkedin`) lagi —
  jadi dua ikon itu aku buat manual di `components/icons.tsx` (SVG biasa).
- **shadcn/ui:** CLI resminya (`npx shadcn init`) butuh akses ke
  `ui.shadcn.com` yang gak ke-reach dari sandbox aku, jadi komponen
  `Button`/`Card`/`Badge`/`Skeleton` di `components/ui/` aku tulis manual
  mengikuti pola/struktur shadcn asli (pakai `class-variance-authority` +
  `cn()` helper) — fungsinya identik, tinggal pakai seperti biasa.
- **Gambar:** semua `<img>` pakai tag biasa (bukan `next/image`) supaya
  fallback `onError` ke placeholder jalan mulus selama foto project belum
  kamu taruh, dan biar gak perlu konfigurasi `remotePatterns` buat ikon
  devicon dari CDN.

## 6. Deploy ke Vercel

```bash
npx vercel
```

atau import repo-nya langsung dari [vercel.com/new](https://vercel.com/new) —
Next.js ke-detect otomatis, gak perlu setting tambahan.
