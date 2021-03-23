import * as React from "react"

const TeachersComponent: React.FC = () =>{
    return(<div>
        Welcome on the teachers page!
        <input type="text" placeholder="Start typo.." autoComplete="false"/>
        <input type="button" value={"Find!"}/>
        <div>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
            </ul>

        </div>
    </div>)
}
export default TeachersComponent