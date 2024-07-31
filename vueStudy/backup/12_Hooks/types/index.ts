export interface personInterface {
    name: string,
    age: number,
    x?:number    // not necessary
}

export type personsInterface = Array<personInterface>  // or persnInterface[]