import config from "../config/config";
import { Client, Account, ID, Models } from "appwrite";

class AuthService {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({
    email,
    password,
    name,
  }: CreateUserAccount): Promise<Models.Session> {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount): Promise<Models.Session> {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<Models.User<Models.Preferences>> {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<{}> {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
