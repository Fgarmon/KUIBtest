/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { TestBed, async } from '@angular/core/testing';
import { UserGridViewComponent } from './user-grid.view.component';
describe('UserGridViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserGridViewComponent],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(UserGridViewComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(UserGridViewComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(UserGridViewComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
