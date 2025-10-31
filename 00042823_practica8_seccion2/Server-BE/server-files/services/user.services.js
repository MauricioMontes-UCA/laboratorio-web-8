import { userRepository } from "../db/user.repository.js";

class UserService {
    async getUsers() {
        const results = await userRepository.selectAll();
        return results.rows
    }

    async getUserById(id) {
        const results = await userRepository.selectByID(id);
        return results.rows
    }

    async postUser(name, email, password) {
        const results = await userRepository.insert(name, email, password);
        return results.rows[0]
    }

    async putUser(id, name, email, password){
        const results = await userRepository.update(id, name, email, password);
        return results.rows[0]
    }

    async deleteUserById(id) {
        const results = await userRepository.delete(id);
        return results.rows[0]
    }
}

export const userService = new UserService();