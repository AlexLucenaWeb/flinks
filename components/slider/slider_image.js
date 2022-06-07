const GalleryImage = ( props ) => {

    const showImageHandler = () => {
        insertImage()
    }

    const insertImage = () => {

        const image_div = document.getElementById('full_image')

        image_div.innerHTML = `<div style="width:50%;max-height:80%"><img src=${props.image}/></div>`
        document.body.classList.add('lock-position')
        image_div.classList.remove("hidden")
    }

    return (
        <>
        <div className="p-6 flex items-center h-full">
            <img onClick={showImageHandler} src={props.image} width={props.width} height={props.height} loading="lazy" className='transition-all duration-300 hover:shadow-image-hover hover:cursor-pointer rounded'/>
        </div>
        </>
    )
}

export default GalleryImage