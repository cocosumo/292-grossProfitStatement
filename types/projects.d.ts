declare namespace Projects {
  interface Fields {
    schedContractDate: kintone.fieldTypes.Date;
    lastBillingDate: kintone.fieldTypes.Date;
    cancelStatus: kintone.fieldTypes.SingleLineText;
    memo: kintone.fieldTypes.SingleLineText;
    custNames: kintone.fieldTypes.SingleLineText;
    uuid: kintone.fieldTypes.SingleLineText;
    finalPostal: kintone.fieldTypes.SingleLineText;
    schedContractPrice: kintone.fieldTypes.Number;
    otherProjType: kintone.fieldTypes.SingleLineText;
    cocoAGNames: kintone.fieldTypes.SingleLineText;
    forceLinkedAndpadSystemId: kintone.fieldTypes.SingleLineText;
    rank: kintone.fieldTypes.SingleLineText;
    estatePurchaseDate: kintone.fieldTypes.Date;
    realEstateStatus: kintone.fieldTypes.SingleLineText;
    projTypeName: kintone.fieldTypes.SingleLineText;
    inHouseProjTypeId: kintone.fieldTypes.SingleLineText;
    isAgentConfirmed: kintone.fieldTypes.SingleLineText;
    yumeAGNames: kintone.fieldTypes.SingleLineText;
    paymentMethod: kintone.fieldTypes.SingleLineText;
    postal: kintone.fieldTypes.SingleLineText;
    status: kintone.fieldTypes.SingleLineText;
    storeCode: kintone.fieldTypes.SingleLineText;
    inHouseProjTypeName: kintone.fieldTypes.SingleLineText;
    commissionRate: kintone.fieldTypes.Number;
    addressKari: kintone.fieldTypes.SingleLineText;
    projFinDate: kintone.fieldTypes.Date;
    dataId: kintone.fieldTypes.SingleLineText;
    isShowFinalAddress: kintone.fieldTypes.Number;
    custGroupId: kintone.fieldTypes.SingleLineText;
    deliveryDate: kintone.fieldTypes.Date;
    payFinDate: kintone.fieldTypes.Date;
    isChkAddressKari: kintone.fieldTypes.Number;
    andpadSystemId: kintone.fieldTypes.SingleLineText;
    planApplicationDate: kintone.fieldTypes.Date;
    address2: kintone.fieldTypes.SingleLineText;
    address1: kintone.fieldTypes.SingleLineText;
    projName: kintone.fieldTypes.SingleLineText;
    store: kintone.fieldTypes.SingleLineText;
    finalAddress2: kintone.fieldTypes.SingleLineText;
    profitRate: kintone.fieldTypes.Number;
    storeId: kintone.fieldTypes.SingleLineText;
    finalAddress1: kintone.fieldTypes.SingleLineText;
    cocoConstNames: kintone.fieldTypes.SingleLineText;
    receivableCompleteDate: kintone.fieldTypes.Date;
    projTypeId: kintone.fieldTypes.SingleLineText;
    buildingType: kintone.fieldTypes.SingleLineText;
    territory: kintone.fieldTypes.SingleLineText;
    commRateByEmpList: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          commEmpId: kintone.fieldTypes.SingleLineText;
          commEmpRole: kintone.fieldTypes.SingleLineText;
          commEmpName: kintone.fieldTypes.SingleLineText;
          commRateByEmp: kintone.fieldTypes.Number;
        };
      }>;
    };
    log: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          logNote: kintone.fieldTypes.SingleLineText;
          logDateTime: kintone.fieldTypes.DateTime;
        };
      }>;
    };
    commRateByRoleList: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          role: kintone.fieldTypes.SingleLineText;
          commRateByRole: kintone.fieldTypes.Number;
        };
      }>;
    };
    agents: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          agentId: kintone.fieldTypes.SingleLineText;
          agentType: kintone.fieldTypes.SingleLineText;
          empRole: kintone.fieldTypes.SingleLineText;
          agentName: kintone.fieldTypes.SingleLineText;
        };
      }>;
    };
    remarks: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          note: kintone.fieldTypes.MultiLineText;
          noteUpdateTime: kintone.fieldTypes.DateTime;
          noteCreateTime: kintone.fieldTypes.DateTime;
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
    作成日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
  }
}
