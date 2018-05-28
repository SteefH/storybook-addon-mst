import { JSONSchema6, JSONSchema6TypeName } from "json-schema";
import { IType } from 'mobx-state-tree'
import {complexGen, primitiveGen, utilityGen} from './internal'

export type CreateSchemaFunc = (t: IType<any, any>) => (JSONSchema6 | undefined)
export const schemaGen: CreateSchemaFunc = (t: IType<any, any>) =>
  complexGen(t) || primitiveGen(t) || utilityGen(t)
