import React  from "react";
const Foot = () =>{
    return (
     <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <ul className="flex gap-6 text-gray-400">
            <li>
                <a href="#">Facebook</a>
            </li>
            <li>
                <a href="#">Instagram</a>
            </li>
            <li>
                <a href="#">Twitter</a>
            </li>
        </ul>
        <div>
            <p className="font-thin">Have a Question </p>
            <a href="#" className="font-medium">Talk to specialist</a>
        </div>
    </div>
    )
}
export default Foot