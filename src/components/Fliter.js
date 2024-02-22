import React, { useState } from 'react';
import { Select } from 'antd';
const OPTIONS = ['All','Sofa', 'Chair', 'Watch', 'Mobile' , 'Wireless'];
const Filter = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="single"
      placeholder="Filter by category"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '10%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default Filter;