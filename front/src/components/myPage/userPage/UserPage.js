import React from "react";
import "./myPage.css";

import UserName from "./UserName";
import UserEditBtn from "./UserEditBtn";
import Recipes from "./likeRecipes/Recipes";

export default function UserPage() {
  return (
    <>
      <UserName />
      <UserEditBtn />
      <Recipes />
    </>
  );
}
