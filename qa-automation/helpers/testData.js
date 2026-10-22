export function generateTestUser({
    prefix = 'user',
    domain = 'gmail.com'
} = {}) {
    const random = Math.floor(Math.random() * 1000000);
    const username = `${prefix}_${random}`;
    return {
        username,
        email: `${username}@${domain}`,
        password: 'ytkalub712',
    };
};