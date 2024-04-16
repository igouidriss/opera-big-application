import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending } from '@reduxjs/toolkit';
import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IDmClientMdmNtnltyCntry, defaultValue } from 'app/shared/model/dm-client-mdm-ntnlty-cntry.model';

const initialState: EntityState<IDmClientMdmNtnltyCntry> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/dm-client-mdm-ntnlty-cntries';

// Actions

export const getEntities = createAsyncThunk('dmClientMdmNtnltyCntry/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}?${sort ? `page=${page}&size=${size}&sort=${sort}&` : ''}cacheBuster=${new Date().getTime()}`;
  return axios.get<IDmClientMdmNtnltyCntry[]>(requestUrl);
});

export const getEntity = createAsyncThunk(
  'dmClientMdmNtnltyCntry/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<IDmClientMdmNtnltyCntry>(requestUrl);
  },
  { serializeError: serializeAxiosError },
);

export const createEntity = createAsyncThunk(
  'dmClientMdmNtnltyCntry/create_entity',
  async (entity: IDmClientMdmNtnltyCntry, thunkAPI) => {
    const result = await axios.post<IDmClientMdmNtnltyCntry>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError },
);

export const updateEntity = createAsyncThunk(
  'dmClientMdmNtnltyCntry/update_entity',
  async (entity: IDmClientMdmNtnltyCntry, thunkAPI) => {
    const result = await axios.put<IDmClientMdmNtnltyCntry>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError },
);

export const partialUpdateEntity = createAsyncThunk(
  'dmClientMdmNtnltyCntry/partial_update_entity',
  async (entity: IDmClientMdmNtnltyCntry, thunkAPI) => {
    const result = await axios.patch<IDmClientMdmNtnltyCntry>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError },
);

export const deleteEntity = createAsyncThunk(
  'dmClientMdmNtnltyCntry/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<IDmClientMdmNtnltyCntry>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError },
);

// slice

export const DmClientMdmNtnltyCntrySlice = createEntitySlice({
  name: 'dmClientMdmNtnltyCntry',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
      })
      .addCase(deleteEntity.fulfilled, state => {
        state.updating = false;
        state.updateSuccess = true;
        state.entity = {};
      })
      .addMatcher(isFulfilled(getEntities), (state, action) => {
        const { data, headers } = action.payload;

        return {
          ...state,
          loading: false,
          entities: data,
          totalItems: parseInt(headers['x-total-count'], 10),
        };
      })
      .addMatcher(isFulfilled(createEntity, updateEntity, partialUpdateEntity), (state, action) => {
        state.updating = false;
        state.loading = false;
        state.updateSuccess = true;
        state.entity = action.payload.data;
      })
      .addMatcher(isPending(getEntities, getEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isPending(createEntity, updateEntity, partialUpdateEntity, deleteEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.updating = true;
      });
  },
});

export const { reset } = DmClientMdmNtnltyCntrySlice.actions;

// Reducer
export default DmClientMdmNtnltyCntrySlice.reducer;
