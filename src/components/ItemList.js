import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
