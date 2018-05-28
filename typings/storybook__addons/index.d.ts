import { RenderFunction, Renderable } from "@storybook/react"
// export {Channel} from './channel'
import {Channel} from './channel'
export {Channel} from './channel'

export interface StorybookQueryParams {
    [key: string]: string | null
}


export interface StorybookAPI {
    selectStory(kind: string, storyName?: string): void
    selectInCurrentKind(storyName: string): void
    setQueryParams(params: StorybookQueryParams): void
    getQueryParam(param: string): string | null | undefined;
    getURLState(overrideParams: StorybookQueryParams): any
}



export interface Panel {
    title: string | RenderFunction
    render: RenderFunction
}


export type Panels = {[panelName: string]: Panel};
export type Loader = (api?: StorybookAPI) => void
interface AddonStore {
    getChannel(): Channel
    
    addPanel(name: string, panel: Panel): void

    register(name: string, loader: Loader): void
    
}

declare const def: AddonStore
export default def;


// export function getChannel(): Channel
// export function addPanel(name: string, panel: Panel): void
// export function register(name: string, loader: Loader): void
