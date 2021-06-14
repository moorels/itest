import Image from 'next/image'

function Test (props){


const x = Math.floor(Math.random() * 2 ) + 1



    return ( 
        <div>
        
        <h1>{props.id * props.num /  props.num }</h1>
        <Image 



        src = {`/${x}.jpg`}
        width = {134}
        height={234}
        
        ></Image>
 {props.children}
        
        </div>
        
        
    )
}

export default Test