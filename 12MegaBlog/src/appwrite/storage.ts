import config from "../config/config";
import { Client, Storage, Models, ID } from "appwrite";

class StorageService {
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

  getFilePreview(fileId: string): string {
    return this.storage
      .getFilePreview(config.appwriteBucketId, fileId)
      .toString();
  }
}

const storageService = new StorageService();

export default storageService;
