import conf from "../conf/conf"
import{ID,Databases,Client} from 'appwrite'

export class IncomeService{
    Client = new Client()
    databases;

    constructor(){
        this.Client
        .setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwiteProjectId)

       this.databases= new Databases(this.Client)
    }

    async addIncome(name,amount,userId){
        try {
            return await this.databases.createDocument(
                conf.appwiteDatabaseId,
                conf.appwiteIncomeCollectionId,
                ID.unique(),
                {
                    name,
                    amount,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite service :: addIncome :: error" , error)
        }
    }

    async deleteIncome(id){
        try {
            return await this.databases.deleteDocument(
                conf.appwiteDatabaseId,
                conf.appwiteIncomeCollectionId,
                id
            )
        } catch (error) {
            console.log("appwrite service :: deleteIncome :: error" , error)
        }
    }

    async getCurrentIncome(id){
        try {
            return this.databases.getDocument(
                conf.appwiteDatabaseId,
                conf.appwiteIncomeCollectionId,
                id
            )
        } catch (error) {
            console.log("appwrite service :: getCurrentIncome :: error" , error)
        }
    }

    async getAllIncomes(){
        try {
            return await this.databases.listDocuments(
                conf.appwiteDatabaseId,
                conf.appwiteIncomeCollectionId
                
            )
        } catch (error) {
            console.log("appwrite service :: getAllIncome :: error" , error)
        }
    }
}

const incomeService = new IncomeService()
export default incomeService;