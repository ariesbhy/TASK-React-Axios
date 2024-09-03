import instance from ".";

//getting all the pets
const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

//getting one pet by ID
const getPetById = async (petId) => {
  const response = await instance.get(`/pets/${petId}`);
  return response.data;
};
//Create a new pet
const createPet = async (data) => {
  const response = await instance.post("/pets");
  return response.data;
};

export { getAllPets, getPetById, createPet };
