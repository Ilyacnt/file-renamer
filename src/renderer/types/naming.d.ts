export interface NamingItem {
    id: string
    name: string
    description: string
    constructorProperties: CounsctructorProperty[]
}

export interface CounsctructorProperty {
    id: string
    name: string
    type: CounsctructorPropertyTypes
    currentValue: string | null
    valuesData?: string
    additionalData?: string
}

export type CounsctructorPropertyTypes = 'selectData' | 'uniqueCode' | 'simpleText' | 'resolution'
export type ConstructorPropertyValuesDataTypes = 'googleSheets' | 'plainText'
