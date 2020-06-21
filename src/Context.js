import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        //Get Date from API
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
        //Save date from state
    }, [])

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(items => items.id !== id))
    }

    function toggleFavorite(id) {

        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {

                //console.log(id)
                //console.log(!photo.isFavorite)

                return {
                    ...photo, 
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        
        setAllPhotos(updatedArr)

    }

    return (
        <Context.Provider value ={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} //namedxport