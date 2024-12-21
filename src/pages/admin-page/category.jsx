import React from 'react';

const CategoryPage = () => {
  const category = [
    {
      categoryId: 1,
      categoryName: "Deluxe Rooms",
      description: "Spacious rooms with premium amenities and beautiful views.",
      features: ["King-sized bed", "Free Wi-Fi", "Air conditioning", "Flat-screen TV", "Private balcony"],
      price: 150
    },
    {
      categoryId: 2,
      categoryName: "Standard Rooms",
      description: "Comfortable rooms with essential facilities for a pleasant stay.",
      features: ["Queen-sized bed", "Free Wi-Fi", "Air conditioning", "Flat-screen TV"],
      price: 100
    },
    {
      categoryId: 3,
      categoryName: "Suites",
      description: "Luxurious suites with separate living areas and exclusive services.",
      features: ["King-sized bed", "Living room", "Mini-bar", "Free Wi-Fi", "Air conditioning", "Flat-screen TV", "Jacuzzi"],
      price: 300
    },
    {
      categoryId: 4,
      categoryName: "Conference Halls",
      description: "Modern conference halls equipped with audio-visual facilities.",
      features: ["Projector", "High-speed internet", "Seating capacity up to 100", "Air conditioning"],
      price: 500
    },
    {
      categoryId: 5,
      categoryName: "Banquet Halls",
      description: "Spacious banquet halls for weddings and large gatherings.",
      features: ["Seating capacity up to 500", "Catering services", "Decor services", "Audio-visual equipment"],
      price: 1000
    }
  ];

  return (
 
<div className="w-full max-h-[120vh] overflow-x-hidden overflow-y-hidden bg-white p-5 rounded-xl"> 
    <div style={{ padding: '20px' }}>
      <h1 className="text-[25px] font-bold text-black">Category Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', color:'white' }}>
        {category.map(item => (
          <div key={item.categoryId} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor:'#0EA5E9' 
            
          }}>
            <h2 className='text-2xl font-bold py-1.5 text-black'>{item.categoryName}</h2>
            <img src="../hotel.jpg"/>
            <p>{item.description}</p>
            <h4 className='font-bold py-1.5 text-white'>Features:</h4>
            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className='text-2xl py-1.5 text-orange-200'><strong>Price:</strong> ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategoryPage;
