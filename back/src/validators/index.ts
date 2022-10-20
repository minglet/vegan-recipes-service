import { loginSchema } from "./login.validator";
import {registerSchema} from "./register.validator";
import {editSchema} from "./edit.validator";


export default {
        login: loginSchema,
        register : registerSchema,
        edit : editSchema
 }

 