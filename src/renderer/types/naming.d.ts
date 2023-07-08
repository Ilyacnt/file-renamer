export interface NamingItem {
    id: string
    name: string
    description: string
    constructorProperties?: CounsctructorProperty[]
}

export interface CounsctructorProperty {
    name: string
    type: CounsctructorPropertyTypes
    currentValue: string | null
    additionalData?: string
}

export type CounsctructorPropertyTypes = 'selectData' | 'uniqueCode' | 'simpleText' | 'resolution'
export type ConstructorPropertyValuesDataTypes = 'googleSheets' | 'plainText'
