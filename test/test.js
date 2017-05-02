var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test", function() {

    //#1 should return home page
    it("should return home page", function(done) {
        // calling home page
        server
            .get("/test")
            .end(function(err, res) {
                // HTTP status should be 200

                "yash".should.equal("yash");
                done();
            });
    });

    // it('it should GET  the aboutus null data', (done) => {
    //     supertest.get('http://localhost:3000/test').end(function(err, res) {
    //         expect(res).to.exist;
    //         expect(res.status).to.equal(200);
    //         done();
    //     })
    // });

});