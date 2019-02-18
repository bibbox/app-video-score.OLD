import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Document } from './document.model';
import { DocumentActions, DocumentActionTypes } from './document.actions';

export interface State extends EntityState<Document> {
  api_pending: boolean;
  api_sucess: boolean;
  // additional entities state properties
}

function sortByMovieID(e1: Document, e2: Document) {
  if (e1.movieID === e2.movieID) {
    return (e1.progress - e2.progress);
  } else {
    return (e1.movieID - e2.movieID);
  }
}



export const adapter: EntityAdapter<Document> = createEntityAdapter<Document>(
  {
    sortComparer: sortByMovieID
  }
);

export const initialState: State = adapter.getInitialState({
  api_pending: false,
  api_sucess: false
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: DocumentActions
): State {
  switch (action.type) {
    case DocumentActionTypes.AddDocument: {
      return adapter.addOne(action.payload.document, state);
    }

    case DocumentActionTypes.UpsertDocument: {
      return adapter.upsertOne(action.payload.document, state);
    }

    case DocumentActionTypes.AddDocuments: {
      return adapter.addMany(action.payload.documents, state);
    }

    case DocumentActionTypes.UpsertDocuments: {
      return adapter.upsertMany(action.payload.documents, state);
    }

    case DocumentActionTypes.UpdateDocument: {
      return adapter.updateOne(action.payload.document, state);
    }

    case DocumentActionTypes.UpdateDocuments: {
      return adapter.updateMany(action.payload.documents, state);
    }

    case DocumentActionTypes.DeleteDocument: {
      return adapter.removeOne(action.payload.id, state);
    }

    case DocumentActionTypes.DeleteDocuments: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case DocumentActionTypes.LoadDocuments: {
      return adapter.addAll(action.payload.documents, state);
    }

    case DocumentActionTypes.ClearDocuments: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
