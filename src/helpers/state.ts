import { SetStateAction } from 'react'

export default (object: any, fieldName: keyof typeof object, value: string, setState: SetStateAction<any>) => 
    setState({...Object.assign(object, { [fieldName]: value })});