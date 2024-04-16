import dayjs from 'dayjs';

export interface IDmClientMdmNtnltyCntry {
  id?: number;
  prtyFk?: string;
  frstNtnltFrmt?: string | null;
  frstContinent?: string | null;
  scndNtnltFrmt?: string | null;
  scndContinent?: string | null;
  thrdNtnltFrmt?: string | null;
  thrdContinent?: string | null;
  frthNtnltFrmt?: string | null;
  frthContinent?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
}

export const defaultValue: Readonly<IDmClientMdmNtnltyCntry> = {};
