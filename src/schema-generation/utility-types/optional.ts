import {IType} from "mobx-state-tree"
import { JSONSchema6 } from "json-schema";
import {isOptional} from '../util'
import {complexGen, primitiveGen, utilityGen} from '../internal'

const schemaGen = (t: IType<any, any>) =>
  complexGen(t) || primitiveGen(t) || utilityGen(t)

export const optionalGen = (t: IType<any, any>): JSONSchema6 => {
  if (isOptional(t)) {
    return {... schemaGen(t.type), default: t.defaultValue}
  }
}
