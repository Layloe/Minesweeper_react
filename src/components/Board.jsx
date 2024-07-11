import Cell from "./Cell";

const Board = ({data, handleCellClick, handleContextMenu}) => {
    return(
        <div className="board">
            {data.map(datarow => 
             datarow.map(dataitem => 
                <div key={`${dataitem.y}-${dataitem.x}`}>
                    <Cell onClick={() => handleCellClick(dataitem.y, dataitem.x)} 
                    cMenu={() => handleContextMenu(e, dataitem.y, dataitem.x)}
                    value={dataitem}
                    />
                </div>
             )
            )
            
            }
        </div>
    )
}

export default Board