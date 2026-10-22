export class LoginPage {
    #emailInput
    #passwordInput
    #submitButton
    constructor(page) {
        this.page = page;
        this.#emailInput = page.locator('#email');
        this.#passwordInput = page.locator('#password');
        this.#submitButton = page.locator('button[type="submit"]');
        this.errorMessage = page.getByRole('alert');
    }
    async open() {
        await this.page.goto('/auth/login')
    }
    async login(email, password) {
        await this.#emailInput.fill(email);
        await this.#passwordInput.fill(password);
        await this.#submitButton.click();
    }
}