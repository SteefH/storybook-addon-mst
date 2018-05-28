import {arrayGen} from './array'
import {mapGen} from './map'
import {modelGen} from './model'
import {IType} from 'mobx-state-tree'

export const complexGen = (t: IType<any, any>) => arrayGen(t) || mapGen(t) || modelGen(t)
