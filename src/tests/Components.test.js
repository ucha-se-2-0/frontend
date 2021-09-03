// import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { lessons } from '../Assets'
import { Search } from "../Components"

expect.extend({
    toContainTitle(received, title)
    {
        let pass = false;
        for(let s of received)
        {
            if(s.section.title === title)
            {
                pass = true;
                break;
            }
        }

        return {
            message: () => `Expected ${received} to contain ${title}`,
            pass
        }
    }
})

function SetCharAt(string, index, new_char) {
    return string.substr(0, index) + new_char + string.substr(index + 1);
}

describe("Search engine", ()=>{
    test("Match exact value", ()=>{
        let title = lessons.biology[0].sections[0].title;
        let results = Search(title);
        expect(results).toContainTitle(title);
    })

    test("Exact value is first", ()=>{
        let title = lessons.biology[0].sections[0].title;
        let results = Search(title);
        console.log(title);
        console.log(results);
        expect(results[0].section.title).toBe(title);
    })

    
    test("Roughly matches", ()=>{
        let title = lessons.biology[0].sections[0].title;
        let results = Search(SetCharAt(title, 4, "a"));
        console.log(title);
        console.log(results);
        expect(results).toContainTitle(title);
    })
})