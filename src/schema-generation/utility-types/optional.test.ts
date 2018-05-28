
import {schemaGen} from '../index'
import {types} from 'mobx-state-tree'

describe("optional schema generation", () => {
  describe("wrapping primitives", () => {

    test("types.string", () => {
      const schema = schemaGen(types.optional(types.string, "foo"))
      expect(schema).toEqual({type: "string", default: "foo"})
    })

    test("types.number", () => {
      const schema = schemaGen(types.optional(types.number, 42))
      expect(schema).toEqual({type: "number", default: 42})
    })

    test("types.boolean", () => {

      const schema = schemaGen(types.optional(types.boolean, true))

      expect(schema).toEqual({type: "boolean", default: true})
    })
  })
})
