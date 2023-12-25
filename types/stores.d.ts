declare namespace Stores {
  interface Fields {
    sortNumber: kintone.fieldTypes.Number;
    postalCode: kintone.fieldTypes.SingleLineText;
    freedial: kintone.fieldTypes.SingleLineText;
    店長: kintone.fieldTypes.Number;
    uuid: kintone.fieldTypes.SingleLineText;
    住所: kintone.fieldTypes.SingleLineText;
    店舗名: kintone.fieldTypes.SingleLineText;
    area: kintone.fieldTypes.SingleLineText;
    meetingNumber: kintone.fieldTypes.Number;
    Eメール: kintone.fieldTypes.SingleLineText;
    storeNameShort: kintone.fieldTypes.SingleLineText;
    店長名: kintone.fieldTypes.SingleLineText;
    TEL: kintone.fieldTypes.SingleLineText;
    FAX: kintone.fieldTypes.SingleLineText;
    officialStoreName: kintone.fieldTypes.SingleLineText;
    territory: kintone.fieldTypes.SingleLineText;
    storeCode: kintone.fieldTypes.SingleLineText;
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
