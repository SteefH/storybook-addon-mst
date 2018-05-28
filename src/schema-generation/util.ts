import {IType} from 'mobx-state-tree'

enum TypeFlags {
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
}

export type IFunctionReturn<T> = () => T
export type IOptionalValue<S, T> = S | T | IFunctionReturn<S> | IFunctionReturn<T>

type Optional<S, T> = IType<S, T> & {
    readonly type: IType<S, T>
    readonly defaultValue: IOptionalValue<S, T>
}

export function isOptional<S, T>(t: IType<S, T>): t is Optional<S, T> {
    return (t.flags & TypeFlags.Optional) !== 0
}

export function isNullable<S, T>(t: IType<S, T>): boolean {
    return (t.flags & TypeFlags.Null) !== 0
}
