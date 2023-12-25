declare namespace Employees {
  interface Fields {
    文字列＿氏名: kintone.fieldTypes.SingleLineText;
    職種: kintone.fieldTypes.DropDown;
    mainStore: kintone.fieldTypes.SingleLineText;
    日付＿誕生日: kintone.fieldTypes.Date;
    入社日: kintone.fieldTypes.Date;
    mainStoreId: kintone.fieldTypes.Number;
    uuid: kintone.fieldTypes.SingleLineText;
    point: kintone.fieldTypes.Number;
    役職: kintone.fieldTypes.DropDown;
    affiliation: kintone.fieldTypes.DropDown;
    誕生日＿月日: kintone.fieldTypes.SingleLineText;
    contact: kintone.fieldTypes.SingleLineText;
    状態: kintone.fieldTypes.DropDown;
    氏名ふりがな: kintone.fieldTypes.SingleLineText;
    email: kintone.fieldTypes.SingleLineText;
    chatworkRoomId: kintone.fieldTypes.SingleLineText;
    氏名ローマ字: kintone.fieldTypes.SingleLineText;
    mainStoreId_v2: kintone.fieldTypes.SingleLineText;
    sort: kintone.fieldTypes.Number;
    期生: kintone.fieldTypes.DropDown;
    mail_foot: kintone.fieldTypes.MultiLineText;
    mainStore_v2: kintone.fieldTypes.SingleLineText;
    所属チーム: kintone.fieldTypes.SingleLineText;
    territory: kintone.fieldTypes.SingleLineText;
    territory_v2: kintone.fieldTypes.SingleLineText;

    account: kintone.fieldTypes.UserSelect;
    テーブル: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          文字列__1行__4: kintone.fieldTypes.SingleLineText;
          日付: kintone.fieldTypes.Date;
        };
      }>;
    };
    affStores: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          affStoreName: kintone.fieldTypes.SingleLineText;
          affStoreId: kintone.fieldTypes.SingleLineText;
          affState: kintone.fieldTypes.RadioButton;
        };
      }>;
    };
    affiliateStores: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          storeUUID: kintone.fieldTypes.SingleLineText;
          storeName: kintone.fieldTypes.SingleLineText;
          storeId: kintone.fieldTypes.Number;
          affiliationState: kintone.fieldTypes.RadioButton;
        };
      }>;
    };
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
