import {optionalGen} from './optional'
import {IType} from 'mobx-state-tree'
export const utilityGen = (t: IType<any, any>) =>
  optionalGen(t)
