import { Amount } from "../com.ingenico.mpos.sdk.data/amount";
import { Product } from "../com.ingenico.mpos.sdk.data/product";

export class CreditSaleTransactionRequest {
    amount: Amount;
    products: Product[];
    transactionGroupID?: any;
    completed?: any;
    clerkID?: any;
    clientTransactionId: string;
    createdTime: string;
    customData?: any;
    customReference?: any;
    gpsLatitude: string;
    gpsLongitude: string;
    merchantInvoiceId?: any;
    showNotesAndInvoiceOnReceipt?: any;
    transactionNotes?: any;
    type: string;

    /*
    * Simplified due to only working with amount transactionGroupID, and transactionNotes
    */
    constructor(_amount: Amount, _transactionGroupID?: any, _transactionNotes?: any){
        this.amount             = _amount;
        this.transactionGroupID = _transactionGroupID;
        this.transactionNotes   = _transactionNotes;
    }
}