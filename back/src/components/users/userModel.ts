import { UserModel } from "./userSchema";

class User {
  static async create({ newUser }: any) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }: { email: string }) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findById({ user_id }: { user_id: string }) {
    const user = await UserModel.findOne({ id: user_id });
    return user;
  }

  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async update({ user_id, fieldToUpdate, newValue }: {user_id: string, fieldToUpdate: string, newValue: any}) {
    const filter = { id: user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }
}

export { User };
