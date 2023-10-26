import config from "../config/config";
import { Client, Databases, Models, Query } from "appwrite";

class Service {
  private client: Client;
  private databases: Databases;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImg,
    status,
    userId,
  }: CreatePost): Promise<Models.Document> {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImg, status, userId }
      );
    } catch (error: any) {
      throw error;
    }
  }

  async updatePost(
    slug: string,
    { title, content, featuredImg, status }: UpdatePost
  ): Promise<Models.Document> {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImg, status }
      );
    } catch (error: any) {
      throw error;
    }
  }

  async deletePost(slug: string): Promise<boolean> {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error: any) {
      throw error;
    }
  }

  async getPost(slug: string): Promise<Models.Document> {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error: any) {
      throw error;
    }
  }

  async getAllPost(
    quries: string[] = [Query.equal("status", "active")]
  ): Promise<Models.DocumentList<Models.Document>> {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        quries
      );
    } catch (error: any) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
