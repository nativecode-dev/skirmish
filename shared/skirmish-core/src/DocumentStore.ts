import PouchDB from 'pouchdb'

import Logger from './Logger'

export interface Document {
  created: number
  updated?: number
}

export class DocumentStore<T extends Document> {
  private readonly log = Logger.extend('document-store')

  protected readonly db: PouchDB.Database<T>

  constructor(dbstring: string) {
    this.db = new PouchDB<T>(dbstring)
    this.log.debug('use database', dbstring)
  }

  add(document: T): Promise<PouchDB.Core.Response> {
    return this.db.post(document)
  }

  all(): Promise<PouchDB.Core.AllDocsResponse<T>> {
    return this.db.allDocs()
  }

  delete(document: T & PouchDB.Core.RemoveDocument): Promise<PouchDB.Find.DeleteIndexResponse<T>> {
    return this.db.remove(document)
  }

  get(id: string): Promise<T> {
    return this.db.get(id)
  }

  update(document: T & PouchDB.Core.PutDocument<T>) {
    return this.db.put(document)
  }
}
