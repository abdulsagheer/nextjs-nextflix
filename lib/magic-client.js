import { Magic } from "magic-sdk";

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.MAGIC_PUBLISHABLE_API_KEY)
  );
};

const magic = createMagic();
console.log("Magic Setup", magic());
