const ReviewArrow = (props) => {

    if(props.direction === "prev"){
        var arrow = "←"
    }else{
        var arrow = "→"
    }

    return (
        <div className={`font-cheddar rounded-full w-16 h-16 bg-black absolute -bottom-10 bg-opacity-40 hover:bg-opacity-80 transition-all text-white items-center justify-center text-5xl cursor-pointer hidden sm:flex ${props.direction === "prev" ? "left-12 z-20" : "right-12"}`} onClick={props.onClick}>
            <p className="mb-1">{arrow}</p>
        </div>
    )
}

export default ReviewArrow