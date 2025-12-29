# 🐺 Pandaria Raid Ledger - Full-Stack Web Application

> **A production-grade serverless web application** for managing World of Warcraft guild raids, featuring real-time OAuth authentication, interactive minigames, Discord integration, and a custom WebGL-powered visual design.

---

## 📊 Project Overview

| Metric | Value |
|--------|-------|
| **Development Time** | ~4 days |
| **Total API Endpoints** | 40+ serverless functions |
| **Frontend Pages** | 23 unique routes |
| **Database Tables** | 15+ with RLS policies |
| **Lines of Code** | ~97,000 |
| **Tech Stack Complexity** | Full-stack, production-ready |

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | Modern UI library with hooks & concurrent features |
| **TypeScript** | Static typing for enhanced code reliability |
| **Vite** | Next-generation build tool with HMR |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router v6** | Client-side routing with nested routes |
| **WebGL/GLSL** | Custom shader-based animated backgrounds |

### Backend
| Technology | Purpose |
|------------|---------|
| **Netlify Functions** | Serverless Node.js API endpoints |
| **Supabase (PostgreSQL)** | Managed database with real-time capabilities |
| **Row Level Security (RLS)** | Database-level access control |
| **Battle.net OAuth 2.0** | Third-party authentication integration |

### DevOps & Infrastructure
| Technology | Purpose |
|------------|---------|
| **Netlify** | CI/CD, hosting, edge functions |
| **Railway** | Discord bot hosting |
| **Discord.js** | Bot framework for notifications |
| **Git** | Version control |

---

## 🎯 Key Features & Technical Implementations

### 1. OAuth 2.0 Authentication System
- **Battle.net Integration**: Full OAuth 2.0 Authorization Code Flow
- **CSRF Protection**: State parameter validation
- **Secure Sessions**: HTTP-only, Secure, SameSite cookies
- **WoW Profile Sync**: Automatic character import via Blizzard API
- **Role-Based Access Control**: Member → Admin → Owner hierarchy

```
Flow: User → Battle.net OAuth → Token Exchange → Profile Sync → Session Cookie
```

### 2. Real-Time Raid Management System
- **Event Scheduling**: Create and manage raid events with time zones
- **Role-Based Signups**: Tank, Healer, Melee DPS, Ranged DPS
- **Attendance Tracking**: Automatic attendance recording
- **Loot Distribution**: Track item drops with player history
- **Composition Planner**: Drag-and-drop raid composition builder

### 3. Interactive Minigames
- **Blackjack**: Full casino-style card game implementation
  - Multiplayer lobby system
  - Real-time game state management
  - Single-player and multiplayer modes
  - Dealer AI logic
- **Deathroll** *(Disabled for compliance)*: WoW-style gambling game

### 4. Discord Bot Integration
- **Webhook Architecture**: Real-time notifications via HTTP webhooks
- **Scheduled Announcements**: 2-hour and 10-minute raid reminders
- **Rich Embeds**: Formatted Discord messages with raid details
- **Command System**: Slash commands for announcement management

### 5. Screenshot Gallery System
- **Image Upload**: Admin-controlled gallery management
- **Lazy Loading**: Optimized performance with intersection observers
- **Modal Viewer**: Full-screen image viewing

### 6. Raid Team Management
- **Team Creation**: Organize players into permanent teams
- **Application System**: Users can apply to join teams
- **Role Management**: Raid Leader permissions
- **Member Tracking**: View team composition and attendance

### 7. Custom Announcement System
- **Scheduled Delivery**: Future-dated announcements
- **Multi-Channel Support**: Discord webhook integration
- **Admin Dashboard**: CRUD operations for announcements

---

## 🗄️ Database Architecture

### Core Tables
```
users              → Battle.net authenticated accounts
characters         → Linked WoW characters per user
raid_templates     → MoP raid definitions (MSV, HoF, ToES, ToT, SoO)
raid_events        → Scheduled raid instances
raid_signups       → Member signups with roles
raid_attendance    → Attendance records
loot_drops         → Item distribution history
audit_log          → Admin action tracking
```

### Extended Features
```
raid_teams         → Persistent team groups
team_members       → Team membership
team_applications  → Join requests
blackjack_games    → Game sessions
blackjack_players  → Player hands/state
bug_reports        → User feedback system
screenshots        → Gallery images
announcements      → Scheduled messages
saved_compositions → Raid comp templates
dashboard_settings → Customizable UI
```

### Security Implementation
- **27 RLS Policies** protecting all tables
- Role-based SELECT, INSERT, UPDATE, DELETE controls
- Service-key bypass for trusted server operations
- Audit logging for sensitive actions

---

## 🎨 UI/UX Design

### Custom Theme System
- **Horde-Inspired Color Palette**: Deep reds, blacks, and golds
- **Cannabis/Mystic Accents**: Greens and purples for unique branding
- **Custom Typography**: LifeCraft font for Warcraft authenticity

### Visual Effects
- **WebGL Animated Background**: Custom GLSL fragment shaders
  - Fractal Brownian Motion (fBm) for organic movement
  - GPU-accelerated rendering
- **Smoke Cursor Effects**: Interactive particle system
- **SmokyText Component**: Animated text reveals

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

---

## 📁 API Endpoints (40+ Functions)

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth-login` | GET | Initiate OAuth flow |
| `/auth-callback` | GET | Handle OAuth callback |
| `/auth-logout` | POST | Destroy session |
| `/auth-me` | GET | Get current user |

### Raid Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/raids` | GET/POST | List/create raids |
| `/raid-id` | GET/PUT/DELETE | Single raid operations |
| `/raid-signups` | GET/POST | Signup management |
| `/raid-loot` | GET/POST | Loot distribution |
| `/raid-templates` | GET | Available raid types |

### Team Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/raid-teams` | GET/POST | Team operations |
| `/raid-team-members` | GET/POST/DELETE | Member management |
| `/raid-team-applications` | GET/POST/PUT | Application workflow |

### Minigames
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/blackjack-games` | GET/POST | Game lobbies |
| `/blackjack-game-id` | GET/POST | Game actions (hit/stand/deal) |

### Utilities
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/characters` | GET/POST | Character sync |
| `/screenshots` | GET/POST/DELETE | Gallery management |
| `/announcements-*` | Various | Announcement CRUD |
| `/bug-reports` | GET/POST | Issue tracking |

---

## 🔒 Security Features

### Authentication Security
- ✅ OAuth 2.0 with PKCE-ready architecture
- ✅ HTTP-only session cookies
- ✅ Secure & SameSite cookie flags
- ✅ CSRF state parameter validation
- ✅ No secrets exposed to frontend

### Database Security
- ✅ Row Level Security on ALL tables
- ✅ Service key isolation (server-only)
- ✅ Input validation and sanitization
- ✅ SQL injection prevention via prepared statements

### Application Security
- ✅ Rate limiting on authentication endpoints
- ✅ Audit logging for admin actions
- ✅ Role-based access control (RBAC)
- ✅ Environment variable management

---

## 📈 Performance Optimizations

### Frontend
- **Code Splitting**: Lazy-loaded routes and components
- **Bundle Analysis**: Rollup visualizer for optimization
- **Image Optimization**: Lazy loading with Intersection Observer
- **Caching**: Local storage for user preferences

### Backend
- **Serverless Architecture**: Auto-scaling, pay-per-use
- **Connection Pooling**: Supabase managed connections
- **Efficient Queries**: Indexed database lookups
- **Webhook Architecture**: Async Discord notifications

---

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         NETLIFY EDGE                             │
├─────────────────────────────────────────────────────────────────┤
│  Static Assets (React)  │  Serverless Functions (Node.js)       │
│  - index.html           │  - /api/auth-*                        │
│  - JS/CSS bundles       │  - /api/raids                         │
│  - Fonts/Images         │  - /api/blackjack-*                   │
└────────────┬────────────┴──────────────────┬────────────────────┘
             │                               │
             │                               ▼
             │                    ┌──────────────────────┐
             │                    │    SUPABASE          │
             │                    │  ┌────────────────┐  │
             │                    │  │  PostgreSQL    │  │
             │                    │  │  + RLS         │  │
             │                    │  └────────────────┘  │
             │                    └──────────────────────┘
             │
             │    ┌──────────────────────────────────────┐
             │    │           RAILWAY                     │
             │    │  ┌────────────────────────────────┐  │
             └───►│  │  Discord Bot (Node.js)         │  │
                  │  │  - Webhook receiver            │  │
                  │  │  - Scheduled announcements     │  │
                  │  └────────────────────────────────┘  │
                  └──────────────────────────────────────┘
                               │
                               ▼
                  ┌────────────────────────┐
                  │    DISCORD SERVER      │
                  │  - Raid notifications  │
                  │  - @here mentions      │
                  └────────────────────────┘
```

---

## 💡 Technical Highlights

### 1. Custom WebGL Shader System
Built a GPU-accelerated animated background using raw GLSL shaders with Fractal Brownian Motion for organic, flowing visuals.

### 2. Full OAuth Implementation
Complete Battle.net OAuth 2.0 flow with token exchange, profile fetching, and automatic WoW character synchronization.

### 3. Real-Time State Management
Multiplayer Blackjack game with polling-based state synchronization across multiple clients.

### 4. Database-Level Security
27 Row Level Security policies ensuring data access is controlled at the PostgreSQL level, not just application code.

### 5. Microservices Architecture
Separate Discord bot service communicating with main application via authenticated webhooks.

---

## 📚 Project Documentation

| Document | Purpose |
|----------|---------|
| `README.md` | Project overview and setup |
| `SETUP.md` | Detailed installation guide |
| `QUICKSTART.md` | Fast-track deployment |
| `DEVELOPMENT.md` | Developer guidelines |
| `DISCORD_BOT_SETUP.md` | Bot configuration |
| `RAID_TEAMS_IMPLEMENTATION.md` | Team feature architecture |

---

## 🎓 Skills Demonstrated

### Programming Languages
- TypeScript/JavaScript (ES6+)
- SQL (PostgreSQL)
- GLSL (WebGL Shaders)
- HTML5/CSS3

### Frameworks & Libraries
- React 18 (Hooks, Context, Suspense)
- Node.js (Serverless)
- Tailwind CSS
- Discord.js

### Concepts & Patterns
- OAuth 2.0 Authentication Flows
- RESTful API Design
- Database Normalization
- Row Level Security
- State Management
- Component Architecture
- Responsive Design
- CI/CD Pipelines

### Tools & Platforms
- Git/GitHub
- VS Code
- Netlify
- Supabase
- Railway
- Battle.net Developer Portal

---

## 📞 Contact

**Built with AI-assisted development** - Demonstrating the ability to architect, implement, and ship full-stack applications using modern development workflows.

---

*This project showcases end-to-end software development capabilities: from database design and API architecture to frontend implementation and DevOps deployment.*
