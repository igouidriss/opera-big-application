import dayjs from 'dayjs';

export interface IDmClientMdmAddrCntry {
  id?: number;
  prtyFk?: string;
  frstCntryFrmt?: string | null;
  frstContinent?: string | null;
  scndCntryFrmt?: string | null;
  scndContinent?: string | null;
  thrdCntryFrmt?: string | null;
  thrdContinent?: string | null;
  frthCntryFrmt?: string | null;
  frthContinent?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
}

export const defaultValue: Readonly<IDmClientMdmAddrCntry> = {};
