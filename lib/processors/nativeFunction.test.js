const nativeFunction = require("./nativeFunction")
// @ponicode
describe("nativeFunction.preprocess", () => {
    test("0", () => {
        let callFunction = () => {
            nativeFunction.preprocess("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            nativeFunction.preprocess("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            nativeFunction.preprocess("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            nativeFunction.preprocess("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            nativeFunction.preprocess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("nativeFunction.postprocess", () => {
    test("0", () => {
        let param1 = [["Error:", "\n\nThe first error message:\n", "Wait time out reached, while waiting for results"], ["No os dependencies found. ", "Grader id does not match submission id that was passed in", "does not exist"], ["Wait time out reached, while waiting for results", "cannot be found.", "Sorry, The video you are looking for does not exist."]]
        let callFunction = () => {
            nativeFunction.postprocess(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["An error occurred processing your request.", "No response", "New Error "], ["TrainerCourseDetailError: Either not an ajax call or not a GET request!!!", "Unable to allocate address", "To force deletion of the LAG use delete_force: True"], ["Wait time out reached, while waiting for results", "TypeError exception should be raised", "There is a mismatch"]]
        let callFunction = () => {
            nativeFunction.postprocess(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Ran out of iterations", "No error", "Error in retrieving email."], ["Message originator is not the grader, or the person being graded", "Sorry, The video you are looking for does not exist.", "New Error "], ["Could not find a submission object for message from xqueue", "Sorry, The video you are looking for does not exist.", "To force deletion of the LAG use delete_force: True"]]
        let callFunction = () => {
            nativeFunction.postprocess(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Top level object in 'override.yml' needs to be an object", "TypeError exception should be raised", "the specified credentials were rejected by the server"], ["No updates are to be performed.", "Error getting key from: %s", "Error:"], ["Could not find an existing submission in location.  rubric is original.", "Message originator is not the grader, or the person being graded", "Grader id does not match submission id that was passed in"]]
        let callFunction = () => {
            nativeFunction.postprocess(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Grader id does not match submission id that was passed in", "Unknown error", "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!"], ["Could not find a grader object for message from xqueue", "Top level object in 'override.yml' needs to be an object", "invalid option"], ["missing encoding", "Internal Server Error\n", "does not exist"]]
        let callFunction = () => {
            nativeFunction.postprocess(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            nativeFunction.postprocess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
