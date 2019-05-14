import { environment } from "../../../environments/environment";
export const PDATA = 'PRODUCTDATA';
export const INSERTITEM = 'INSERT_ITEM_DATA';
export const BILLDATA='INSERT_BILL_DATA';
export const BULKINSERT='BULK_INSERT_ITEM_DATA';
export const BILLGETDATA='BILLDATA';
export const BILLITEMDATA='BILLITEMDATA';//BILLDATA
export const BILLDATABYID='BILLDATABYID';
export const SEARCHBYCOULMN='SEARCHBYCOULMNBILLDATA';//SEARCHBYPRICE
export const MINMAXPRICE='SEARCHBYMAXPRICE';//--------get min and max price to display pagination data from that
export const DATESEARCH='SEARCHBYDATE';
export const UserEndPoint = (type: string, params:any) => {
  const endpoints = {
    [BILLGETDATA]:'/bill',
    [PDATA]: '/product',
    [INSERTITEM]:'/item',
    [BILLDATA]:'/bill',//  modify to   /bill
    [BULKINSERT]:'/bulkInsert',///BILLDATA
    //[BILLGETDATA]:'/bill'
    [BILLITEMDATA]:'/billItems',
    [BILLDATABYID]:'/bill/id',
    [SEARCHBYCOULMN]:'/bill/search/coulmn',//-------------------------search by specific coulmn----------------//
    [MINMAXPRICE]:'/bill/search/price',//-------------search for specific in between price------------
    [DATESEARCH]:'/bill/search/date'
  };
  console.log("----> user endpoint",params);
  console.log(environment.API_ROOT + endpoints[type]);
  return environment.API_ROOT + endpoints[type];
};
