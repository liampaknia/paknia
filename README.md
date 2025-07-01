حتماً! در ادامه محتوای کامل فایل `README.md` آماده‌ی استفاده را می‌بینی. کافیه اینو کپی کنی و توی ریشه پروژه‌ات با نام `README.md` قرار بدی:

---

````markdown
# 🧪 Front-End Challenge – Multi-Page Next.js App

یک اپلیکیشن ساده و مدرن برای نمایش، مشاهده و ایجاد پست‌ها با استفاده از Next.js، TailwindCSS و API عمومی. شامل قابلیت جستجو، فرم ارسال و جزئیات پست.

---

## 🚀 راه‌اندازی و اجرای پروژه

```bash
# 1. کلون کردن ریپازیتوری
git clone https://github.com/your-username/paknia.git
cd paknia

# 2. نصب پکیج‌ها
npm install

# 3. اجرای پروژه
npm run dev
```
````

> ⚠️ پیش‌نیازها:
>
> - نصب آخرین نسخه [Node.js](https://nodejs.org/) (نسخه 20 یا بالاتر)
> - نصب آخرین نسخه Microsoft C++ Redistributable (برای اجرای برخی وابستگی‌ها در Windows)

---

## ⚙️ اسکریپت‌ها

| دستور           | توضیح                     |
| --------------- | ------------------------- |
| `npm run dev`   | اجرای توسعه با Next.js    |
| `npm run build` | بیلد نهایی پروژه          |
| `npm start`     | اجرای پروژه بیلدشده       |
| `npm run lint`  | بررسی خطاهای کد با ESLint |

---

## 🧱 تکنولوژی‌های استفاده‌شده

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [nanoid](https://github.com/ai/nanoid)

---

## 🧩 ساختار پروژه

```
paknia/
├── app/                ← صفحات (Home, Details, Submission)
├── components/         ← کامپوننت‌های رابط کاربری
├── services/           ← ارتباط با API
├── types/              ← تایپ‌های TypeScript
├── public/             ← فایل‌های عمومی (آیکن‌ها، تصاویر)
├── styles/             ← فایل‌های CSS/Configهای Tailwind
└── README.md           ← مستندات پروژه
```

---

## ✨ امکانات پروژه

- مشاهده لیست پست‌ها
- جستجو بین عنوان پست‌ها (با دیبانس)
- مشاهده جزئیات هر پست در صفحه مجزا
- فرم ارسال پست جدید (با اعتبارسنجی)
- طراحی ریسپانسیو و موبایل‌فرندلی

---

## 🛠️ روش پیاده‌سازی

1. طراحی اولیه صفحات و چیدمان کلی با App Router
2. اتصال به API عمومی JSONPlaceholder و گرفتن داده‌ها
3. توسعه فرم ارسال پست با مدیریت وضعیت ارسال و خطا
4. پیاده‌سازی جستجو با دیبانس برای تجربه کاربری بهتر
5. افزودن استایل‌های مینیمال با Tailwind CSS

---

## ⚠️ چالش‌ها

- نیاز به مدیریت دستی اعتبارسنجی فرم برای تغییر رنگ فیلدها فقط پس از کلیک دکمه
- پیاده‌سازی دیبانس سفارشی برای کاهش درخواست‌ها هنگام جستجو

---

## 📸 دموی پروژه

> به‌زودی...

---

## 🧑‍💻 توسعه‌دهنده

- **نام**: Liam Paknia
- **GitHub**: [github.com/your-username](https://github.com/your-username)

---

## 📝 لایسنس

این پروژه تحت مجوز MIT منتشر شده است.

```

---

اگر بخوای:
- لینک دمو یا ویدئو اضافه کنم
- با `pnpm` یا `yarn` بنویسم
- یک نسخه انگلیسی هم داشته باشه

فقط بگو تا برات بسازم.
```
