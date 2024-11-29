import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log("Updated Coffee Data:", updatedCoffee);

    // Send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json()) // Correctly parse the JSON response
      .then((data) => {
        console.log("Server Response:", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Info",
            text: "No changes were made to the coffee details.",
            icon: "info",
            confirmButtonText: "Okay",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update coffee.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-center font-cursive mb-4">
          Update Coffee
        </h2>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
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
                defaultValue={name}
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
                defaultValue={chef}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
