# SoScale Dashboard v2.0 - Deployment Guide

## Quick Deploy to GitHub + Netlify

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `soscale-v2`
3. Description: `SoScale Dashboard v2.0 - Instagram Growth Platform`
4. Public repository
5. **DO NOT** initialize with README (we have code already)
6. Click "Create repository"

### Step 2: Push Code to GitHub

Run these commands:

```bash
cd /root/clawd/soscale-v2

# Add GitHub remote
git remote add origin https://github.com/ZBJAgency/soscale-v2.git

# Push to GitHub
git push -u origin main
```

If prompted for credentials, use GitHub Personal Access Token (not password).

### Step 3: Deploy to Netlify

#### Option A: Auto-Deploy from GitHub

1. Go to https://app.netlify.com/start
2. Click "Import from Git"
3. Choose "GitHub"
4. Select `ZBJAgency/soscale-v2`
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

#### Option B: Manual Deploy

1. Go to https://app.netlify.com/drop
2. Drag the `/root/clawd/soscale-v2/` folder (after running `npm run build`)
3. Done!

### Step 4: Configure Netlify

After deployment, add these settings:

**Build Settings:**
- Node version: 22
- Build command: `npm run build`
- Publish directory: `.next`

**Environment Variables:** (none needed for now)

### Step 5: Get Your URL

Netlify will give you a URL like:
- `https://soscale-v2.netlify.app`

You can customize it or add a custom domain.

---

## 📁 Repository Structure

```
soscale-v2/
├── app/                  # Next.js pages
│   ├── api/             # API routes
│   ├── login/           # Login page
│   ├── dashboard/       # Dashboard
│   ├── accounts/        # Account management
│   ├── settings/        # Settings
│   └── admin/           # Admin panel
├── components/          # React components
├── lib/                # Utilities
├── public/             # Static assets
├── netlify.toml        # Netlify config
├── package.json        # Dependencies
└── README.md           # Documentation
```

## 🔐 Features

- ✅ Instagram account management
- ✅ Analytics dashboard
- ✅ Role-based access (user/manager/admin)
- ✅ Mobile-optimized
- ✅ Dark theme with red accents
- ✅ Production-ready

## 🚀 Currently Running

**Live Preview (Temporary):**
https://stylish-award-reads-tablets.trycloudflare.com

*(Cloudflare tunnel - may expire)*

---

**Built by Lelouch 🧧 & Pixel Sage ✨ for Emperor Zenix @ ZBJ Agency** 👑
