# Cross-Platform Enterprise Customer Portal

A micro-frontend banking portal demonstrating maximum code sharing between Web and Mobile (React Native), with platform-specific features, Module Federation, and a mock GraphQL backend.

---

## Features
- **Micro Frontends**: Independent Account Overview and Transaction History apps, built with React Native primitives, deployable separately.
- **Module Federation**: Host app dynamically loads MFs on web via Webpack Module Federation.
- **Cross-Platform**: All apps run on Web and Mobile (Expo/React Native + react-native-web).
- **Shared UI Kit**: Common Button and Card components used across all apps.
- **GraphQL API**: Mock backend with Customer, Account, and Transaction data.
- **Cross-MF Communication**: Event bus for decoupled communication between MFs.
- **Platform-Specific UI**: Download CSV (web) and Share Sheet (mobile) in Transaction History MF.

---

## Project Structure

```
Raftlab/
  packages/
    db.js                  # Mock data for GraphQL API
    graphql-api/           # Mock GraphQL server
      schema.graphql
      server.js
    host/                  # Host (container) app (Expo)
    mf-account-overview/   # Micro Frontend 1 (Account Overview, Expo)
    mf-transaction-history/# Micro Frontend 2 (Transaction History, Expo)
    ui-kit/                # Shared cross-platform UI components
```

---

## Getting Started

### 1. Install dependencies (from project root)
```sh
npm install
cd packages/graphql-api && npm install
cd ../host && npm install
cd ../mf-account-overview && npm install
cd ../mf-transaction-history && npm install
cd ../../..
```

### 2. Start the GraphQL API
```sh
cd packages/graphql-api
node server.js
```
- The API will run at `http://localhost:4000`.

### 3. Start Micro Frontends (Web, with Module Federation)
Open **two terminals**:
```sh
# Terminal 1: MF1 (Account Overview)
cd packages/mf-account-overview
npx expo start --web --port 3001

# Terminal 2: MF2 (Transaction History)
cd packages/mf-transaction-history
npx expo start --web --port 3002
```

### 4. Start the Host App (Web)
```sh
cd packages/host
npx expo start --web --port 3000
```
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- The host will dynamically load MF1 and MF2 as remotes.

### 5. Mobile (Optional)
- You can run each Expo app on Android/iOS using `npx expo start --android` or `--ios` (Module Federation is web-only, but all code is cross-platform).

---

## Key Architecture
- **Module Federation**: See `webpack.config.js` in each app for setup.
- **Shared UI Kit**: Import from `ui-kit/Button` and `ui-kit/Card`.
- **GraphQL Data**: Consumed via Apollo Client in each MF.
- **Event Bus**: Used for cross-MF communication (see host's main tab).
- **Platform-Specific UI**: Transaction History MF shows Download CSV (web) or Share (mobile).

---

## Customization & Extending
- Add more shared components to `ui-kit` for greater code reuse.
- Add more MFs by following the same Expo + Module Federation pattern.
- Replace the mock GraphQL API with a real backend as needed.

---

## License
MIT 