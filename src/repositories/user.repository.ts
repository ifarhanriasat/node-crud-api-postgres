import AppDataSource from "../database/db.config";
import { UserEntity } from "../entities/user.entity";


export default class UserRepo {
    public static addUser(user: UserEntity) {
        return AppDataSource.getRepository(UserEntity).save(user);
    }

    public static getAllUsers() {
        return AppDataSource.getRepository(UserEntity).find();
    }

    public static findUserById(id: number) {
        return AppDataSource.getRepository(UserEntity).findOne({ where: { id: id } });
    }

    public static async updateUserById(id: number, updatedUserData: Partial<UserEntity>) {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const updatedData: Partial<UserEntity> = {};
        // Fetch the user by ID
        let user = await userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }

        // Update the user's fields with the new values
        user = { ...user, ...updatedUserData };

        // Save the updated user entity back to the database
        return userRepository.save(user);
    }

    public static deleteUser(id: number) {
        return AppDataSource.getRepository(UserEntity).delete(id);
    }


}