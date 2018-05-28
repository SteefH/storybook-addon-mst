import * as React from 'react'
import addons from '@storybook/addons';
import {Panel} from './components/Panel'

addons.register('steefh/mobx-state-tree', (api?) => {
  console.log("API", api)
  
  // Also need to set a unique name to the panel.
  addons.addPanel('steefh/mobx-state-tree/panel', {
    title: 'MobX State Tree',
    render: () => (
      <Panel channel={addons.getChannel()} api={api} />
    ),
  })
})

// console.log("ADDONS:", addons.getChannel())
