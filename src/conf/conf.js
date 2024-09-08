const conf={
    appwiteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwiteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwiteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwiteExpenseCollectionId:String(import.meta.env.VITE_APPWRITE_EXPENSE_COLLECTION_ID),
    appwiteIncomeCollectionId:String(import.meta.env.VITE_APPWRITE_INCOME_COLLECTION_ID)
}

export default conf;