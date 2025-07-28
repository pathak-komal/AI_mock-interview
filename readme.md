# 🎙️ AI Mock Interview

A full-stack web application for conducting AI-powered mock interviews.  
Built with **Next.js 14 App Router**, **TypeScript**, **Clerk** for authentication, and **Firebase Firestore** for data storage.

---

## 📌 Features

✅ Secure sign-up and login with **Clerk**  
✅ Personalized dashboard to manage your mock interviews  
✅ AI-generated interview questions and answers  
✅ Stores interview history in **Firestore**  
✅ Clean, modern UI with **Tailwind CSS**

---

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Auth:** Clerk
- **Backend:** Server Actions + Firebase Firestore
- **Styling:** Tailwind CSS, Shadcn/UI (optional)
- **Deployment:** Vercel

---

## 📂 Project Structure

```
/app              # Next.js App Router pages
/components       # Reusable React components
/lib              # Firebase config, helpers
/styles           # Global styles
/public           # Static assets
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/pathak-komal/AI_mock-interview.git
cd AI_mock-interview
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in action.

---

## ✨ Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Lint the code |

---

## 🔒 Authentication

- Uses **Clerk** for user management.
- Protects routes with **Server Components** & `currentUser`.

---

## 🗃️ Database

- Uses **Firebase Firestore**.
- Interview data is stored in collections by user ID.
- Example Firestore structure:
  ```
  interviews/
    {userId}/
      {interviewId}/
        - question
        - answer
        - timestamp
  ```

---

## 📦 Deployment

This app is optimized for deployment on **Vercel**:
- Connect your GitHub repo
- Add your `.env` secrets in Vercel Dashboard
- Deploy!

---

## 🙌 Contributing

PRs are welcome!  
1. Fork the project  
2. Create your feature branch: `git checkout -b my-feature`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin my-feature`  
5. Open a Pull Request

---

## 📄 License

MIT License.  
Feel free to use and modify it!

---

## 👩‍💻 Author

Made with ❤️ by [@pathak-komal](https://github.com/pathak-komal)

