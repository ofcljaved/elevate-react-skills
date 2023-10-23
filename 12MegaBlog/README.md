# React + TypeScript | Mega Blog

## Setting Up Your AppWrite Account

When setting up your project in Appwrite, it's important not to refresh the page. Doing so can lead to internal errors. Follow these steps to configure your Appwrite project:

1. Create a new project in Appwrite.

2. Once your project is created, proceed to create a database within it.

3. In your database, create a collection and define the necessary attributes.

4. Ensure you add an index to your collection.

5. If required, create a bucket for your project.

## Environment Configuration

To manage your environment variables in your React project, you should create an `.env` file in the root directory. When working with Vite, ensure that your environment variables start with `VITE_` and access them as follows:

```ts
import.meta.env.VITE_APPWRITE_URL;
```

### Using a Config Directory

For production applications, it's a common practice to use a separate config folder to securely manage environment variables. This helps prevent application crashes due to missing or incorrect configurations. Here's how you can set up a configuration directory:

1. Create a `config` folder in your project directory.

2. Inside the `config` folder, create a `config.ts` file.

3. In the `config.ts` file, define an object that accesses the environment variables and exports them. You can use the `String` function to ensure the variables are treated as strings, as environment variables are typically stored as strings.

```ts
const config: EnvType = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
```

The use of the `String` function is a precaution to handle the case where an environment variable unexpectedly contains a data type other than a string.
