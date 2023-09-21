# Messenger Clone with NEXT13 , Tailwind, Next, Prisma, Mongo, NextAuth, Pusher & Vercel

## Create Next App

`npx create-next-app ./ --typescript --tailwind`

## Dependencies

- [tailwindcss](https://tailwindcss.com/) - npm install tailwindcss (style)
- [@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms) - npm install @tailwindcss/forms (style plugin for forms)
  `require('@tailwindcss/forms')({ strategy: 'class' }),`
- [react-icons](https://react-icons.github.io/react-icons/) - npm install react-icons (icons)
- [react-hook-form](https://react-hook-form.com/) - npm install react-hook-form (hook form)
- [clsx](https://www.npmjs.com/package/clsx) - npm install clsx (adding logic className)
- [prisma](https://www.prisma.io/) - npm install prisma (ORM)
  `npx prisma init`
  `npx prisma db push`
- [@prisma/client](https://www.npmjs.com/package/@prisma/client) - npm install @prisma/client (ORM for client)
- [bcrypt](https://www.npmjs.com/package/bcrypt) - npm install bcrypt (hashing password)
- [@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt) - npm install -D @types/bcrypt
- [next-auth](https://next-auth.js.org/) - npm install next-auth (authentication)
- [@next-auth/prisma-adapter](https://www.npmjs.com/package/@next-auth/prisma-adapter) - npm install @next-auth/prisma-adapter (adapter prisma for authentication)
- [axios](https://axios-http.com/docs/intro) - npm install axios (call api)
- [react-hot-toast](https://react-hot-toast.com/docs) - npm install react-hot-toast (for notifications)
- [next-superjson-plugin](https://www.npmjs.com/package/next-superjson-plugin) - npm install next-superjson-plugin (Automatically transform your Next.js Pages to use SuperJSON with SWC)

## Config for next.config.js

```javascript
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [['next-superjson-plugin', {}]],
  },
}
```

## Domain Image for github and google

```javascript
images: {
  domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'avatars.githubusercontent.com'],
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
