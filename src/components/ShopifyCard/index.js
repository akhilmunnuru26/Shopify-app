import './index.css'

const ShopifyCard = (props) =>{ 
    
    const {shopifyData,isActive} = props
    const {title,subTitle,description,price,sideHeading,adv1,adv2,adv3} = shopifyData

    const activeClassName= isActive ? 'active-card' : 'card'
    
    return(
        
     <div className={activeClassName}>
        {isActive &&<span className="tooltiptext">Popular</span>}
        <div className="plans-container">
            <h1 className="title">{title}</h1>
            <h5 className="sub-title">{subTitle}</h5>
            <p className="description">{description}</p>
        </div>
            <h1 className='price'><span className='rupee-symbol'>&#8377;</span>{price} <span className="denomination">INR/<br/>mo</span></h1>
            <div className='adv-container'>
                <p className='adv'>Get your first 3 months for <span className='rupee'>&#8377;</span>20/mo</p>
            </div>
        <div className="benfits-container">
            <h4 className='side-heading'>{sideHeading}</h4>
            <div className='tags-container'>
                <img
                    src="https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
                    alt="tick"
                    className="green-tick-image"
                />
                <p className='tags'>{adv1}</p>
            </div>
            <div className='tags-container'>
                <img
                    src="https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
                    alt="tick"
                    className="green-tick-image"
                />
                <p className='tags'>{adv2}</p>
            </div>
            <div className='tags-container'>
                <img
                    src="https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
                    alt="tick"
                    className="green-tick-image"
                />
                <p className='tags'>{adv3}</p>
            </div>
            <div className='button-conatiner'>
                <button type='button' className="try-for-free-btn">Try for free</button>
            </div>
           
        </div>
</div> )
}

export default ShopifyCard