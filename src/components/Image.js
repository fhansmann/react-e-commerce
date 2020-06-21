import React, {useState} from "react"
import '../styles.css'

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cardIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            { heartIcon }
            { cardIcon }

        </div>
    )
}

export default Image