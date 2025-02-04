import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const newCoffee = {
      name: form.name.value,
      category: form.category.value,
      supplier: form.supplier.value,
      chef: form.chef.value,
      taste: form.taste.value, // Fixed typo from "test" to "taste"
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log("Sending Coffee Data:", newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset(); // Fixed reset issue
        }
      })
      .catch((error) => {
        console.error("Error adding coffee:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add coffee",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-red-300">Add Coffee</h1>
      <form onSubmit={handleSubmitForm} className="card-body">
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Coffee Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter Supplier"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter Coffee Details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter Chef Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter Taste Description"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-full m-2">
            <label className="label font-bold text-xl">
              <span className="label-text mb-4">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-gray-600"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
