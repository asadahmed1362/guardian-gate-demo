export interface IncidentData {
    incidentId?: number;
    natureOfIncident?: string;
    numberOfRobbers?: number;
    itemsRobbed?: string;
    injuryOccured?: boolean;
    propertyDamage?: boolean;
    email?: string;
    status?: any;
  }

  export interface IncidentType {
    code: number;
    name: string;
  }
