// user.service.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase.utils';
import jwt from 'jsonwebtoken';


export default class UserService {


  public static async registerUser(email: string, password: string){
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user.uid;
    } catch (error) {
      return error;
    }
  }


  public static async loginUser(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if(userCredential.user){
        const payload = { email };
        let token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return "Bearer "+token;
      }
      
    } catch (error) {
      return error;
    }
  }
}
