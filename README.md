## 🏛️ This L1 Data Flow Diagram, represents how the application was engineeered.
### It gives brief overview of the main systems used and how data flows through the system.
![Level 1 DFD_formphotoeditor com](https://github.com/user-attachments/assets/8a2dacb3-c11a-4966-8e28-dc6571c950cc)

## 🚀 Features

- ✅ PDF Upload and Ingestion via UploadThing
- ✅ Semantic Chunking and Embedding via OpenAI + Pinecone
- ✅ Summarization using GPT-3.5 or GPT-4 (via LangChain)
- ✅ Stripe integration for premium access
- ✅ Auth with Kinde Identity Provider
- ✅ Full-stack TypeScript + tRPC
- ✅ pnpm for dependency management

---

## ⚙️ Tech Stack

| Layer           | Stack / Service                         |
|-----------------|------------------------------------------|
| **Frontend**     | Web UI (not included here)              |
| **Backend**      | Node.js + tRPC + TypeScript             |
| **Job Queue**    | BullMQ / SQS (optional setup)           |
| **AI Services**  | OpenAI GPT + Embeddings                 |
| **Vector Store** | Pinecone                                |
| **Auth**         | Kinde                                   |
| **File Upload**  | UploadThing (S3 Wrapper)                |
| **Payments**     | Stripe                                  |
| **Database**     | PostgreSQL (via Prisma)                 |

---

## 🛠️ Setting up

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/studyy-buddy-ai.git
cd studyy-buddy-ai
````

---

### 2. Install Dependencies

Install [pnpm](https://pnpm.io) if you don't already have it:

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

---

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following values:

```env
# --- OpenAI & Pinecone ---
OPENAI_API_KEY=your_openai_key
PINECONE_API_KEY=your_pinecone_key

# --- Stripe ---
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

# --- Database (PostgreSQL) ---
DATABASE_URL=postgresql://username:password@host:port/dbname

# --- UploadThing ---
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# --- Kinde Auth ---
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```

Make sure to replace all placeholder values with real ones from your service provider dashboards.

---

### 4. Setup the Database (Optional: if using Prisma)

If you are using Prisma with PostgreSQL:

```bash
pnpm prisma generate
pnpm prisma db push
```

Or if you need to migrate:

```bash
pnpm prisma migrate dev --name init
```

---

### 5. Start the Development Server

```bash
pnpm dev
```

Visit: [http://localhost:3000](http://localhost:3000)

