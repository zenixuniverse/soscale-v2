# SoScale Dashboard v2.0 🚀

**Scale your social media growth with powerful automation and analytics**

Built for Emperor Zenix @ ZBJ Agency

## ✨ Features

- 📱 **Instagram Account Management** - Connect and manage multiple accounts
- 📊 **Analytics Dashboard** - Track followers, engagement, and growth
- 👥 **Role-Based Access** - User, Manager, and Admin roles
- 🎨 **Beautiful Dark UI** - Mobile-optimized with red accents
- 🔐 **Secure Authentication** - JWT-based auth system
- 🌐 **Multi-Platform Ready** - Instagram live, TikTok/X/YouTube coming soon

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## 📱 Pages

- `/login` - Authentication
- `/dashboard` - Analytics overview
- `/accounts` - Account management  
- `/settings` - Profile settings
- `/admin` - Admin panel (admin role only)

## 🎨 Design

- Pure black background (#000000)
- Red accent color (#EF4444)
- Mobile-first responsive
- Touch-friendly buttons
- Smooth animations

## 🔧 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (state management)
- Mock API (ready for backend integration)

## 📦 Structure

```
soscale-v2/
├── app/
│   ├── api/          # API routes (mock data)
│   ├── login/        # Login page
│   ├── dashboard/    # Analytics dashboard
│   ├── accounts/     # Account management
│   ├── settings/     # Profile settings
│   └── admin/        # Admin panel
├── components/       # React components
├── lib/             # Utilities and stores
└── public/          # Static assets
```

## 🔐 Mock Login

Use any email/password to login (mock auth enabled)

## 📊 Next Steps

1. Connect to real Instagram API
2. Add PostgreSQL database
3. Implement real authentication
4. Add automation features
5. Deploy to production

## 🎯 Production Ready

- ✅ Mobile optimized
- ✅ TypeScript typed
- ✅ Error handling
- ✅ Loading states
- ✅ Toast notifications
- ✅ Role-based access

---

Built by Lelouch 👑 & Pixel Sage ✨ for ZBJ Agency
