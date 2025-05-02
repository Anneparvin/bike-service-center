import prisma from "../../config"

const createCustomer = async(
  name:string,
  email: string,
  phone: string
) => {
return prisma.customer.create({
    data:{ name, email, phone},
});
};

const getCustomers = async() => {
    return prisma.customer.findMany();
};

const getCustomerById = async(customerId:string) => {
  return prisma.customer.findUnique({
    where:{customerId},
    // include: {}
  });
};

const updateCustomer = async (
  customerId:string,
  data: Partial<{name:string, phone:string}>
) => {
 return prisma.customer.update ({
  where:{customerId},
  data,
 });
};

const deleteCustomer = async(customerId:string) => {
  return prisma.customer.delete({
    where:{customerId},
  });
};

export const customerService = {
   createCustomer,
   getCustomers,
   getCustomerById,
   updateCustomer, 
   deleteCustomer
  };