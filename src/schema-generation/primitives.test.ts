import { schemaGen } from './index'
import { types, IType } from 'mobx-state-tree'

describe("Primitive schema generation", () => {
    describe("succeeds for", () => {

        test("types.string", () => {
            const schema = schemaGen(types.string)
            expect(schema).toEqual({type: "string"})
        })
        test("types.boolean", () => {
            const schema = schemaGen(types.boolean)
            expect(schema).toEqual({type: "boolean"})
        })
        test("types.number", () => {
            const schema = schemaGen(types.number)
            expect(schema).toEqual({type: "number"})
        })
        test("types.null", () => {
            const schema = schemaGen(types.null)
            expect(schema).toEqual({type: "null"})
        })
    })

    // const expectUndefinedSchema = <S, T>(tp: IType<S, T>) => () => {
    //     const schema = schemaGen(tp)
    //     expect(schema).toBeUndefined()
    // }
    // describe("fails for", () => {

    //     test("types.Date", expectUndefinedSchema(types.Date))
    //     test("types.optional(types.string, 'foo')", expectUndefinedSchema(types.optional(types.string, 'foo')))
    //     test("types.literal(string)", expectUndefinedSchema(types.literal("foo")))
    //     test("types.literal(number)", expectUndefinedSchema(types.literal(0)))
    //     test("types.literal(boolean)", expectUndefinedSchema(types.literal(true)))

    //     test("types.undefined", expectUndefinedSchema(types.undefined))
    //     test("types.maybe(types.string)", expectUndefinedSchema(types.maybe(types.string)))
    //     test("types.array(types.string)", expectUndefinedSchema(types.array(types.string)))
    //     test("types.map(types.string)", expectUndefinedSchema(types.map(types.string)))
    //     // test("types.maybe(types.string)", expectUndefined(types.maybe(types.string)))
    //     test("types.model({})", expectUndefinedSchema(types.model({})))
    // })
})

/*
String = 1,
    Number = 2,
    Boolean = 4,
    Date = 8,
    Literal = 16,
    Array = 32,
    Map = 64,
    Object = 128,
    Frozen = 256,
    Optional = 512,
    Reference = 1024,
    Identifier = 2048,
    Late = 4096,
    Refinement = 8192,
    Union = 16384,
    Null = 32768,
    Undefined = 65536,
    */
