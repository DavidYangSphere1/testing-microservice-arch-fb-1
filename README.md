This is an example project that tries to use microservice approach for Serverless Functions in Firebase.

Problem to Solve: A way to reduce or better manage dependencies and break monolithic server into individual, self-contained modules in Firebase.

Approach 1: Reorganizing individual folders to act as a "microservice" and export as a Serverless Firebase Function under the same project.

Advantages:
- Easy to implement, just need to reorganize folders and imports
- Follows similar architecture to what Firebase expects
- Very little learning curve for developers to get used to microservice architecture

Disadvantages:
- Dependencies will be shared between each "microservice" exports
- Tree-shaking is supposed to be handled by Firebase, but it may not be as what we wanted

Basic Folder structure in `functions`:
```bash
functions/
│
├── src/
│   ├── microservice1/
│   │   └── index.ts  # Microservice 1
│   ├── microservice2/
│   │   └── index.ts  # Microservice 2
│   └── apiGateway/
│       └── index.ts  # API Gateway
│
├── index.ts           # Main entry point for Firebase Functions
├── package.json
├── tsconfig.json
└── ...
```

Basic entry file - `functions/index.ts`:
```typescript
import * as microservice1 from './src/microservice1/index';
import * as microservice2 from './src/microservice2/index';
import * as apiGateway from './src/apiGateway/index';

export {
  microservice1,
  microservice2,
  apiGateway
};
```

How to run this project:
- Please change the `default` in `.firebaserc` to the desired firebase project.
- Please provide a `.env` inside of `functions` with these environment variables:
```ruby
# THIS_APP_FLIES
FB_PROJECT_ID="firebase-project-slug"
FB_CLIENT_EMAIL="firebase-email"
FB_PRIVATE_KEY="firebase-private-key"
FB_STORAGE_BUCKET="firebase-storage-bucket-url"
FB_DATABASE_URL="firebase-real-time-db-url" # NOT REQUIRED

# local
SERVICE_BASE_URL="http://localhost:5001/{firebase-project-slug}/us-central1"
```
- Make sure node version is `18`.
  - If using `nvm`, simply do `nvm use 18`
  - Otherwise, you're on your own.
- Install your dependencies: `npm install` or `yarn install`
- Lastly, do `cd functions` and `npm run serve`.