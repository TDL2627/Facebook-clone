import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon , VideoCameraIcon } from "@heroicons/react/solid";

const contacts = [
    {src:"https://links.papareact.com/f0p", name:"Jeff Bezoz"},
    {src:"https://links.papareact.com/kxk", name:"Elon Musk"},
    {src:"https://links.papareact.com/zvy", name:"Bill Gates"},
    {src:"https://links.papareact.com/snf", name:"Mark Zuckerberg"},
    {src:"https://links.papareact.com/d0c", name:"Harry Potter"},
    {src:"https://links.papareact.com/6gg", name:"The Queen"},
    {src:"https://links.papareact.com/r57", name:"James Bond"}


]


export function Widgets(){
    return(
        <div>
<div>
    <h2 className="text-xl">Contacts</h2>
    <div className="flex space-x-2">
        <VideoCameraIcon className="h-6"/>
        <SearchIcon className="h-6"/>
        <DotsHorizontalIcon className="h-6"/>

    </div>
</div>
        </div>
    )
}