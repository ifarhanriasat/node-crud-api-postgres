import UserMapper from "../mappers/user.mapper";
import UserRepo from "../repositories/user.repository";
import { UserRequestPayload } from "../request/user.request";
import { UserResponse } from "../response/user.response";



export default class UserService {
    // add new user
    public static async addNewUser(requestPayload: UserRequestPayload) {
        try{
            let data = await UserRepo.addUser(await UserMapper.requestToEntityMapper(requestPayload));
            return data;
        } catch (error) {
            return error;
        }
    }

    // find all user
    public static async getAllUsers() {
        try {
            let data: UserResponse[] = (await UserRepo.getAllUsers()).map((user) => {
                return UserMapper.entityToResponseMapper(user);
            })
            return data;

        } catch (error) {
            return error
        }
        
    }

    // find user by id
    public static async findUserById(id: number) {
        try {
            let user = await UserRepo.findUserById(id);
        if (user) {
            let userResponse = UserMapper.entityToResponseMapper(user);
            return userResponse;
        }
        else {
            return "User Does Not Exist";
        }

        } catch (error) {
            return error;
        }

    }

    // update user
    public static async updateById(id: number, requestPayload: UserRequestPayload) {

        const updatedData: UserRequestPayload = {
            firstName: requestPayload.firstName,
            lastName: requestPayload.lastName,
            email: requestPayload.email,
            phone: requestPayload.phone,
            password:requestPayload.password,
            birthday: requestPayload.birthday
        };
        return await UserRepo.updateUserById(id, await UserMapper.requestToEntityMapper(updatedData));

    }

    // delete user
    public static async deleteUser(id: number) {
        try {
            let data = await UserRepo.deleteUser(id);
            return data;

        } catch (error) {
            return error;
        }

    }

}