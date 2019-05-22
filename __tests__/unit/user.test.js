
const { User } = require('../../src/app/models');
const truncate = require("../utils/truncate");

describe("User", () => {
    
    beforeEach( async () => { await truncate(); })


    it("Should create a new user", async () =>{
        const user = await User.create({name: "Cesar", email: 'cesarvinici@gmail.com'});
        console.log(user);

        expect(user.id).toBeGreaterThan(0);
    })
})
