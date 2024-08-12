export interface IncidentData {
    RowKey?: string;
    natureOfIncident?: string;
    numberOfRobbers?: number;
    itemsRobbed?: string;
    injuryOccured?: boolean;
    propertyDamage?: boolean;
    email?: string;
    status?: any;
    timestamp?:Date;
  }

  export interface IncidentType {
    code: number;
    name: string;
  }
