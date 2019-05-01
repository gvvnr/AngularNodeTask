import { environment } from "../../../environments/environment";
export const PDATA = 'PRODUCTDATA';
export const INSERTITEM = 'INSERT_ITEM_DATA';
export const BILLDATA='INSERT_BILL_DATA';
export const BULKINSERT='BULK_INSERT_ITEM_DATA';
export const BILLGETDATA='BILLDATA';
export const UserEndPoint = (type: string) => {
  const endpoints = {
    [BILLGETDATA]:'/bill',
    [PDATA]: '/product',
    [INSERTITEM]:'/item',
    [BILLDATA]:'/bill',
    [BULKINSERT]:'/bulkInsert'///BILLDATA
    //[BILLGETDATA]:'/bill'
  };
  console.log("----> user endpoint");
  return environment.API_ROOT + endpoints[type];
};
