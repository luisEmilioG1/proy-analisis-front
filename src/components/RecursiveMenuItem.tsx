import type { Route } from "../routes";

const recursitveMenu = (route: Route) => {
        if (!route?.routes) {
            return (
                route.path === '#' 
                ?
                <li id={`optionMenu-${route.title}`} className="sm:min-w-[120px] ms:min-h-full hover:bg-sky-800 sm:py-3 sm:block sm:cursor-pointer">{route.title}</li>
                :
                <a href={route.path} id={`optionMenu-${route.title}`} className="sm:min-w-[120px] ms:min-h-full hover:bg-sky-800 sm:py-3 sm:block">
                <li>{route.title}</li>
                </a>
            );
        }
        return (
            <details className="bg-sky-900 text-slate-100 sm:relative sm:cursor-pointer sm:min-w-[120px] sm:py-3">
                
                <summary>{route.title}</summary>
                <ul className="z-10 bg-sky-900 text-slate-100 sm:absolute sm:w-full ">
                {route.routes.map((subRoute, index)=>(<div key={index}>{recursitveMenu(subRoute)}</div>))}
                </ul>
                
            </details>
        );
    };

interface RecursiveMenuItemProps {
    route: Route;
    }
export default function RecursiveMenuItem({ route }:RecursiveMenuItemProps ){
    return (
        <>
        {recursitveMenu(route)}
        </>
    )
}