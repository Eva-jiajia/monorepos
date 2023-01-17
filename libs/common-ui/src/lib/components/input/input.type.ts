export type InputType = 'text' | 'mask' | 'number' | 'password'
export type InputSize = 'sm' | 'default' | 'lg'
export type InputIcon = 'prefix' | 'suffix' | null

export enum InputTypeEnum {
    TEXT = 'text',
    MASK = 'mask',
    NUMBER = 'number',
    PASSWORD = 'password'
}

export enum InputSizeEnum {
    SM = 'sm',
    DEFAULT = 'default',
    LG = 'lg'
}
export enum InputIconEnum {
    PREFIX = 'prefix',
    SUFFIX = 'suffix'
}