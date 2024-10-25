import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User, { IUser } from "../models/user.model";
import dotenv from "dotenv";
dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await new User({
            googleId: profile.id,
            email: profile.emails![0].value,
            displayName: profile.displayName,
            profilePicture: profile._json.picture,
          }).save(); // Kullanıcıyı kaydetmeyi unutmayın
        }
        done(null, user);
      } catch (error) {
        done(error); // Hata durumunda done fonksiyonunu çağırın
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  done(null, user);
});
