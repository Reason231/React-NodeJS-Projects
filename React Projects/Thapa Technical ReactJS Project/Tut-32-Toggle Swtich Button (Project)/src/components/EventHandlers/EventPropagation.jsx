export function EventPropagation(){
    // Bubbling Phase
    function bubbleGrandParent(){
        console.log("I am GrandParent,come at last due to buble phase")
    }
    function bubbleParentClick(event){
        console.log("I am Parent,come at second due to buble phase")
        // event.stopPropagation() // It stops the propagation means it can't reach to GrandParent
    }
    function bubbleChildClick(){
        console.log("I am child,come at first due to buble phase")
    }

    // Capturing Phase
    function captureGrandParent(){
        console.log("I am GrandParent,come at first due to capture phase")
    }
    function captureParentClick(){
        console.log("I am Parent,come at second due to capture phase")
    }
    function captureChildClick(){
        console.log("I am child,come at last due to capture phase")
    }

    
    return(
        <>
        {/* Bubbling Phase */}
        <div class="border-none bg-red-400 p-2 border-r-4 ml-20 inline-block">
            <div onClick={bubbleGrandParent}>
                <div onClick={bubbleParentClick}>
                    <button onClick={bubbleChildClick}>
                        Bubbling From the Event Propagation
                    </button>
                </div>
            </div>
        </div>

        {/* Caputring Phase */}
        <div class="border-none bg-red-800 p-2 border-r-4 ml-20 inline-block">
            <div onClickCapture={captureGrandParent} >
                <div onClickCapture={captureParentClick}>
                    <button onClickCapture={captureChildClick}>
                        Capturing Div From the Event Propagation
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}