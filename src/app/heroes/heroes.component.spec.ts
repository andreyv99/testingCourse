import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id:1, name: 'SpiderDude', strength: 8},
            {id:2, name: 'Batman', strength: 24},
            {id:3, name: 'SuperDude', strength: 55}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.includes(HEROES[2])).toBeFalsy();
        })

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })

    })
})