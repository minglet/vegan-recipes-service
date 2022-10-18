import { UserModel } from "./userSchema";

class User {
  static async create({ newUser }: any) {
    return await UserModel.create(newUser);
  }

  static async findByEmail({ email }: { email: string }) {
    return await UserModel.findOne({ email });
  }

  static async findById({ user_id }: { user_id: string }) {
    return await UserModel.findOne({ id: user_id });
  }

  static async findAll() {
    return await UserModel.find({});
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
