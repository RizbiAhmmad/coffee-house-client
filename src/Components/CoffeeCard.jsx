import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log("Attempting to delete coffee with ID:", _id);

    if (!_id) {
      Swal.fire({
        title: "Error!",
        text: "Invalid coffee ID. Cannot delete.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, { method: "DELETE" })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log("Delete Response:", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Coffee not deleted. Try again.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error during fetch:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete coffee. Please try again later.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={`Coffee: ${name}`} />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500 text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
