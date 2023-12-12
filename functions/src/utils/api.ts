import axios from "axios";

const serviceClient = axios.create({
  baseURL: process.env.SERVICE_BASE_URL
});

export const userServiceClient = serviceClient;
export const configServiceClient = serviceClient;

export const sphereOneEndpoints = {
  users: {
    get: () => "/user",
    create: () => "/user",
    update: () => "/user",
    delete: () => "/user"
  },
  config: {
    get: () => "/config",
    create: () => "/config",
    update: () => "/config",
    delete: () => "/config"
  }
}