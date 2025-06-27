import { useReducer, useRef,memo } from "react"

// export const Counts = memo() => {
 const Counts=()=>{
    const renderCount = useRef(0)
    console.log(renderCount)

    return(
        <>
        {/* Yesko data change hunu naparni ho button increment garda pani */}
        <p>Nothing here but Ive now rendered from the MemoCount file:</p>
        <span>{renderCount.current++} time(s)</span>
        </>
    )
}

// clear the memo and you can see that it will re-render.
export default memo(Counts)