import Chance from "chance"
const chance = Chance();
export const fakeuser = ()=>{
    return chance.name({message: "usman"})

}
