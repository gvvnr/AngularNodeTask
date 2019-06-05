import { environment } from "../../../environments/environment";
export const PDATA = 'PRODUCTDATA';
export const INSERTITEM = 'INSERT_ITEM_DATA';
export const BILLDATA = 'INSERT_BILL_DATA';
export const BULKINSERT = 'BULK_INSERT_ITEM_DATA';
export const BILLGETDATA = 'BILLDATA';
export const BILLITEMDATA = 'BILLITEMDATA';//BILLDATA
export const BILLDATABYID = 'BILLDATABYID';
export const SEARCHBYCOULMN = 'SEARCHBYCOULMNBILLDATA';//SEARCHBYPRICE
export const MINMAXPRICE = 'SEARCHBYMAXPRICE';//--------get min and max price to display pagination data from that
export const DATESEARCH = 'SEARCHBYDATE';
export const PRODUCTCATEGORY = 'PRODUCTCATEGORY';//-----------get coulmn details by specific category from products table
export const PRODUCTCATEGORYANDCOLOR = 'PRODUCTCATEGORYANDCOLOR';//--search based on color and category and send result
export const LOGIN = 'LOGIN';

export const RegistrationFormData = 'REGISTRATIONFORMINSERT';
export const UserEndPoint = (type: string, params:any) => {
  const endpoints = {
    [BILLGETDATA]: '/bill',
    [PDATA]: '/product',
    [INSERTITEM]: '/item',
    [BILLDATA]: '/bill',//  modify to   /bill
    [BULKINSERT]: '/bulkInsert',///BILLDATA
    //[BILLGETDATA]:'/bill'
    [BILLITEMDATA]: '/billItems',
    [BILLDATABYID]: '/bill/id',
    [SEARCHBYCOULMN]: '/bill/search/coulmn',//-------------------------search by specific coulmn----------------//
    [MINMAXPRICE]: '/bill/search/price',//-------------search for specific in between price------------
    [DATESEARCH]: '/bill/search/date',
    [PRODUCTCATEGORY]: '/product/category',
    [PRODUCTCATEGORYANDCOLOR]: '/product/filter',
    [RegistrationFormData]: '/register',  //////////////////////registration
    [LOGIN]: '/login'
  };
  console.log('----> user endpoint' , params);
  //console.log(environment.API_ROOT + endpoints[type]);
  return 'https://buyaproductserver.herokuapp.com' + endpoints[type];
};
