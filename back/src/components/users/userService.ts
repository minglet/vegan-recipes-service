import { User } from "./userModel"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../utils/error/bad-request.error"


class userAuthService {
  /** User register */
  static async addUser({ name, email, password }: {name: string, email: string, password: string}) {
    // 이메일 중복 확인
    const user = await User.findByEmail({ email });
    if (user) {
      const errorMessage =
        "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
      return { errorMessage };
    }

    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    // id 는 유니크 값 부여
    const id = uuidv4();
    const newUser = { id, name, email, password: hashedPassword };

    // db에 저장
    const createdNewUser: any = await User.create({ newUser });
    createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewUser;
  }

  /** User login */
  static async getUser({ email, password }: {email: string, password: string}) {
    // 이메일 db에 존재 여부 확인
    const user = await User.findByEmail({ email });
    if (!user) 
      throw new BadRequestError 
       ( "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );
    if (!isPasswordCorrect) 
      throw new BadRequestError 
        ("비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
    

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ user_id: user.id }, secretKey);

    // 반환할 loginuser 객체를 위한 변수 설정
    const id = user.id;
    const name = user.name;

    const loginUser = {
      token,
      id,
      email,
      name,
      errorMessage: null,
    };

    return loginUser;
  }

  /** Edit user info */
  static async setUser({ user_id, toUpdate }:
    {user_id: string, toUpdate: {
      recipe_scraps?: string[], name?: string, password?: string}}) {
    // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
    let user :any = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) 
      throw new BadRequestError
        ("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    

    // 업데이트 대상에 값이 있다면, 즉 값이 null 이 아니라면 업데이트 진행
    if (toUpdate.name) {
      const fieldToUpdate = "name";
      const newValue = toUpdate.name;
      user = await User.update({ user_id, fieldToUpdate, newValue });
    }

    if (toUpdate.password) {
      const fieldToUpdate = "password";
      const newValue = await bcrypt.hash(toUpdate.password, 10);
      user = await User.update({ user_id, fieldToUpdate, newValue });
    }

    if (toUpdate.recipe_scraps) {
      const fieldToUpdate = "recipe_scraps";
      const newValue = toUpdate.recipe_scraps;
      user = await User.update({ user_id, fieldToUpdate, newValue })
    }
    return user;
  }

  /** Get one user info */
  static async getUserInfo({ user_id }: { user_id: any }) {
    const user: any = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage : string =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      
      return { errorMessage };
    }
    return user;
  }
}


export { userAuthService };

