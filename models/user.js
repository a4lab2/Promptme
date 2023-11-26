import {Schema,model, models} from "mongoose"

const UserSchema=new Schema({

    email:{
        type:String,
        unique:[true,'email already exists'],
        required:[true,'email is required']
    }
,
    username:{
        type:String,
        unique:[true,'username already exists'],
        required:[true,'username is required'],
        
    },
    image: {
        type: String,
      }
})

//check if user exists if not create one with the schema
const User = models.User || model("User", UserSchema);

export default User