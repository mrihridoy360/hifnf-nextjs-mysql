# রিমোট MySQL সেটআপ গাইড

এই গাইডটি আপনাকে Vercel-এ ডেপ্লয়মেন্টের জন্য রিমোট MySQL ডাটাবেস সেটআপ করতে সাহায্য করবে।

## রিমোট MySQL প্রোভাইডার অপশন

আপনি নিম্নলিখিত প্রোভাইডারদের যেকোনো একটি ব্যবহার করতে পারেন:

1. **PlanetScale** - https://planetscale.com (ফ্রি টিয়ার আছে)
2. **Railway** - https://railway.app (ফ্রি টিয়ার আছে)
3. **Amazon RDS** - https://aws.amazon.com/rds/mysql/
4. **Google Cloud SQL** - https://cloud.google.com/sql/docs/mysql
5. **DigitalOcean** - https://www.digitalocean.com/products/managed-databases
6. **Aiven** - https://aiven.io/mysql

## রিমোট MySQL সেটআপ করার পদক্ষেপ

### 1. ডাটাবেস তৈরি করুন

আপনার পছন্দের প্রোভাইডারে একটি MySQL ডাটাবেস তৈরি করুন। নিশ্চিত করুন যে:

- MySQL 5.7 বা তার পরবর্তী ভার্সন ব্যবহার করছেন
- ডাটাবেস পাবলিক ইন্টারনেট থেকে অ্যাক্সেসযোগ্য
- আপনার কাছে ডাটাবেস হোস্ট, পোর্ট, ইউজারনেম, পাসওয়ার্ড এবং ডাটাবেস নাম আছে

### 2. ফায়ারওয়াল কনফিগার করুন

নিশ্চিত করুন যে আপনার ডাটাবেস সার্ভার Vercel-এর IP রেঞ্জ থেকে কানেকশন অনুমতি দেয়। কিছু প্রোভাইডার (যেমন PlanetScale) সব IP থেকে কানেকশন অনুমতি দেয়, অন্যদের ক্ষেত্রে আপনাকে ম্যানুয়ালি কনফিগার করতে হবে।

### 3. ডাটাবেস স্কিমা সেটআপ করুন

আপনার ডাটাবেস স্কিমা সেটআপ করতে, আপনার লোকাল মেশিন থেকে রিমোট ডাটাবেসে কানেক্ট করুন এবং সেটআপ স্ক্রিপ্ট চালান:

```bash
# .env.local ফাইল আপডেট করুন রিমোট ডাটাবেস তথ্য দিয়ে
# তারপর সেটআপ স্ক্রিপ্ট চালান
npm run setup
```

### 4. .env.local ফাইল আপডেট করুন

আপনার `.env.local` ফাইল আপডেট করুন রিমোট MySQL কানেকশন তথ্য দিয়ে:

```
# Database Configuration
MYSQL_HOST=your-remote-mysql-host.com
MYSQL_PORT=3306
MYSQL_USER=your-mysql-username
MYSQL_PASSWORD=your-mysql-password
MYSQL_DATABASE=your-database-name

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=this-is-a-secret-key-for-facebook-clone-app

# Base URL for API calls
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Upload Directory
UPLOAD_DIR=public/uploads
```

### 5. Vercel এনভায়রনমেন্ট ভেরিয়েবল সেটআপ করুন

Vercel ডেপ্লয়মেন্টের সময়, নিশ্চিত করুন যে আপনি একই ডাটাবেস কানেকশন তথ্য Vercel এনভায়রনমেন্ট ভেরিয়েবল হিসেবে সেট করেছেন।

## টেস্টিং

রিমোট ডাটাবেস কানেকশন টেস্ট করতে:

1. আপনার `.env.local` ফাইল আপডেট করুন
2. অ্যাপ্লিকেশন চালান: `npm run dev`
3. লগইন করার চেষ্টা করুন এবং নিশ্চিত করুন যে ডাটাবেস কানেকশন কাজ করছে

## সমস্যা সমাধান

### কানেকশন এরর

যদি আপনি কানেকশন এরর দেখেন:

1. আপনার ডাটাবেস হোস্ট, ইউজারনেম, পাসওয়ার্ড এবং ডাটাবেস নাম সঠিক কিনা চেক করুন
2. আপনার ডাটাবেস সার্ভার পাবলিক ইন্টারনেট থেকে অ্যাক্সেসযোগ্য কিনা নিশ্চিত করুন
3. ফায়ারওয়াল সেটিংস চেক করুন
4. ডাটাবেস সার্ভার চালু আছে কিনা নিশ্চিত করুন

### SSL সমস্যা

কিছু রিমোট ডাটাবেস প্রোভাইডার SSL কানেকশন প্রয়োজন করে। এক্ষেত্রে, আপনাকে আপনার ডাটাবেস কানেকশন কোডে SSL কনফিগারেশন যোগ করতে হবে।

## PlanetScale ব্যবহার করার জন্য বিশেষ নির্দেশনা

PlanetScale একটি জনপ্রিয় ক্লাউড MySQL প্রোভাইডার যা Vercel-এর সাথে ভালভাবে কাজ করে:

1. PlanetScale-এ সাইন আপ করুন
2. একটি নতুন ডাটাবেস তৈরি করুন
3. কানেকশন স্ট্রিং পান
4. আপনার `.env.local` এবং Vercel এনভায়রনমেন্ট ভেরিয়েবল আপডেট করুন

PlanetScale-এর জন্য, আপনার `src/lib/db.ts` ফাইলে SSL কনফিগারেশন যোগ করতে হবে:

```typescript
import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true
  }
});

// ... rest of the file
```
