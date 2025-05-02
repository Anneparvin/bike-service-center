import prisma from "../../config"

const createBike = async(
    brand:string,
    model: string,
    year: number,
    customerId:string
) => {
return prisma.bike.create({
    data:{ brand, model, year, customerId},
});
};

const getBikes = async() => {
    return prisma.bike.findMany();
};

const getBikeById = async(bikeId:string) => {
  return prisma.bike.findUnique({
   where: {bikeId}
  });
};


export const bikeService = {
   createBike,
   getBikes,
   getBikeById,
  };