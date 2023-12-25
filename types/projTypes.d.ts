declare namespace ProjTypes {
  interface Fields {
    description: kintone.fieldTypes.MultiLineText;
    yumeCommFeeRate: kintone.fieldTypes.Number;
    label: kintone.fieldTypes.SingleLineText;
    profitRate: kintone.fieldTypes.Number;
    uuid: kintone.fieldTypes.SingleLineText;
    projTypeForTotalization: kintone.fieldTypes.SingleLineText;
    sortNum: kintone.fieldTypes.Number;
    projectName: kintone.fieldTypes.SingleLineText;
    commRateByRoleList: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          role: kintone.fieldTypes.DropDown;
          commRateByRole: kintone.fieldTypes.Number;
        };
      }>;
    };
    commRateByEmpList: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          empId: kintone.fieldTypes.SingleLineText;
          empName: kintone.fieldTypes.SingleLineText;
          empRole: kintone.fieldTypes.SingleLineText;
          commRateByEmp: kintone.fieldTypes.Number;
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
