import React, { useEffect, useState } from 'react';
import MenuCard from '../components/MenuCard';
import axios from 'axios';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const getMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu"); // Replace with your backend's actual address
      setMenu(res.data);
      setFilteredMenu(res.data); // Initialize filtered menu with the full menu
    } catch (e) {
      console.log(e);
    }
  };

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredMenu(menu);
    } else {
      const newMenu = menu.filter(e => e.name.toLowerCase().includes(category.toLowerCase()));
      setFilteredMenu(newMenu);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className='bg-white min-h-screen text-black w-full grid grid-cols-1 md:grid-cols-4 p-[5px] md:pr-5 md:pl-5 pt-3 pb-5 md:justify-center justify-center h-fit border border-solid'>
      <div className='border-r border-gray-400 w-[220px] hidden md:flex'>
        <div className='w-[80px] md:flex md:w-[250px] hidden gap-2 h-[60px] flex-wrap'>
          <div onClick={() => handleFilter('all')}
            className="badge badge-primary badge-lg text-xs cursor-pointer hover:underline">all</div>
          <div onClick={() => handleFilter('burgers')}
            className="badge badge-primary badge-lg text-xs cursor-pointer hover:underline">burgers</div>
          <div onClick={() => handleFilter('pizza')}
            className="badge badge-primary badge-lg text-xs cursor-pointer hover:underline">pizza</div>
          <div onClick={() => handleFilter('noodles')}
            className="badge badge-primary badge-lg text-xs cursor-pointer hover:underline">noodles</div>
          <div onClick={() => handleFilter('salad')}
            className="badge badge-primary badge-lg text-xs cursor-pointer hover:underline">salads</div>
        </div>
      </div>

      <div className='col-span-1 md:col-span-3 md:col-start-2 md:col-end-5 flex flex-wrap justify-center md:justify-start gap-2 h-fit'>
        {filteredMenu?.map((item) => (
          <MenuCard key={item._id} id={item._id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Menu;