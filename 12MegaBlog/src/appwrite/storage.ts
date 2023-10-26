import config from "../config/config";
import { Client, Storage, Models, ID } from "appwrite";

class Service {
  private client: Client;
  private storage: Storage;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file: File): Promise<Models.File> {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error: any) {
      throw error;
    }
  }

  async deleteFile(fileId: string): Promise<boolean> {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error: any) {
      throw error;
    }
  }

  getFilePreview(fileId: string): URL {
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
