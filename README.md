![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Gemini](https://img.shields.io/badge/Google-Gemini-blue)
![License](https://img.shields.io/badge/License-MIT-green)



# 🧠 Thought Filter

> Transform emotional thoughts into clear, confident, and professional communication using AI.

Thought Filter is an AI-powered SaaS that rewrites emotional, unclear, or impulsive messages into polished communication. It helps users express themselves professionally while preserving their original intent.

---

## ✨ Features

- 🤖 AI-powered thought rewriting using Google Gemini
- 🎯 Multiple rewrite tones
  - Professional
  - Corporate
  - Friendly
  - Executive
- 📜 Thought history
- 📋 One-click copy
- 🗑 Delete previous thoughts
- 🔐 Secure authentication with Clerk
- ⚡ Fast Next.js App Router architecture
- 📱 Responsive modern UI
- 🔍 SEO optimized
- 🛡 Production-ready architecture

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full-stack framework |
| React 19 | UI |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Prisma ORM | Database ORM |
| PostgreSQL (Neon) | Database |
| Clerk | Authentication |
| Google Gemini | AI rewriting |
| Vercel | Deployment |

---

## 📂 Project Structure

```
app/
components/
hooks/
services/
    ai/
    database/
    thought/
types/
prisma/
```

Architecture:

```
Route
   ↓
Service
   ↓
Repository
   ↓
Prisma
   ↓
PostgreSQL
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/thought-filter.git

cd thought-filter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file.

```env
DATABASE_URL=

GEMINI_API_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Start development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 📸 Screenshots

> Add screenshots here after deployment.

- Landing Page
- Dashboard
- Rewrite Result
- History

---

## 🔒 Security

- Clerk Authentication
- Protected API Routes
- Server-side Validation
- Secure Prisma Queries
- Production Security Headers

---

## 📈 Roadmap

- [ ] Rate limiting
- [ ] Stripe subscriptions
- [ ] Favorites
- [ ] Search & filters
- [ ] Export to PDF
- [ ] Analytics dashboard
- [ ] Team workspaces

---

## 🧪 Scripts

```bash
npm run dev
npm run build
npm run lint
```

---

## 🌐 Deployment

Optimized for deployment on **Vercel**.

```bash
npm run build
```

---

## 👨‍💻 Author

Built by **YOUR_NAME**

GitHub:
https://github.com/YOUR_USERNAME

---

## 📄 License

MIT License-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
