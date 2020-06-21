import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        //Get Date from API
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
        //Save date from state
    }, [])

    return (
        <Context.Provider value ={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} //namexport