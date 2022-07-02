import {useContext} from 'react'
import ResourceContext from './resource-context'

/*Resource context: used to manage global states 
This PrerenderButton component is meant to update the prerenderURL param on button click*/
export default function PrerenderButton() {
  const {dispatch} = useContext(ResourceContext)
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parent = e.target.closest('a')
    if(!parent) {
      return
    }
    const href = parent.getAttribute('href')
    dispatch( {type: 'update', prerenderURL: href} )
  }

  return (
    <button className='ml-auto bg-gray-200 hover:bg-gray-300 px-4 rounded' onClick={handleClick}>
      Prerender
    </button>
  )

}