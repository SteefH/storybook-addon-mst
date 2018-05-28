import * as React from "react"
import { storiesOf } from "@storybook/react"
import {types} from 'mobx-state-tree'
const stories = storiesOf("Example / MST SnapshotView", module)
import {SnapshotView} from "./SnapshotView"
import {withMSTNode} from "../../src/index"

const Model = types.model("Model", {
    foo: types.string,
    bar: types.number
})
const modelInstance = Model.create({foo: "Hello", bar: 42})
stories.add("Default", withMSTNode(modelInstance)(() => <SnapshotView model={modelInstance} />))

