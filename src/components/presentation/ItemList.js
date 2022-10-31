import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {items.map((zones) => (
            <Item key={zones.id} {...zones} />
            ))}
        </>
    );
};

export default ItemList;
