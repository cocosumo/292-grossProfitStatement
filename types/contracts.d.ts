declare namespace Contracts {
  interface Fields {
    contractDate: kintone.fieldTypes.Date;
    envCompleteDate: kintone.fieldTypes.DateTime;
    contractType: kintone.fieldTypes.SingleLineText;
    projEstimateId: kintone.fieldTypes.SingleLineText;
    memo: kintone.fieldTypes.MultiLineText;
    hasRefund: kintone.fieldTypes.RadioButton;
    uuid: kintone.fieldTypes.SingleLineText;
    initialAmt: kintone.fieldTypes.Number;
    payDestination: kintone.fieldTypes.SingleLineText;
    financingMethod: kintone.fieldTypes.SingleLineText;
    financialInstitutionBranch: kintone.fieldTypes.SingleLineText;
    finalAmt: kintone.fieldTypes.Number;
    payMethod: kintone.fieldTypes.SingleLineText;
    envelopeId: kintone.fieldTypes.SingleLineText;
    voidedEnvelopes: kintone.fieldTypes.SingleLineText;
    projPeriod: kintone.fieldTypes.Number;
    tax: kintone.fieldTypes.Number;
    hasReduction: kintone.fieldTypes.RadioButton;
    startDaysAfterContract: kintone.fieldTypes.Number;
    contractAddType: kintone.fieldTypes.SingleLineText;
    includePlanContractAmt: kintone.fieldTypes.Number;
    contractAmt: kintone.fieldTypes.Number;
    startDate: kintone.fieldTypes.Date;
    signMethod: kintone.fieldTypes.SingleLineText;
    projId: kintone.fieldTypes.SingleLineText;
    refundMethod: kintone.fieldTypes.SingleLineText;
    totalProfit: kintone.fieldTypes.Number;
    purpose: kintone.fieldTypes.SingleLineText;
    projType: kintone.fieldTypes.SingleLineText;
    envRecipients: kintone.fieldTypes.SingleLineText;
    finalAmtDate: kintone.fieldTypes.Date;
    scale: kintone.fieldTypes.SingleLineText;
    finishDaysAfterContract: kintone.fieldTypes.Number;
    interimAmt: kintone.fieldTypes.Number;
    contractAmtDate: kintone.fieldTypes.Date;
    subsidyAmt: kintone.fieldTypes.Number;
    totalContractAmt: kintone.fieldTypes.Number;
    storeName: kintone.fieldTypes.SingleLineText;
    deliveryDate: kintone.fieldTypes.Date;
    refundAmt: kintone.fieldTypes.Number;
    annotation: kintone.fieldTypes.MultiLineText;
    systemId: kintone.fieldTypes.SingleLineText;
    hasSubsidy: kintone.fieldTypes.RadioButton;
    reductionAmt: kintone.fieldTypes.Number;
    projName: kintone.fieldTypes.SingleLineText;
    interimAmtDate: kintone.fieldTypes.Date;
    structure: kintone.fieldTypes.SingleLineText;
    othersAmt: kintone.fieldTypes.Number;
    projTypeId: kintone.fieldTypes.SingleLineText;
    initialAmtDate: kintone.fieldTypes.Date;
    subsidyMethod: kintone.fieldTypes.SingleLineText;
    finishDate: kintone.fieldTypes.Date;
    othersAmtDate: kintone.fieldTypes.Date;
    financialInstitution: kintone.fieldTypes.SingleLineText;
    financialContactTel: kintone.fieldTypes.SingleLineText;
    financialContactFax: kintone.fieldTypes.SingleLineText;
    envelopeStatus: kintone.fieldTypes.SingleLineText;

    envDocFileKeys: kintone.fieldTypes.File;
    otherAttachments: kintone.fieldTypes.File;
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
