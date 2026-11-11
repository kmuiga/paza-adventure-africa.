# Paza Adventure Africa — cinematic safari website

Next.js 15 / React 19 / React Three Fiber / GSAP ScrollTrigger / Lenis / Tailwind. Five **user-supplied** destination videos have been transcoded to short, web-ready 720–1280px clips with poster images.

## Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set real WhatsApp, email, phone and address values in `.env.local`. Never publish placeholder contact details. Deploy to Vercel by importing the repository and setting the same environment variables.

## Before production

- Replace all placeholders with verified Paza assets, guide portrait, vehicle photos/GLB, authentic reviews, prices and KATO membership proof.
- Review usage rights for every supplied video, especially Sheldrick footage; uploading a video does not establish commercial redistribution rights.
- Add exact existing-site URL mappings in `next.config.ts` redirects after auditing the current live site.
- Verify all service features and airport pickup details for each booked package.
- Connect a transactional quote-form backend if you need submissions stored/sent automatically. Current form opens WhatsApp or the email client.
- Test video and WebGL performance on mid-range Android/iPhone devices; fallback is CSS gradient + posters with all content available as HTML.
- Current videos are trimmed to 8 seconds to prioritize fast loads. Original uploads are not included in this deployable package.
- `public/posters/` contains stills extracted from the uploaded footage.
