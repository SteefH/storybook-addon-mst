import {types, IType} from 'mobx-state-tree'
import { JSONSchema6, JSONSchema6TypeName } from "json-schema";
export function typeToSchema<S, T>(tp: IType<S, T>) {

}

type CreateSchemaFunc = (t: IType<any, any>) => (JSONSchema6 | undefined)
type TypeName = JSONSchema6TypeName | JSONSchema6TypeName[]
const primitiveSchema: ((t: IType<any, any>, name: TypeName) => CreateSchemaFunc) =
  (t: IType<any, any>, name: TypeName) => (testType: IType<any, any>) =>
    t.isAssignableFrom(testType) ? {type: name} : undefined


export const schemaGenFuncs = [
  primitiveSchema(types.string, "string"),
  primitiveSchema(types.number, "number"),
  primitiveSchema(types.boolean, "boolean"),
  primitiveSchema(types.null, "null")
]




export const primitiveGen = (t: IType<any, any>) => {
  for (const v of schemaGenFuncs) {
    const result = v(t)
    if (result !== undefined) {
      return result
    }
  }
  return undefined
}
