

const CraftCard = ({craft}) => {
    const { itemName, image, subcategory, customization, price, rating, processTime, 
           stockStatus, userName, email, description } = craft;
    return (
        <div>
            <h2>{itemName}</h2>
        </div>
    );
};

export default CraftCard;