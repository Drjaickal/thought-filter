![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Gemini](https://img.shields.io/badge/Google-Gemini-4285F4)
![License](https://img.shields.io/badge/License-MIT-green)

<div align="center">

# 🧠 Thought Filter

### Transform emotional thoughts into clear, confident, and professional communication using AI.

An AI-powered SaaS that rewrites emotional, impulsive, or unclear messages into polished communication while preserving the user's original intent.

### 🌐 Live Demo

**https://YOUR_VERCEL_URL.vercel.app**

</div>

---

<div align="center">
  <h3>🩺 Avijit Acharya · @Drjaickal</h3>

  <p>
    <a href="https://github.com/Drjaickal">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
    </a>

  <a href="https://www.linkedin.com/in/avijit-acharya-532a76209/">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
    </a>

  <a href="https://www.instagram.com/neeli_bullet_gx">
      <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
    </a>

  <a href="https://leetcode.com/u/Drjaickal/">
      <img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=orange"/>
    </a>

  <a href="https://www.hackerrank.com/avijitacharya">
      <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"/>
    </a>

  <a href="mailto:avijitcreation99@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
    </a>
  </p>
</div>

---

# ✨ Features

- 🤖 AI-powered rewriting with Google Gemini
- 🎯 Multiple communication tones
  - Professional
  - Corporate
  - Friendly
  - Executive
- 🧠 Intelligent rewrite history
- 📋 One-click copy
- 🗑 Delete previous rewrites
- 🔐 Clerk Authentication
- 🌗 Dark & Light mode
- ⚡ Fast App Router architecture
- 📱 Fully responsive UI
- 🔍 SEO optimized
- 🛡 Production-ready architecture

---

# 💡 Why Thought Filter?

Writing while emotional often leads to misunderstandings.

Thought Filter helps users:

- Communicate professionally
- Preserve original intent
- Remove unnecessary emotional wording
- Improve workplace communication
- Respond calmly during difficult conversations

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full Stack Framework |
| React 19 | UI |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Styling |
| Prisma ORM | Database ORM |
| PostgreSQL (Neon) | Database |
| Clerk | Authentication |
| Google Gemini | AI Rewriting |
| Sonner | Toast Notifications |
| Lucide React | Icons |
| Vercel | Deployment |

---

# 🏗 Architecture

```
Client
   │
   ▼
Next.js App Router
   │
   ▼
Route Handler
   │
   ▼
Service Layer
   │
   ▼
Repository
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

# 📂 Project Structure

```
app/
│
├── dashboard/
├── api/
├── loading.tsx
├── error.tsx
├── not-found.tsx
│
components/
│
├── dashboard/
├── landing/
├── theme/
├── ui/
│
hooks/
│
services/
│   ├── ai/
│   ├── database/
│   └── thought/
│
lib/
│
prisma/
│
types/
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Drjaickal/thought-filter.git

cd thought-filter
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file.

```env
DATABASE_URL=

GEMINI_API_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Database Migration

```bash
npx prisma migrate dev
```

---

## Start Development Server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

# 📸 Screenshots

## Landing Page

<img width="1920" alt="Landing" src="https://github.com/user-attachments/assets/0823c792-5678-49f9-8417-8a0a26f2ce6a" />

<img width="1920" alt="Landing Dark" src="https://github.com/user-attachments/assets/a961723c-63e6-4f65-98b8-555585cca6d1" />

---

## Dashboard

<img width="1920" alt="Dashboard" src="https://github.com/user-attachments/assets/32494fc8-c312-404f-bdfa-556d60f112eb" />

---

## Rewrite Result

<img width="1920" alt="Rewrite" src="https://github.com/user-attachments/assets/9761815e-f890-4ad2-afc8-dff424e2ac4c" />

---

## History

<img width="1920" alt="History" src="https://github.com/user-attachments/assets/5dac7129-194e-43f9-b00a-4b05ac0d7e27" />

---

# 🔒 Security

- Clerk Authentication
- Protected Routes
- Server-side Validation
- Prisma ORM
- Secure Environment Variables
- Production Security Headers
- Input Validation

---

# ⚙ Available Scripts

```bash
npm run dev
```

Runs the development server.

---

```bash
npm run build
```

Creates the production build.

---

```bash
npm run start
```

Runs the production server.

---

```bash
npm run lint
```

Runs ESLint.

---

# 📈 Roadmap

- [ ] Stripe Subscription
- [ ] AI Rewrite Suggestions
- [ ] Favorite Rewrites
- [ ] Search History
- [ ] Export PDF
- [ ] Analytics Dashboard
- [ ] Team Workspace
- [ ] AI Usage Dashboard

---

# 🚀 Deployment

Optimized for **Vercel**.

```bash
npm run build
```

Deploy directly using:

- Vercel
- Neon PostgreSQL
- Clerk
- Google Gemini

---

# 👨‍💻 Author

## Avijit Acharya

Backend & Full Stack Developer passionate about building production-ready SaaS applications using modern web technologies.

- GitHub: https://github.com/Drjaickal
- LinkedIn: https://www.linkedin.com/in/avijit-acharya-532a76209/
- LeetCode: https://leetcode.com/u/Drjaickal/
- HackerRank: https://www.hackerrank.com/avijitacharya
- Email: avijitcreation99@gmail.com

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more open-source projects.

---

# 📄 License

This project is licensed under the **MIT License**.
