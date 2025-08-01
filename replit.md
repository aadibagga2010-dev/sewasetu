# Viksit Bharat - Digital India Platform

## Overview

SewaSetu (formerly Viksit Bharat) is a comprehensive full-stack web application designed to bridge the technology gap across different communities in India. The platform provides tailored digital solutions for shopkeepers, elderly citizens, farmers, workers, and women, promoting inclusive digital transformation for a developed India. The platform features complete bilingual support (English/Hindi) across all pages and functionalities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Internationalization**: react-i18next with English and Hindi language support
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Monorepo Structure
- **Client**: React frontend application (`/client`)
- **Server**: Express.js backend API (`/server`)
- **Shared**: Common TypeScript types and schemas (`/shared`)

## Key Components

### Authentication & User Management
- User schema with username/password authentication
- Drizzle ORM schema definitions with Zod validation
- In-memory storage implementation with interface for easy database migration
- Session-based authentication ready for implementation

### UI Component System
- Comprehensive shadcn/ui component library
- Custom Viksit Bharat branding with orange, blue, and green color schemes
- Responsive design with mobile-first approach
- Dark mode support built into the design system

### Internationalization
- Complete bilingual support (English/Hindi)
- Language switcher in header navigation
- Comprehensive localized content across ALL pages including:
  - Home page (hero section, Viksit Bharat content, categories, contact form)
  - Shopkeepers page (UPI benefits, setup guide, success stories, resources)
  - Elderly page (health services, digital literacy, government benefits, emergency contacts)
  - Farmers page (MSP prices, weather services, farming techniques, government schemes)
  - Workers page (skill training, job opportunities, government employment schemes)
  - Women page (health & hygiene, skill development, safety resources, government schemes)
- Translation infrastructure using organized translation keys for maintainable localization
- Real-time language switching with no page reload required

### Category-Specific Pages
- **Shopkeepers**: UPI payment integration, digital billing solutions
- **Elderly**: Simplified technology training, healthcare digital services
- **Farmers**: Weather updates, market prices, agricultural tools
- **Workers**: Skills training, job portals, digital literacy
- **Women**: Digital empowerment, entrepreneurship, safety tools

## Data Flow

### Client-Server Communication
- RESTful API architecture with `/api` prefix for all backend routes
- TanStack React Query for efficient data fetching and caching
- TypeScript-first approach with shared type definitions
- Error handling with custom error boundaries

### Database Schema
- PostgreSQL with Drizzle ORM for type-safe database operations
- User table with serial ID, unique username, and password fields
- Schema validation using drizzle-zod for runtime type checking
- Migration support with Drizzle Kit

### State Management
- Server state managed by React Query with optimistic updates
- Local component state using React hooks
- Form state management ready for react-hook-form integration

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React 18, React DOM, TypeScript)
- Express.js with middleware for JSON/URL encoding
- Drizzle ORM with PostgreSQL adapter

### UI/UX Libraries
- Radix UI for accessible component primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- react-i18next for internationalization

### Development Tools
- Vite for fast development builds
- TypeScript for type safety
- ESBuild for production bundling
- Replit-specific development enhancements

### Database & Storage
- Neon Database (serverless PostgreSQL)
- connect-pg-simple for session storage
- Drizzle Kit for database migrations

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend
- tsx for TypeScript execution in development
- Middleware mode integration between Vite and Express
- Replit-specific development tooling integration

### Production Build
- Frontend: Vite build to `dist/public`
- Backend: ESBuild bundling to `dist/index.js`
- Static file serving from Express in production
- Environment-based configuration

### Database Configuration
- Environment variable-based database URL configuration
- PostgreSQL dialect with connection pooling
- Migration system for schema updates
- Development-to-production database migration path

### Key Architectural Decisions

1. **Monorepo Structure**: Enables shared TypeScript types and unified development workflow
2. **Drizzle ORM**: Provides type-safe database operations with excellent TypeScript integration
3. **Radix UI + Tailwind**: Combines accessibility with customizable styling
4. **TanStack React Query**: Manages server state efficiently with caching and synchronization
5. **Wouter Routing**: Lightweight alternative to React Router for simple navigation needs
6. **Internationalization**: Built-in support for multiple languages to serve diverse Indian communities
7. **Component-First Architecture**: Reusable UI components with consistent design system
8. **TypeScript-First**: End-to-end type safety from database to frontend components