const ReviewArrow = (props) => {
 
    return (
        <div className={`font-cheddar rounded-full w-16 h-16 bg-black absolute -bottom-10 bg-opacity-40 hover:bg-opacity-80 transition-all text-white items-center justify-center text-5xl cursor-pointer hidden sm:flex ${props.direction === "prev" ? "left-12 z-20" : "right-12"}`} onClick={props.onClick}>
            <p className={props.direction === "prev" ? "mb-1 transform rotate-180" : "mt-1"}>→</p>
        </div>
    )
}

export default ReviewArrow