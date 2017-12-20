
interface Row {

}

export class Table {

  elements: Row[]

  constructor(readonly row: number,
              readonly column: number) {

  }

}
