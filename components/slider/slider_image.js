const GalleryImage = ( props ) => {

    return (
        <div className="p-4">
            <img src={props.image} width={props.width} height={props.height}/>
        </div>
    )
}

export default GalleryImage