

import {RenderFunction} from "@storybook/react"
import {IType, getMembers, IStateTreeNode, getSnapshot} from "mobx-state-tree"

import addons from '@storybook/addons';



export function withMSTNode<S, T, C>(node: IStateTreeNode): (storyFn: RenderFunction) => RenderFunction {
    
    const c = addons.getChannel()
    c.emit("store", getMembers(node), getSnapshot(node))
    return storyFn => {
        
        // applySnapshot(store, {...getSnapshot(store), ...createInitialState(store)})
        return storyFn
    }
}

