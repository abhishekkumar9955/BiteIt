// import React from 'react';

const Sidebar = () => {
  return (
    <div className={`fixed h-full w-64 bg-gray-900 text-white block`}>
      <div className="p-4"> {/* Sidebar Content */}
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-800">Link 1</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-800">Link 2</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-800">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
