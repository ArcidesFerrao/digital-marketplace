# 🛒 Innovante Digital Marketplace

**Innovante Digital Marketplace** is a modern platform for discovering, buying, and selling digital products like templates, tools, and learning resources. Built with **Next.js**, **Prisma**, and **TypeScript**, it's designed for speed, scalability, and great developer experience.

> 🔗 Live Demo: [https://your-vercel-url.com](https://your-vercel-url.com)

---

## 🚀 Features

- ⚡️ Fast and modern UI built with Next.js App Router
- 🔐 User authentication via NextAuth.js
- 🧾 Seller and buyer flows
- 💳 Virtual transaction system with balance tracking
- 🗂 Upload and manage digital products
- 📥 Purchase history and downloads
- 🛠 Admin-ready structure
- 🌐 Deployed to Vercel

---

## 🧱 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL via Prisma
- **Auth**: NextAuth.js
- **Storage**: UploadThing or similar (coming soon)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **ORM**: Prisma
- **Validation**: Zod

---

## 🛠 Getting Started Locally

```bash
git clone https://github.com/yourusername/digital-marketplace.git
cd digital-marketplace
npm install
```

### 1. Setup Environment Variables

Create a `.env.local` file and add the following:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXTAUTH_SECRET=yourSecret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=yourGoogleClientID
GOOGLE_CLIENT_SECRET=yourGoogleClientSecret
```

> Make sure to also configure UploadThing or Stripe if integrated.

### 2. Prisma Setup

```bash
npx prisma generate
npx prisma db push  # or migrate if needed
```

### 3. Run the App

```bash
npm run dev
```

---

## 🧪 Build for Production

```bash
npm run build
```

---

## 🧑‍💻 Contributing

Pull requests are welcome! If you'd like to suggest a feature or report a bug, feel free to open an issue.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Credits

Created by Arcides Ferrão  
Part of the **Innovante** ecosystem.
