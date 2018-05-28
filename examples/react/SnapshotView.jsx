import * as React from 'react'
import {observer} from 'mobx-react'
import * as mst from 'mobx-state-tree'


export const SnapshotView = observer(({model}) => 
    <pre>
        {JSON.stringify(mst.getSnapshot(model), "  ")}
    </pre>
)
