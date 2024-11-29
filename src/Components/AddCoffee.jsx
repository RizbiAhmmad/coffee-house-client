import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log("New Coffee Data:", newCoffee);

    // send data to the server
    fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    
    .then (res=>res.json)
    .then (data =>{
        console.log('Server Response:', data);
        if(data.inserted){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      }
  
    })

  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-center font-cursive mb-4">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-600 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter coffee name"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
            <div>
              <label
                htmlFor="chef"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chef
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                placeholder="Enter coffee chef"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
            <div>
              <label
                htmlFor="supplier"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
            <div>
              <label
                htmlFor="taste"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="Enter coffee taste"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter coffee category"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Details
              </label>
              <input
                type="text"
                id="details"
                name="details"
                placeholder="Enter coffee details"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
