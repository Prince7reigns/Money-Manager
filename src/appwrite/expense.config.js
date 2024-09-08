import conf from "../conf/conf"
import{ID,Databases,Client} from 'appwrite'

export class ExpenseService{
    Client = new Client()
    databases;

    constructor(){
        this.Client
        .setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwiteProjectId)
        this.databases=new Databases(this.Client)
    }

    async addExpense(name,amount,userId){
        try {
            return await this.databases.createDocument(
                conf.appwiteDatabaseId,
                conf.appwiteExpenseCollectionId,
                ID.unique(),
                {
                    name,
                    amount,
                    userId
                }

            )
        } catch (error) {
            console.log("appwrite service :: addExpense :: error" , error)
        }
    }

    async deleteExpense(id){
        try {
            return await this.databases.deleteDocument(
                conf.appwiteDatabaseId,
                conf.appwiteExpenseCollectionId,
                id
            )
        } catch (error) {
            console.log("appwrite service :: deleteExpense :: error" , error) 
        }
    }

    async getCurrentExpense({id}){
        try {
            return await this.databases.getDocument(
                conf.appwiteDatabaseId,
                conf.appwiteExpenseCollectionId,
                id
            )
        } catch (error) {
            console.log("appwrite service :: getCurrentExpense :: error" , error) 
        }
    }

    async getAllExpenses(){
        try {
            return await this.databases.listDocuments(
                conf.appwiteDatabaseId,
                conf.appwiteExpenseCollectionId
                
            )
        } catch (error) {
            console.log("appwrite service :: getAllExpenses :: error" , error)
        }
    }
}

const expenseService = new ExpenseService();
export default expenseService;