
import conf from "../conf/conf";
import { Client, Account } from "appwrite";

export class AuthService {
    Client = new Client()
    account;
    constructor() {
        this.Client
        .setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwiteProjectId)

        this.account = new Account(this.Client)
    }

    async getCurrentAccount(){
       
        
        try {
           return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getCurrrentUser :: error" , error)
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            
        }catch (error) {
            console.log("appwrite service :: logout :: error" , error)
        }
    }

    async loginWithGoogle() {
        try {
        return this.account.createOAuth2Session(
            'google',
            'https://money-manager-three-eosin.vercel.app/',
            'https://money-manager-three-eosin.vercel.app/auth'
        );
        // return this.account.createOAuth2Session(
        //   'google',
        //   'http://192.168.1.6:5173',
        //   'http://192.168.1.6:5173/auth'
        // );
        // return this.account.createOAuth2Session(
        //     "google",
        //     "https://money-manager-six-xi.vercel.app/",
        //     "https://money-manager-six-xi.vercel.app/auth"
        // );
        } catch (error) {
        console.log("ERROR WHILE DOING GOOGLE AUTH", error);
        }
    }


}

const authservice = new AuthService();
export default authservice;
