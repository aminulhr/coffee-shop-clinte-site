import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeHome = ({ coffee }) => {
  const { _id, name, category, chef, photo } = coffee;

  const handleDelete = (_id) => {
    console.log("Deleting coffee with ID:", _id); // Debugging

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          // Fixed URL here
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Could not delete the coffee. It may not exist.",
                icon: "error",
              });
            }
          })
          .catch((error) => console.error("Error deleting coffee:", error));
      }
    });
  };

  return (
    <div className="w-[648px] h-[300px] bg-[#F5F4F1] rounded-xl flex flex-col mb-6 justify-center">
      <div className="flex justify-around">
        <div>
          <figure>
            <img className="w-[180px] h-[239px]" src={photo} alt={name} />
          </figure>
        </div>
        <div className="text-black flex flex-col justify-center">
          <h2 className="card-title">
            Name: <span>{name}</span>
          </h2>
          <h2 className="card-title">
            Category: <span>{category}</span>
          </h2>
          <h2 className="card-title">
            Chef: <span>{chef}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center">
          <Link>
            <button className="w-10 h-10 bg-[#D2B48C] justify-center flex items-center rounded-[5px]">
              <FaEye className="w-5 h-5" />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="w-10 h-10 bg-[#3C393B] justify-center flex items-center rounded-[5px]">
              <FaEdit className="w-5 h-5" />
            </button>
          </Link>
          <Link>
            <button
              onClick={() => handleDelete(_id)}
              className="w-10 h-10 bg-[#EA4744] justify-center flex items-center rounded-[5px]"
            >
              <FaTrash className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeHome;
