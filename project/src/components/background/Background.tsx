import backgroundAC from '@/assets/AlphaCursoBg.png'
import Image from 'next/image'

export default function Background() {
    return(
        <Image
            src={backgroundAC}
            alt={"Background"}
            fill
            className='-z-50 object-cover '
        />  
    )
}