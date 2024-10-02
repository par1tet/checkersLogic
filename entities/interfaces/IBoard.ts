export interface IBoard {
    field: string[][]
    createField: () => void
    showField: () => void
    createMove: (move: string) => void
    showMoves: () => void
}
