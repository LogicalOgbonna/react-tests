import { types } from "../../actions/types";
import postReducer from "./reduce"
describe('Poist Reducer', () => {
    it("Should Return default state", () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it("Should return new state if receivng type", () => {
        const posts = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });

        expect(newState).toEqual(posts)
    })
})
