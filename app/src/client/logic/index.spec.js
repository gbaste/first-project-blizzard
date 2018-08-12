'use strict'

describe ('Blizzard Boss', () => {

    describe ('Blizzard API', () => {
        it('Should return the correct data', () => {
            return logic.getAllBosses()
            .then(res => {
                expect(res.bosses[0].id).toBe(86217) 
                expect(res.bosses[0].name).toBe('Vigilante Kaathar')
            })
        })
    })
})