# Sanctum India

A digital pilgrimage platform for the twelve Jyotirlingas and the Shakti Peethas of
India — stories, history, architecture, festivals, and travel information for each site,
with mythology and documented history kept deliberately separate.

## Stack

- **Client:** Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router + TanStack Query + Zustand + Framer Motion
- **Server:** Express + TypeScript + Mongoose + Zod

## Running locally

```bash
# Server (http://localhost:4100) — spins up an in-memory MongoDB automatically, no setup needed
cd server
npm install
npm run dev

# Client (http://localhost:5190)
cd client
npm install
npm run dev
```

The server auto-seeds temple content on first run when using the in-memory database. To seed
a real MongoDB instance (`USE_MEMORY_MONGO=false` in `server/.env`), run `npm run seed` in `server/`.

`docker-compose.yml` at the repo root starts a local MongoDB container if you'd rather persist
data across restarts than use the zero-setup in-memory mode.

## Content status

- All 12 Jyotirlingas: full depth (story, history, architecture, festivals, travel).
- 53 Shakti Peethas seeded, grounded in Wikipedia's sourced "Shakta pithas" compilation (body
  part / Devi / Bhairava names are cited, not from memory). 10 major sites (Kamakhya, Kalighat,
  Tarapith, Jwalamukhi, Vimala/Puri, Mahalakshmi/Kolhapur, Ambaji, Hinglaj, Vishalakshi/Varanasi,
  Kamakshi/Kanchipuram, Mangala Gauri/Gaya) are in full narrative depth; the rest
  (`shaktiPeethasBatch2.ts`) are complete on every schema field but more concise in prose, with
  sourcing notes on any site where the underlying tradition itself varies across texts.

### Why 53 Shakti Peethas?

The traditional count is **not fixed** — different texts disagree on how many pieces of Sati's
body and ornaments fell as Vishnu's Sudarshana Chakra divided it:

| Count | Source |
| --- | --- |
| **51** | Tantra Chudamani; the most-cited modern scholarly list (what this project's core list follows — each site's story chapter literally reads "one of the fifty-one sites"). |
| 52 | Devi Bhagavata Purana and some *Pithanirnaya* lists. |
| 42 / 64 / 108 | Other regional and Tantric traditions. |

This project seeds the **51-site list**, plus **2 secondary sites** that are independently
documented as Shakti Peethas but whose classification is thinner or contested — so
`51 + 2 = 53`. The two extras carry their own badge (not "Shakti Peetha #N") and a `sourcesNote`
explaining the caveat:

- **Amarnath** ("Shiva Cave Shrine") — classified as the *Mahamaya Shakti Pitha* by some sources,
  but unusually among the peethas, no text names a body part or ties the cave to Sati's story;
  its living identity is entirely about Shiva.
- **Vaishno Devi** ("Devi Shrine") — its own core legends (Rama's promise, the pursuit by
  Bhairavnath) predate and outweigh its secondary, disputed Shakti Peetha reading (one tradition
  says Sati's skull fell here, another her right arm, others place the right arm elsewhere).

Note also that two sites appear in *both* collections by design — Srisailam (Mallikarjuna
Jyotirlinga + Bhramaramba Shakti Peetha) and Deoghar (Vaidyanath Jyotirlinga + Vaidyanath Shakti
Peetha) — since tradition holds them to be simultaneously both.
- Temple photography: 62 of 65 temples have real, licensed Wikimedia Commons images with
  photographer/license credit shown on both the explorer cards and the detail-page gallery
  (`server/src/seed/data/images.ts`, generated via the Commons API). 3 sites
  (Vishalakshi/Varanasi, Sugandha, Jogadya) had no usable match on Commons and show an honest
  "Image coming soon" placeholder rather than a mismatched photo. Images are served at large
  (2400px) web-optimized size, not literal 8K originals — most source photography on Commons
  isn't natively 8K, and full-resolution originals would be an unnecessary page-weight cost.

## Explicitly out of scope for this build

- No interactive map (deferred by design)
- No AI "Ask the Temple Guide" (deferred — planned as a later RAG-based feature)
- No user accounts / pilgrimage tracker yet (Phase 2 — models are scaffolded but not wired to any route)
