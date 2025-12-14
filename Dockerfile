FROM oven/bun:slim AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies for build)
RUN bun install

# Copy source files
COPY . .

# Build the application
RUN bun run build

FROM oven/bun:slim

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["bun", "build/index.js"]