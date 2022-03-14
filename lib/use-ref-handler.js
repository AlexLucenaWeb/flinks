export default function refLinkHandler(divId) {

    const destination = document.getElementById(divId)

    if(destination){;
        window.scrollTo({
            top: destination.offsetTop-50, 
            behavior: "smooth"
        });
    }
}