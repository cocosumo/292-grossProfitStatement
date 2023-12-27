declare namespace Procurements {
  interface Fields {
    orderType: kintone.fieldTypes.SingleLineText;
    note: kintone.fieldTypes.SingleLineText;
    supplierId: kintone.fieldTypes.SingleLineText;
    orderId: kintone.fieldTypes.SingleLineText;
    役割_工事: kintone.fieldTypes.SingleLineText;
    projType: kintone.fieldTypes.SingleLineText;
    orderNum: kintone.fieldTypes.SingleLineText;
    orderStatus: kintone.fieldTypes.SingleLineText;
    orderAmountBeforeTax: kintone.fieldTypes.Number;
    役割_設計: kintone.fieldTypes.SingleLineText;
    支払日: kintone.fieldTypes.Date;
    役割_業務: kintone.fieldTypes.SingleLineText;
    orderAmountAfterTax: kintone.fieldTypes.Number;
    deletedState: kintone.fieldTypes.SingleLineText;
    orderTaxAmount: kintone.fieldTypes.Number;
    役割_IC: kintone.fieldTypes.SingleLineText;
    orderName: kintone.fieldTypes.SingleLineText;
    andpadProjId: kintone.fieldTypes.SingleLineText;
    supplierName: kintone.fieldTypes.SingleLineText;
    propertyAddress: kintone.fieldTypes.SingleLineText;
    projName: kintone.fieldTypes.SingleLineText;
    メンバーラベル: kintone.fieldTypes.SingleLineText;
    支払条件_手形: kintone.fieldTypes.Number;
    tax: kintone.fieldTypes.Number;
    着工日: kintone.fieldTypes.Date;
    支払条件_振込: kintone.fieldTypes.Number;
    orderDetails: kintone.fieldTypes.SingleLineText;
    納品日: kintone.fieldTypes.Date;
    主担当者: kintone.fieldTypes.SingleLineText;
    役割_営業: kintone.fieldTypes.SingleLineText;
    supplierManagementId: kintone.fieldTypes.SingleLineText;
    contractNum: kintone.fieldTypes.SingleLineText;
    締め日: kintone.fieldTypes.Date;
    orderDate: kintone.fieldTypes.Date;
    andpadManagementProjId: kintone.fieldTypes.SingleLineText;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
