const express = require("express");
const supertest = require("supertest");
const { constants } = require('http2');
const healthController = require("../../src/controllers/HealthController");

describe("HelthController", () => {
    let app;
    beforeEach(() => {
        app = express();
        app.use(express.json());
        app.use("/health", healthController);
    });
    
    it("should return status 200", async () => {
        const response = await supertest(app).get("/health/status");
        expect(response.status).toBe(constants.HTTP_STATUS_OK);
        expect(response.body).toStrictEqual({ status: "OK", code: 200 });
    });
});