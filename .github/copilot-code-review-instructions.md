# Copilot Code Review Instructions

You are reviewing code for the **GridLoom** project. Please enforce the following architectural rules and coding standards during your review:

## 1. Clean Architecture Enforcement

- **Domain Layer (`apps/api/src/domain/`)**: Must ONLY contain pure TypeScript. Reject any PR that imports Express, Prisma, HTTP libraries, or framework-specific code into this directory.
- **Use Cases (`apps/api/src/use-cases/`)**: Must orchestrate business logic using Interfaces. Reject PRs that execute raw database queries or directly manipulate HTTP Request/Response objects here.
- **Dependency Inversion**: Ensure that higher-level modules (Use Cases) depend on abstractions (Interfaces), not concrete implementations (Prisma Repositories).

## 2. Frontend (Next.js & Tailwind)

- Ensure Tailwind utility classes are used correctly. Suggest combining repetitive classes into standard React components.
- For Next.js App Router (`apps/web/app/`), ensure data fetching follows modern Server Component paradigms where appropriate, minimizing `"use client"` directives unless state or hooks are needed.

## 3. General Best Practices

- Look for potential memory leaks in Socket.io event listeners.
- Flag any hardcoded secrets, tokens, or credentials (they must use `.env`).
- Check for proper TypeScript typing; reject `any` types unless explicitly justified.
