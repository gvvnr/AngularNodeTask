import { environment } from "../../../environments/environment";
export const PDATA = 'PRODUCTDATA';
export const INSERTITEM = 'INSERT_ITEM_DATA';
export const BILLDATA='INSERT_BILL_DATA';
export const BULKINSERT='BULK_INSERT_ITEM_DATA';
export const BILLGETDATA='BILLDATA';
export const BILLITEMDATA='BILLITEMDATA';//BILLDATA
export const IMAGERETRIVE='GET_IMAGE';
export const UserEndPoint = (type: string) => {
  const endpoints = {
    [BILLGETDATA]:'/bill',
    [PDATA]: '/product',
    [INSERTITEM]:'/item',
    [BILLDATA]:'/bill',//  modify to   /bill
    [BULKINSERT]:'/bulkInsert',///BILLDATA
    //[BILLGETDATA]:'/bill'
    [BILLITEMDATA]:'/billItems',
    [IMAGERETRIVE]:'/bill/img'
  };
  console.log("----> user endpoint");
  console.log(environment.API_ROOT + endpoints[type]);
  return environment.API_ROOT + endpoints[type];
};
