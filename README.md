# Flexiby UI

## Commands
   - `npm start` - shorthand for `npm serve:dev`.
   - `npm install` / `npm i` - install the latest packages according to `package.json`.
   - `npm ci` - install the latest packages according to `package-lock.json`.

### Build
   - `npm run build:dev` - produces a faster but highly unoptimized build. It is mainly used for development and debugging. It is not recommended for production environments as the build is not optimized.
   - `npm run build:integration` - produces build for integration environment. It is not recommended for local development as the build takes a lot of time. 
   - `npm run build:master` - produces build for production environments (staging, re7 and ope). It is not recommended for local development as the build takes a lot of time.
   - `npm run build:master:stats` - produces build for production environments (staging, re7 and ope). It is not recommended for local development as the build takes a lot of time.
   - `npm run build:ci` - produces build for ci environment. It is used for checking if the app is building. It is not recommended for production environments as the build is not optimized.
   - `npm run build:local` - produces build for local environment. It is used for testing the app with local backend. It is not recommended for production environments as the build is not optimized.

### Build Analyzer (`http://localhost:8080/`)
   - `npm run build:analyze:stats` - analyzes the stats produced by `npm run build:production:stats`.

### Serve (`http://localhost:4200/`)
   - `npm run serve:dev` - start local instance connected to local environment on port 8080. It uses the same build configuration as `npm run build:dev`.
   - `npm run serve:integration` - start local instance connected to integration environment. It uses the same build configuration as `npm run build:integration`.
   - `npm run serve:master` - start local instance connected to staging environment. It uses the same build configuration as `npm run build:master`.
   - `npm run serve:ci` - start local instance connected to integration environment. It uses the same build configuration as `npm run build:ci`.
   - `npm run serve:local` - start local instance connected to local environment on port `8080`. It uses the same build configuration as `npm run build:local`.

### Test
   - `npm run lint:app` - run the linting for both TypeScript and SCSS files.
   - `npm run lint:ts` - run the linting for TypeScript files.
   - `npm run lint:scss` - run the linting for SCSS files.
   - `npm run test` - run the unit tests in watch mode. It uses Chrome as test browser.
   - `npm run test:ci` - run the unit tests in ci mode. It uses headless Chrome as test browser.
   - `npm run e2e` - run the e2e test.
