import {useState} from 'react'
import ShopifyCard from '../ShopifyCard'
import './index.css'

const shopifyData = [
    {
        id:1,
        title:'Basic',
        subTitle:'FOR INDIVIDUALS & SMALL BUSINESS',
        description:'Everything you need to create your store, ship products, and process payments',
        price:'1,994',
        sideHeading: 'What\'s included on Basic',
        adv1:'Basic reports',
        adv2: 'up to 1,000 inventory locations',
        adv3: '2 staff location' 
    }
    ,{
        id:2,
        title:'Shopify',
        subTitle:'FOR SMALL BUSINESSES',
        description:'Level up your business with professional reporting and more staff accounts.',
        price:'7,447',
        sideHeading: 'What\'s included on Shopify',
        adv1:'Professional reports',
        adv2: 'up to 1,000 inventory locations',
        adv3: '5 staff location' 
    },
    {
        id:3,
        title:'Advanced',
        subTitle:'FOR MEDIUM TO LARGE BUSINESSES',
        description:'Get the best of shopify with custom reporting and our lowest transaction fees.',
        price:'30,164',
        sideHeading: 'What\'s included on Advanced',
        adv1:'custom reports builder',
        adv2: 'up to 1,000 inventory locations',
        adv3: '15 staff location' 
    }
]

const tabDetails = [
    {
        id:"Basic",
        name:"Basic"
    },
    {
        id:"Shopify",
        name:"Shopify"
    },
    {
        id:"Advanced",
        name:"Advanced"
    }
]

const Body = () =>{ 
    const [activeCardId,setActiveCardId] = useState(shopifyData[0].title)

    
    return (
    <div className="body">
        <div className="pop-up-container">
            <div className='pay-monthly-adv'>Pay Monthly</div>
            <div className='pay-pop-up-adv'>Pay Yearly (Save 25%)</div>
        </div>
        <div className="tabs-container">
        {tabDetails.map(eachItem => {
            const {id,name} = eachItem
            const activeClass = (id === activeCardId ? 'tabs-basic':'tabs')
            const toggleActiveCards = () => {
                setActiveCardId(id)
            }
            return (
            <div onClick={toggleActiveCards} key={id} className={activeClass}>
                <p className="tab-name">{name}</p>
            </div>
        )})}
        </div>
    
       <ul className="cards-container">
            {shopifyData.map(eachItem => <ShopifyCard isActive={eachItem.title === activeCardId} key={eachItem.id} shopifyData={eachItem}/>)}
       </ul> 
    
    
    </div>
)
}


export default Body