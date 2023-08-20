import React, { useState } from 'react';
import { View } from 'react-native';
import { useContext } from 'react'; // This line can be removed, as you're already importing useContext above.
import { OrderContext } from '../context/orderContext';
import { Picker } from '@react-native-picker/picker';

const Dropdown = () => {
    const items = [
        { label: 'price', value: 'price' },
        { label: 'rating', value: 'rating' },
        { label: 'veg', value: 'veg' },
        { label: 'Non Veg', value: 'Non Veg' },
    ];

    const { order, setOrder } = useContext(OrderContext);
    const [selectedValue, setSelectedValue] = useState("sort..");

    const SortBy = (property,asc) => {
        console.log("Sorting started", property);

        console.log(asc); // This might not give you the updated value of asc due to closure behavior. Consider using `current` instead.
        let sortKey = asc === true ? 1 : -1;
        let filteResult = [...order].sort((a, b) => {
        
            if (typeof a[property] === "number" && typeof b[property] === "number") {
                // console.log("is a number");
                return (a[property] - b[property]) * sortKey;
            } else if (typeof a[property] === "string" && typeof b[property] === "string") {
                // console.log("is a string");
                return ('' + a[property].localeCompare(b[property])) * sortKey;
            }
            // You might want to add a default case here to handle other data types
            return 0;
        });

        // console.log(filteResult);
        // let res = filteResult.map((item) => (console.log(item[property])));
        // console.log(res);
        setOrder(filteResult);
    };

    const sort = (itemValue) => {
        console.log("Sorting by", itemValue);
        setSelectedValue(itemValue);
        if(itemValue.includes("asc"))
        {
          SortBy(itemValue,true);
        }
        else(itemValue.includes("dsc"))
        {
          SortBy(itemValue,false);
        }
    };

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => { sort(itemValue); }}
            >
                {items.map((item, index) => (
                    <Picker.Item key={item.label} label={item.label} value={item.value} />
                ))}
            </Picker>
        </View>
    );
};

export default Dropdown;
