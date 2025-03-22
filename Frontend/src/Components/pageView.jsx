import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const UsePageView = () =>{
  const location = useLocation();

  useEffect(()=>{
    window.gtag('config','G-KT2L3TL36W',{
      page_path: location.pathname + location.search,
    })
  },[location])
}

export default UsePageView