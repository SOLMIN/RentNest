# RentNest

Full-stack Pune rental marketplace for furniture, electronics, utensils, appliances, and event supplies.

## Stack

- React + Vite frontend
- Node.js + Express backend
- MongoDB through Mongoose models
- Admin portal for inventory, bookings, categories, and business settings

## Run Locally

```bash
npm install
cp .env.example .env
npm run dev
```

The frontend runs at `http://127.0.0.1:5173` and the API runs at `http://127.0.0.1:5001`.

Set `MONGODB_URI` in `.env` to your local or cloud MongoDB database. When MongoDB is unavailable and `ALLOW_MEMORY_FALLBACK=true`, the backend serves seeded demo data from memory so the app can still be reviewed.

## Useful Commands

```bash
npm run seed
npm run build
npm start
```

## Deploy Live On Render

This project can deploy as one web service: Express serves the API and the built React app.

1. Push this folder to GitHub.
2. In Render, create a new `Web Service` from that repository.
3. Use:

```bash
Build Command: npm install && npm run build
Start Command: npm start
```

4. Add environment variables:

```bash
NODE_ENV=production
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/rentnest?retryWrites=true&w=majority
ALLOW_MEMORY_FALLBACK=false
CLIENT_ORIGIN=https://your-render-app-name.onrender.com
```

5. In MongoDB Atlas, allow the deployment to connect under `Network Access`. For quick testing use `0.0.0.0/0`; for production, use a static outbound IP from your hosting provider if available.

6. After deploy, run the seed command once from Render Shell:

```bash
npm run seed
```

## Included Workflows

- Monthly-price customer marketplace search, filters, item details, and booking request flow
- Featured carousel, rental promise cards, bundle showcases, and premium product cards
- Pune locality targeting for Hinjewadi Phase 1, Hinjewadi Phase 2, Hinjewadi Phase 3, Wakad, Aundh, and Baner
- Owner listing form with admin review workflow for people who want to rent out their own products
- Admin overview with operational metrics
- Admin inventory management with create, update, status, and delete actions
- Admin booking status management
- Category management
- Business logic settings for fees, deposits, rental limits, delivery, and verification
