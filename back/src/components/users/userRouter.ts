import { Router } from "express";
import { NotFoundError } from "../../utils/error/notfound.error";
import { login_required } from "../../lib/login_required";
import { recipeService } from "../recipes/recipeService";
import { userAuthService } from "./userService";

const userAuthRouter = Router();

// User register
userAuthRouter.post("/user/register", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const {name, email, password} = req.body

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      name,
      email,
      password,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// User login
userAuthRouter.post("/user/login", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const {email, password} = req.body

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

// Get users list (전체 유저 리스트: 사용안할수도있는 기능)
userAuthRouter.get(
  "/userlist",
  login_required,
  async function (req, res, next) {
    try {
      // 전체 사용자 목록을 얻음
      const users = await userAuthService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
);

// Get user info 
userAuthRouter.get(
  "/user/current",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const user_id = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        user_id,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

// Edit user info
userAuthRouter.put(
  "/users/:userId",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const currentUser = req.currentUserId;
      const user_id = req.params.userId;

      // 로그인한 사용자와 params로 들어온 userId가 다를 경우 에러
      if (user_id != currentUser) {
        throw new Error ('path paramater로 보낸 유저 id와 로그인된 유저 id 값이 달라 수정을 제한합니다.')
      }

      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const name = req.body.name ?? null;
      const password = req.body.password ?? null;

      const toUpdate :{name?: string, password?: string} = { name, password };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// jwt 토큰 기능 확인용, 삭제해도 되는 라우터임.
userAuthRouter.get("/afterlogin", login_required, function (req, res, next) {
  res
    .status(200)
    .send(
      `안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`
    );
});

userAuthRouter.put(
  "/scrap/addscrap/:recipeId",
  login_required,
  async (req, res, next) => {
    try {
      const user_id = req.currentUserId
      const currentUserInfo = await userAuthService.getUserInfo({
        user_id,
      })

      //현재 레시피 스크랩 현황 
      const recipe_scraps = currentUserInfo.recipe_scraps

      //현재 유저가 보고 있는 레시피(스크랩 할 레시피)
      const recipe_id = req.params.recipeId

      if (recipe_scraps.includes(recipe_id)) {
        recipe_scraps.splice(recipe_scraps.indexOf(recipe_id), 1)
      } else {
        //스크랩 추가
        recipe_scraps.push(recipe_id)  
      }

      //업데이트 된 레시피 스크랩
      const toUpdate :{ recipe_scraps?: string[]} = {recipe_scraps}

      //업데이트
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

      res.status(200).json(updatedUser)
    } catch (err) {
      next(err);
    }
  }
);

/** 마이페이지에서 삭제 기능 */
userAuthRouter.put(
  "/users/unscrap/:recipeId",
  login_required,
  async (req, res, next) => {
    try {
      const user_id = req.currentUserId
      const recipe_id = req.params.recipeId

      const user_info = await userAuthService.getUserInfo({
        user_id
      })

      // recipe_scraps => 유저가 좋아요한 레시피 전체
      const recipe_scraps = user_info.recipe_scraps
      if (recipe_scraps.includes(recipe_id)) {
        recipe_scraps.splice(recipe_scraps.indexOf(recipe_id), 1)
      } else {
        throw new NotFoundError("해당 레시피가 존재하지 않습니다. 레시피 id를 다시 확인해주세요.")
      }

      const toUpdate :{ recipe_scraps?: string[]} = {recipe_scraps}

      res.status(200).send(await userAuthService.setUser({ user_id, toUpdate }))
    } catch (err) {
      next(err);
    }
  }
);

userAuthRouter.get(
  "/scraps",
  login_required,
  async (req, res, next) => {
    try {
      const user_id = req.currentUserId

      const user_info = await userAuthService.getUserInfo({ user_id });
      const recipe_arr = user_info.recipe_scraps 
      const mapping : any[] = []
      await Promise.all(
        recipe_arr.map(async (data) => {
          const result = await recipeService.getRecipeInfo(data)
          mapping.push(result)
          return mapping
        })
      );

      res.status(200).json(mapping);
    } catch (err) {
      next(err);
    }
  }
);



export { userAuthRouter};
