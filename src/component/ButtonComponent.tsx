//     export default function SmallButtonComponent(props:{name:string}){
//     return (
//         <>
//             <button>{props.name}</button>
//         </>
//
//     )
// }



    export default function SmallButtonComponent(props:{children:React.ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>

    )
}