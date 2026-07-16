const request = require("supertest");
const app = require("../app");
const dotenv = require("dotenv");
dotenv.config();

describe("Healthcheck endpoint", () => {
    it("should return 200 OK", async () => {
        const response =  await request(app).get(`/healthcheck/${process.env.VERSION}/api`);
    
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });
});

describe("Healthcheck endpoint -- database connection", () => {
    it("should return 200 OK", async() => {
        const response = await request(app).get(`/healthcheck/${process.env.VERSION}/db`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body.timestamp).toBeDefined();
        
    });
});