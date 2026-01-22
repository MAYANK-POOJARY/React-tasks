import React, { useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [role, setRole] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted the process");
    console.log(name, image, desc, role);

    setAllUsers([...allUsers, { name, image, desc, role }]);

    setName("");
    setImage("");
    setRole("");
    setDesc("");
  };

  const deleteUser = (id) => {
    const copy = [...allUsers]
     copy.splice(id,1);
    setAllUsers(copy)
    console.log(allUsers)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap justify-center gap-3 m-4"
      >
        <input
          className="w-[49%] p-4 border "
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="w-[49%] p-4 border "
          type="text"
          placeholder="Enter your Image Url"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          className="w-[49%] p-4 border"
          type="text"
          placeholder="Enter your Job role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          className="w-[49%] p-4 border"
          type="text"
          placeholder="Enter your description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="w-[98.5%] border p-4 bg-emerald-800 text-white text-lg font-bold">
          Submit
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3">
        {allUsers.map(function(elem,idx){
        return <Cards key={idx} delete={deleteUser} elem={elem} idx={idx} />
      })}
      </div>
    </div>
  );
};

export default App;
