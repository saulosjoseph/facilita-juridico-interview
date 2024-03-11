export interface Controller {
    handle: (...args: any[]) => Promise<any>
    isValidRequest?: (...args: any[]) => boolean
}