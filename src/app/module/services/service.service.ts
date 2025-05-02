import prisma from "../../config"

const createService = async(
    bikeId:string,
    serviceDate: string,
    description: string,
    status:string
) => {
return prisma.serviceRecord.create({
    data: {
        bikeId,
        serviceDate: new Date(serviceDate),
        description,
        status
      },
});
};

const getServices = async() => {
    return prisma.serviceRecord.findMany();
};

const getServiceById = async(serviceId:string) => {
  return prisma.serviceRecord.findUnique({
    where:{serviceId},
    include: {}
  });
};

const updateService = async (
    serviceId:string,
    completionDate: string
) => {
 return prisma.serviceRecord.update({
  where:{serviceId},
  data: {
    status: "done",
    completionDate: new Date(completionDate),
  },
 });
};

const getOverdueOrPendingServices = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const services = await prisma.serviceRecord.findMany({
      where: {
        status: {
          in: ['pending', 'in-progress']
        },
        serviceDate: {
          lt: sevenDaysAgo // Find services older than 7 days
        }
      }
    });
    console.log(services);
        
        return {
          success: true,
          message: "Overdue or pending services fetched successfully",
          data: services
        };
      };
    

export const serviceRecordServices = {
 createService,
 getServices,
 getServiceById,
 updateService,
 getOverdueOrPendingServices
  };