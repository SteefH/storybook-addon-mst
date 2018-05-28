import React, { DOMElement } from 'react'
import addons from '@storybook/addons';

import { Channel, StorybookAPI } from '@storybook/addons';
import "../json-editor"




export interface PanelProps {
    channel: Channel
    api?: StorybookAPI
  }
export class Panel extends React.Component<PanelProps> {

    private container: HTMLDivElement | null = null
    private editor: any = null
    private setContainer: (element: HTMLDivElement | null) => void
    constructor(props: PanelProps) {
        super(props)
        props.channel.on("store", (...args: any[]) => {   
          console.log("STORE", ...args)
        })
        console.log("ADDFDFJHfkljhfkfhkjhfkh")
        this.setContainer = (element: HTMLDivElement | null) => {
            if (element !== this.container) {
                if (this.editor) {
                    this.editor.destroy()
                }
                this.container = element
                if (this.container) {
                    console.log("COOOOOOOOO:", this.container)
                    this.editor = new JSONEditor(this.container, {schema: {}})
                }
            }
        }
    }

    render() {
        return <div ref={this.setContainer} />
    }
  }
