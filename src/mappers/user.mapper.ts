import bcrypt from 'bcryptjs';
import { UserEntity } from "../entities/user.entity";
import { UserRequestPayload } from "../request/user.request";
import { UserResponse } from "../response/user.response";

export default class UserMapper {

    public static async requestToEntityMapper(requestPayload: UserRequestPayload) {
        let userEntity = new UserEntity();
        let hashedPassword = await bcrypt.hash(requestPayload.password, 10);
        userEntity.firstName = requestPayload.firstName;
        userEntity.lastName = requestPayload.lastName;
        userEntity.email = requestPayload.email;
        userEntity.phone = requestPayload.phone;
        userEntity.password = hashedPassword;
        userEntity.birthday = requestPayload.birthday;
        return userEntity;
    }


    public static entityToResponseMapper(entity: UserEntity): UserResponse {
        let userResponse: UserResponse = {
            id: entity.id,
            firstName: entity.firstName,
            lastName: entity.lastName,
            email: entity.email,
            phone: entity.phone,
            birthday: entity.birthday,
            createdAt: entity.createdAt,
            lastModified: entity.lastModified
        }
        return userResponse;
    }
}